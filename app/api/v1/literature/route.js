import { NextResponse } from 'next/server';
import Literature from '@/models/literature';
import isLoggedIn from '@/lib/middlewares/validateAuth';

/**
 * @swagger
 * /api/v1/literature:
 *   get:
 *     summary: get a list of all literature items
 *     tags:
 *       - literature
 *   post:
 *     summary: add a literature item
 *     tags:
 *       - literature
 */

export async function GET(req) {
  const literatures = await Literature.find({});

  return NextResponse.json({
    message: 'GET list of literature',
    data: literatures,
  });
}

export async function POST(req) {
  if (!isLoggedIn(req)) {
    return NextResponse.json(
      { message: 'you need to be logged in to perform this request.' },
      { status: 401 }
    );
  }
  const body = await req.json();
  let id = null;
  try {
    const newLiterature = await Literature.create({
      _id: body._id,
      title: body.title,
      description: body.description,
      video: body.video,
      coverImage: body.coverImage,
      category: body.category,
      author: body.author,
    });

    id = newLiterature._id;
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
