import { NextResponse } from 'next/server';
import isLoggedIn, { isAdmin } from '@/lib/middlewares/validateAuth';
import Places from '@/models/places';

/**
 * @swagger
 * /api/v1/places/{id}:
 *   get:
 *     summary: get a item of given id
 *     tags:
 *       - places
 *   put:
 *     summary: Replace the data associated to the item with given id
 *     tags:
 *       - places
 *   delete:
 *     summary: delete item of given id
 *     tags:
 *       - places
 *   patch:
 *     summary: updates specified properties in the req.body corresponding to the given id
 *     tags:
 *       - places
 */

export async function GET(req, { params }) {
  const { id } = await params;
  try {
    const place = await Places.findById(id);

    if (!place) {
      return NextResponse.json({ message: 'Not found' }, { status: 404 });
    }
    return NextResponse.json({
      message: 'place fetched successfully',
      data: place,
    });
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
    const updated = await Places.findByIdAndUpdate(
      id,
      { $set: body },
      { new: true, runValidators: true }
    );

    if (!updated) {
      return NextResponse.json({ message: 'Not found' }, { status: 404 });
    }
    return NextResponse.json({
      message: `Updated Places ${updated.title}`,
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
    const place = await Places.findById(id);

    if (!place) {
      return NextResponse.json(
        { message: "The places id doesn't exist." },
        { status: 404 }
      );
    }

    const dbResponse = await Places.replaceOne(
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
      message: `replaced places ${body.title} with ${body.title}`,
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
  if (!isAdmin(req)) {
    return NextResponse.json(
      { message: 'Permission Error: Only admins can delete items.' },
      { status: 401 }
    );
  }

  const { id } = await params;

  try {
    const place = await Places.findByIdAndDelete(id);

    if (place) {
      return NextResponse.json({
        message: `deleted ${place.title}`,
        data: place,
      });
    } else {
      return NextResponse.json(
        {
          message: "The place with the given id doesn't exist.",
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
