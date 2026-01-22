import { NextResponse } from 'next/server';
import Literature from '@/models/literature';
import isLoggedIn from '@/lib/middlewares/validateAuth';

/**
 * @swagger
 * /api/v1/literature/{id}:
 *   get:
 *     summary: get a item of given id
 *     tags:
 *       - literature
 *   put:
 *     summary: Replace the data associated to the item with given id
 *     tags:
 *       - literature
 *   delete:
 *     summary: delete item of given id
 *     tags:
 *       - literature
 *   patch:
 *     summary: updates specified properties in the req.body corresponding to the given id
 *     tags:
 *       - literature
 */

export async function GET(req, { params }) {
  const { id } = await params;
  try {
    const literature = await Literature.findById(id);

    if (!literature) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    return NextResponse.json({ data: literature });
  } catch (err) {
    return NextResponse.json(
      { error: err.message, message: `error: ${err.message}`, data: err },
      { status: 500 }
    );
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
    const updated = await Literature.findByIdAndUpdate(
      id,
      { $set: body }, // only update provided fields
      { new: true, runValidators: true }
    );

    if (!updated) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    return NextResponse.json({
      message: `Updated literature ${updated.title}`,
      data: updated,
    });
  } catch (err) {
    return NextResponse.json(
      { error: err.message, message: `error: ${err.message}`, data: err },
      { status: 500 }
    );
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
    const literature = await Literature.findById(id);

    if (!literature) {
      return NextResponse.json(
        { error: "The culture id doesn't exist." },
        { status: 404 }
      );
    }

    const dbResponse = await Literature.replaceOne(
      { _id: id },
      {
        title: body.title,
        description: body.description,
        video: body.video,
        coverImage: body.coverImage,
        category: body.category,
      }
    );

    return NextResponse.json({
      message: `replaced literature ${body.title} with ${body.title}`,
      id: id,
      data: dbResponse,
    });
  } catch (err) {
    return NextResponse.json(
      { error: err.message, message: `error: ${err.message}`, data: err },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  if (!isLoggedIn(req)) {
    return NextResponse.json(
      { message: 'you need to be logged in to perform this request.' },
      { status: 401 }
    );
  }

  const { id } = await params;

  try {
    const literature = await Literature.findByIdAndDelete(id);

    if (literature) {
      return NextResponse.json({
        message: `deleted ${literature.title}`,
        data: literature,
      });
    } else {
      return NextResponse.json(
        {
          message: "The literature with the given id doesn't exist.",
          id: id,
        },
        { status: 404 }
      );
    }
  } catch (err) {
    return NextResponse.json(
      { error: err.message, message: `error: ${err.message}`, data: err },
      { status: 500 }
    );
  }
}
