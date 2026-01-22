import { NextResponse } from 'next/server';
import School from '@/models/school.js';
import isLoggedIn, { isAdmin } from '@/lib/middlewares/validateAuth';

/**
 * @swagger
 * /api/v1/schools/{id}:
 *   get:
 *     summary: get a item of given id
 *     tags:
 *       - schools
 *   put:
 *     summary: Replace the data associated to the item with given id
 *     tags:
 *       - schools
 *   delete:
 *     summary: delete item of given id
 *     tags:
 *       - schools
 *   patch:
 *     summary: updates specified properties in the req.body corresponding to the given id
 *     tags:
 *       - schools
 */

export async function GET(req, { params }) {
  const { id } = await params;
  try {
    const school = await School.findById(id);

    if (!school) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    return NextResponse.json({
      message: 'data sent successfully',
      data: school,
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

  const { id } = await params;
  const body = await request.json();
  try {
    const school = await School.findById(id);
    if (!school) {
      return NextResponse.json({ error: 'Not Found' }, { status: 404 });
    }
    const dbResponse = await School.replaceOne(
      { _id: id },
      {
        title: body.title,
        description: body.title,
        gallery: body.gallery,
        coverImage: body.coverImage,
        location: body.location,
        video: body.video,
        category: body.category,
        phoneNo: body.phoneNo,
      }
    );
    return NextResponse.json({
      message: `replaced school ${body.title} with ${body.title}`,
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
    const updated = await School.findByIdAndUpdate(
      id,
      { $set: body },
      { new: true, runValidators: true }
    );

    if (!updated) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    return NextResponse.json({
      message: `Updated school ${updated.title}`,
      data: updated,
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
    const school = await School.findByIdAndDelete(id);

    if (school) {
      return NextResponse.json({
        message: `deleted ${school.title}`,
        data: school,
      });
    } else {
      return NextResponse.json(
        {
          message: "The school with the given id doesn't exist.",
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
