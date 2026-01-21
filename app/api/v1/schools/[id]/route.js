import { NextResponse } from 'next/server';
import School from '@/models/school.js';

/**
 * @swagger
 * /api/schools/{id}:
 *   get:
 *     summary: Get school by ID
 *     tags:
 *       - schools
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: School ID
 *     responses:
 *       200:
 *         description: Success - returns school data
 *   put:
 *     summary: Update school by ID
 *     tags:
 *       - schools
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: School ID
 *     requestBody:
 *       description: School data to update
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: School updated successfully
 *   delete:
 *     summary: Delete school by ID
 *     tags:
 *       - schools
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: School ID
 *     responses:
 *       200:
 *         description: School deleted successfully
 */
export async function GET(req, {params}) {
  const { id } =await  params;
  try {
    const school = await School.findById(id);

    if (!school) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    return NextResponse.json({ data: school });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}


export async function PUT(req, {params}) {
  const { id } =await  params;
  const body = await request.json();
  try {
    const school = await School.findById(id);
    if (!school) {
      return NextResponse.json({ error: "Not Found" }, { status: 404 });
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
      })
    return NextResponse.json({
      message: `replaced school ${body.title} with ${body.title}`,
      id: id,
      data: dbResponse
    });
  } catch(err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

/**
 * @swagger
 * /api/schools/{id}:
 *   put:
 *     summary: Update item with :id
 *     tags:
 *       - school
 *     description: Returns a list of school
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                   name:
 *                     type: string
 */
export async function PATCH(req, {params}) {
  const { id } =await  params;
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
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(req, {params}) {
  //validate user

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
      {
        message: 'Some error occurred in the database',
        error: err,
      },
      { status: 500 }
    );
  }
}


