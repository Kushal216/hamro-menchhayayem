import { NextResponse } from 'next/server';
import Culture from '@/models/culture';
import isLoggedIn, { isAdmin } from '@/lib/middlewares/validateAuth';

/**
 * @swagger
 * /api/v1/cultures:
 *   get:
 *     summary: Returns all cultures
 */
export async function GET(req) {
  const cultures = await Culture.find({});

  return NextResponse.json({
    message: 'GET list of cultures',
    data: cultures,
  });
}

/**
 * @swagger
 * /api/v1/cultures:
 *   post:
 *     summary: Add a culture
 */
export async function POST(req) {
  const body = await req.json();

  //check authentication
  //validate data using middleware
  let id = null;
  try {
    const newCulture = await Culture.create({
      _id: body._id,
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
    return NextResponse.json(
      {
        message: `DB error ${err.message}. `,
        err: err,
      },
      { status: 400 }
    );
  }

  return NextResponse.json(
    {
      message: `Added ${body.title} to the database with id: ${id}. `,
    },
    { status: 201 }
  );
}
