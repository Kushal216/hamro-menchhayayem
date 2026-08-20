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
  try {
    const schools = await Schools.find({}).select('title description coverImage likesCount location phoneNo _id');

    return NextResponse.json({
      message: 'GET all lists school',
      data: schools,
    });
  } catch (err) {
    return NextResponse.json(
      { error: 'Failed to fetch schools' },
      { status: 500 }
    );
  }
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
    return NextResponse.json(
      { error: 'Failed to create school' },
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
