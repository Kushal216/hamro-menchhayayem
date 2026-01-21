import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import People from '@/models/people';

/**
 * @swagger
 * /api/v1/people/{id}:
 *   get:
 *     summary: Get person by ID
 *     tags:
 *       - People
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: MongoDB ObjectId of the person
 *     responses:
 *       200:
 *         description: Person fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 person:
 *                   $ref: '#/components/schemas/People'
 *       400:
 *         description: Invalid ID
 *       404:
 *         description: Person not found
 */
export async function GET(req, { params }) {
  const { id } = params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ error: 'Invalid person ID' }, { status: 400 });
  }

  try {
    const person = await People.findById(id);

    if (!person) {
      return NextResponse.json({ error: 'Person not found' }, { status: 404 });
    }

    return NextResponse.json(
      {
        message: 'Person fetched successfully',
        person,
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: 'Failed to fetch person', details: err.message },
      { status: 500 }
    );
  }
}

/**
 * @swagger
 * /api/v1/people/{id}:
 *   put:
 *     summary: Update person by ID
 *     tags:
 *       - People
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: MongoDB ObjectId of the person
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/People'
 *     responses:
 *       200:
 *         description: Person updated successfully
 *       400:
 *         description: Invalid ID
 *       404:
 *         description: Person not found
 */
export async function PUT(req, { params }) {
  const { id } = params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ error: 'Invalid person ID' }, { status: 400 });
  }

  try {
    const body = await req.json();

    const updatedPerson = await People.findByIdAndUpdate(
      id,
      { $set: body },
      { new: true, runValidators: true }
    );

    if (!updatedPerson) {
      return NextResponse.json({ error: 'Person not found' }, { status: 404 });
    }

    return NextResponse.json(
      {
        message: 'Person updated successfully',
        person: updatedPerson,
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: 'Failed to update person', details: err.message },
      { status: 500 }
    );
  }
}

/**
 * @swagger
 * /api/v1/people/{id}:
 *   delete:
 *     summary: Delete person by ID
 *     tags:
 *       - People
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: MongoDB ObjectId of the person
 *     responses:
 *       200:
 *         description: Person deleted successfully
 *       400:
 *         description: Invalid ID
 *       404:
 *         description: Person not found
 */
export async function DELETE(req, { params }) {
  const { id } = params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ error: 'Invalid person ID' }, { status: 400 });
  }

  try {
    const deletedPerson = await People.findByIdAndDelete(id);

    if (!deletedPerson) {
      return NextResponse.json({ error: 'Person not found' }, { status: 404 });
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
      { error: 'Failed to delete person', details: err.message },
      { status: 500 }
    );
  }
}

/**
 * @swagger
 * /api/v1/people/{id}:
 *   patch:
 *     summary: Partially update person by ID
 *     tags:
 *       - People
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: MongoDB ObjectId of the person
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               position: "Senior Developer"
 *               contact:
 *                 phone: "9800000000"
 *     responses:
 *       200:
 *         description: Person updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 person:
 *                   $ref: '#/components/schemas/People'
 *       400:
 *         description: Invalid ID
 *       404:
 *         description: Person not found
 */
export async function PATCH(req, { params }) {
  const { id } = params;

  if (!id || !/^[0-9a-fA-F]{24}$/.test(id)) {
    return Response.json(
      { error: 'Invalid person ID' },
      { status: 400 }
    );
  }

  try {
    const updates = await req.json();

    // Prevent empty body
    if (!updates || Object.keys(updates).length === 0) {
      return NextResponse.json(
        { error: 'No fields provided for update' },
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
        { error: 'Person not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: 'Person partially updated successfully',
        person: updatedPerson,
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: 'Failed to update person', details: err.message },
      { status: 500 }
    );
  }
}

