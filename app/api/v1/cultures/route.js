import { NextResponse } from 'next/server';
import Culture from '@/models/culture';
import isLoggedIn, { isAdmin } from '@/lib/middlewares/validateAuth';

/**
 * @swagger
 * /api/v1/cultures:
 *   get:
 *     summary: Returns all cultures
 *     tags:
 *       - cultures
 *   post:
 *     summary: Add a culture
 *     tags:
 *       - cultures
 */
export async function GET(req) {
  const cultures = await Culture.find({});

  return NextResponse.json({
    message: 'GET list of cultures',
    data: cultures,
  });
}

export async function POST(req) {
  const body = await req.json();
  if (!isLoggedIn(req)) {
    return NextResponse.json(
      { message: 'you need to be logged in to perform this request.' },
      { status: 401 }
    );
  }
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
    return NextResponse.json({
      error: err.message,
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
