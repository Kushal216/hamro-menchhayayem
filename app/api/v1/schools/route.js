import { NextResponse } from 'next/server';
import Schools from '@/models/school.js';
import isLoggedIn from '@/lib/middlewares/validateAuth';

/**
 * @swagger
 * /api/v1/schools:
 *   get:
 *     summary: returns all schools
 *     tags:
 *       - schools
 *   post:
 *     summary: add a school
 *     tags:
 *       - schools
 */

export async function GET(req) {
  const schools = await Schools.find({});

  return Response.json({
    message: 'GET all lists school',
    data: schools,
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
    const newSchool = await Schools.create({
      _id: body._id,
      title: body.title,
      description: body.description,
      gallery: body.gallery,
      coverImage: body.coverImage,
      location: body.location,
      video: body.video,
      category: body.category,
      phoneNo: body.phoneNo,
    });
    id = newSchool._id;
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
