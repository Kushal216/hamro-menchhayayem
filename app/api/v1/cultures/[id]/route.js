import { NextResponse } from 'next/server';
import Culture from '@/models/culture';
import isLoggedIn, { isAdmin } from '@/lib/middlewares/validateAuth';

/**
 * @swagger
 * /api/v1/cultures/{id}:
 *   get:
 *     summary: get a item of given id
 *     tags:
 *       - cultures
 *   put:
 *     summary: Replace the data associated to the item with given id
 *     tags:
 *       - cultures
 *   delete:
 *     summary: delete item of given id
 *     tags:
 *       - cultures
 *   patch:
 *     summary: updates specified properties in the req.body corresponding to the given id
 *     tags:
 *       - cultures
 */

export async function GET(req, { params }) {
  const { id } = await params;
  try {
    const culture = await Culture.findById(id);

    if (!culture) {
      return NextResponse.json({ message: 'item Not found' }, { status: 404 });
    }

    return NextResponse.json({
      message: 'item found and returned',
      data: culture,
    });
  } catch (err) {
    return NextResponse.json({
      error: err.message,
      message: `DB error in performing the create culture action. `,
      err: err,
    });
  }
}

export async function PATCH(req, { params }) {
  if (!isLoggedIn(req)) {
    return NextResponse.json(
      { message: 'you need to be logged in to perform this request.' },
      { status: 401 }
    );
  }

  const { id } = await params;
  const body = await req.json();

  try {
    const updated = await Culture.findByIdAndUpdate(
      id,
      { $set: body }, // only update provided fields
      { new: true, runValidators: true }
    );

    if (!updated) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    return NextResponse.json({
      message: `Updated culture ${updated.title}`,
      data: updated,
    });
  } catch (err) {
    return NextResponse.json({
      error: err.message,
      message: `DB error in performing the create culture action. `,
      err: err,
    });
  }
}


export async function PUT(req, { params }) {
  if (!isLoggedIn(req)) {
    return NextResponse.json(
      { message: 'you need to be logged in to perform this request.' },
      { status: 401 }
    );
  }

  const body = await req.json();
  const { id } = await params;

  try {
    const culture = await Culture.findById(id);

    if (!culture) {
      return NextResponse.json(
        { message: "The culture id doesn't exist." },
        { status: 404 }
      );
    }

    const dbResponse = await Culture.replaceOne(
      { _id: id },
      {
        title: body.title,
        description: body.description,
        gallery: body.gallery,
        video: body.video,
        coverImage: body.coverImage,
        category: body.category,
      }
    );

    return NextResponse.json({
      message: `replaced culture ${body.title} with ${body.title}`,
      id: id,
      data: dbResponse,
    });
  } catch (err) {
      return NextResponse.json({
        error: err.message,
        message: `DB error in performing the create culture action. `,
        err: err,
      });
    }
}

export async function DELETE(req, { params }) {
  if (!isAdmin(req)) {
    return NextResponse.json(
      { message: 'Permission Error: Only admins can delete items.' },
      { status: 401 }
    );
  }

  const { id } = await params;

  try {
    const culture = await Culture.findByIdAndDelete(id);

    if (culture) {
      return NextResponse.json({
        message: `deleted ${culture.title}`,
        data: culture,
      });
    } else {
      return NextResponse.json(
        {
          message: "The culture with the given id doesn't exist.",
          id: id,
        },
        { status: 404 }
      );
    }
  } catch (err) {
    return NextResponse.json({
      error: err.message,
      message: `DB error in performing the create culture action. `,
      err: err,
    });
  }
}
