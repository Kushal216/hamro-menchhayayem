import { NextResponse } from 'next/server';
import Places from '@/models/places.js';
import isLoggedIn from '@/lib/middlewares/validateAuth';

/**
 * @swagger
 * /api/v1/places:
 *   get:
 *     summary: get a list of all places
 *     tags:
 *       - places
 *   post:
 *     summary: add a place
 *     tags:
 *       - places
 */

export async function GET(req) {
  const places = await Places.find({});

  return NextResponse.json({
    message: 'GET list of places',
    data: places,
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
    const newPlace = await Places.create({
      _id: body._id,
      title: body.title,
      description: body.description,
      gallery: body.gallery,
      video: body.video,
      coverImage: body.coverImage,
      category: body.category,
      subCategory: body.subCategory,
      location: body.location,
    });

    id = newPlace._id;
  } catch (err) {
    console.log(`ERROR: in creating places:\n${err}`);
    return NextResponse.json(
      { error: err.message, message: `Error: ${err.message}. `, data: err },
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
