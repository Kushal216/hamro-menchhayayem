import { NextResponse } from 'next/server';
import Places from '@/models/places';
/**
 * @swagger
 * /api/places/{id}:
 *   get:
 *     summary: Get place by ID
 *     tags:
 *       - places
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Place ID
 *     responses:
 *       200:
 *         description: Success - returns place data
 */

export async function GET(req, { params }) {
  const { id } = await params;
  try {
    const place = await Places.findById(id);

    if (!place) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
    return NextResponse.json({ data: place });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PATCH(req, { params }) {
  const { id } = await params;
  const body = await req.json();
  try {
    const updated = await Places.findByIdAndUpdate(
      id,
      { $set: body },
      { new: true, runValidators: true }
    );

    if (!updated) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
    return NextResponse.json({
      message: `Updated Places ${updated.title}`,
      data: updated,
    });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  //check if authorized
  //validate data

  const body = await req.json();
  const { id } =await  params;

  try {
    const place = await Places.findById(id);

    if (!place) {
      return NextResponse.json(
        { error: "The places id doesn't exist." },
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
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

/**
 * @swagger
 * /api/places/{id}:
 *   put:
 *     summary: Update place by ID
 *     tags:
 *       - places
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Place ID
 *     requestBody:
 *       description: Place data to update
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Place updated successfully
 */

/**
 * @swagger
 * /api/places/{id}:
 *   delete:
 *     summary: Delete place by ID
 *     tags:
 *       - places
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Place ID
 *     responses:
 *       200:
 *         description: Place deleted successfully
 */
export async function DELETE(req, { params }) {
  //validate user

  const { id } =await  params;

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
      {
        message: 'Some error occurred in the database',
        error: err,
      },
      { status: 500 }
    );
  }
}
