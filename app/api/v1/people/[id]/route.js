import { NextResponse } from 'next/server';
import People from '@/models/people';
import isLoggedIn, { isAdmin } from '@/lib/middlewares/validateAuth';

/**
 * @swagger
 * /api/v1/people/{id}:
 *   get:
 *     summary: get a item of given id
 *     tags:
 *       - people
 *   put:
 *     summary: Replace the data associated to the item with given id
 *     tags:
 *       - people
 *   delete:
 *     summary: delete item of given id
 *     tags:
 *       - people
 *   patch:
 *     summary: updates specified properties in the req.body corresponding to the given id
 *     tags:
 *       - people
 */

export async function GET(req, { params }) {
  const { id } = await params;

  try {
    const person = await People.findById(id);

    if (!person) {
      return NextResponse.json(
        { message: 'Person not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: 'Person fetched successfully',
        data: person,
      },
      { status: 200 }
    );
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

  try {
    const body = await req.json();

    const updatedPerson = await People.findByIdAndUpdate(
      id,
      { $set: body },
      { new: true, runValidators: true }
    );

    if (!updatedPerson) {
      return NextResponse.json(
        { message: 'Person not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: 'Person updated successfully',
        data: updatedPerson,
      },
      { status: 200 }
    );
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
    const deletedPerson = await People.findByIdAndDelete(id);

    if (!deletedPerson) {
      return NextResponse.json({ data: 'Person not found' }, { status: 404 });
    }

    return NextResponse.json(
      {
        message: 'Person deleted successfully',
        id: deletedPerson._id,
      },
      { status: 200 }
    );
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

  try {
    const updates = await req.json();

    if (!updates || Object.keys(updates).length === 0) {
      return NextResponse.json(
        { message: 'No fields provided for update' },
        { status: 400 }
      );
    }

    const updatedPerson = await People.findByIdAndUpdate(
      id,
      { $set: updates },
      { new: true, runValidators: true }
    );

    if (!updatedPerson) {
      return NextResponse.json(
        { message: 'Person not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: 'Person partially updated successfully',
        data: updatedPerson,
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: err.message, message: `error: ${err.message}`, data: err },
      { status: 500 }
    );
  }
}
