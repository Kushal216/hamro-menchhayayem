import { NextResponse } from 'next/server';
import Culture from '@/models/culture';

/**
 * @swagger
 * /api/v1/cultures:
 *   get:
 *     summary: Get all cultures
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

export async function GET(req) {
  //check if request is coming from samesite

  const cultures = await Culture.find({});

  return NextResponse.json({
    message: 'GET list of cultures',
    data: cultures,
  });
}

/**
 * @swagger
 * /api/cultures:
 *   post:
 *     summary: add a culture item
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
export async function POST(req) {
  const body = await req.json();

  //check authentication
  //validate data using middleware
  let id = null;
  try {
    const newCulture = await Culture.create({
      title: body.title,
      description: body.description,
      gallery: body.gallery,
      video: body.video,
      coverImage: body.coverImage,
      category: body.category,
    });

    id = newCulture._id;
  } catch (err) {
    console.log(`ERROR: in creating culture:\n${err}`);
    return NextResponse.json({
      message: `DB error in performing the create culture action. `,
      err: err,
    });
  }

  return NextResponse.json(
    {
      message: `Added ${body.title} to the database with id: ${id}. `,
    },
    { status: 201 }
  );
}
