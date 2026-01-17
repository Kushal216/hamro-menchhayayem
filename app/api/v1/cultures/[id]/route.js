import { NextResponse } from 'next/server';
import Culture from '@/models/culture';
/**
 * @swagger
 * /api/cultures/{id}:
 *   get:
 *     summary: Get culture item with :id
 *     tags:
 *       - cultures
 *     description: Returns a list of cultures
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
export async function GET(request, { params }) {
  const { id } = await params;
  try {
    const culture = await Culture.findById(id);

    if (!culture) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    return NextResponse.json({ data: culture });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

/**
 * @swagger
 * /api/cultures/{id}:
 *   put:
 *     summary: Update item with :id
 *     tags:
 *       - cultures
 *     description: Returns a list of cultures
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
export async function PATCH(req, { params }) {
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
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

/**
 * @swagger
 * /api/cultures/{id}:
 *   put:
 *     summary: replace item with given id
 *     tags:
 *       - cultures
 *     description: Returns a list of cultures
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
export async function PUT(req, { params }) {
  //check if authorized
  //validate data

  const body = await req.json()
  const { id } = await params;

  try {
    const culture = await Culture.findById(id);

    if (!culture) {
      return NextResponse.json(
        { error: "The culture id doesn't exist." },
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
      data: dbResponse
    });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

/**
 * @swagger
 * /api/cultures/{id}:
 *   delete:
 *     summary: delete culture item with :id
 *     tags:
 *       - cultures
 *     description: Returns a list of cultures
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
export async function DELETE(req, { params }) {
  //validate user

  const { id } = await params;

  try {
    const culture = await Culture.findByIdAndDelete(id);

    if (culture) {
      return Response.json({
        message: `deleted ${culture.title}`,
        data: culture,
      });
    } else {
      return Response.json(
        {
          message: "The culture with the given id doesn't exist.",
          id: id,
        },
        { status: 404 }
      );
    }
  } catch (err) {
    return Response.json(
      {
        message: 'Some error occurred in the database',
        error: err,
      },
      { status: 500 }
    );
  }
}
