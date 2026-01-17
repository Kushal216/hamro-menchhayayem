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
export async function PUT(request, { params }) {
  const { id } = await params;

  console.log(`id: ${id}`);

  return Response.json({
    message: 'UPDATE culture',
    id: id,
  });
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
export async function DELETE(request, { params }) {
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
