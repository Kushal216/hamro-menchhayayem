import People from '@/models/people';
import { NextResponse } from 'next/server';
import isLoggedIn from '@/lib/middlewares/validateAuth';

/**
 * @swagger
 * /api/v1/people:
 *   get:
 *     summary: get a list of all people
 *     tags:
 *       - people
 *   post:
 *     summary: add a person
 *     tags:
 *       - people
 */

export async function GET(req) {
  try {
    const people = await People.find({});

    return NextResponse.json({
      message: 'Peoples fetched successfully',
      data: people,
    });
  } catch (err) {
    return NextResponse.json({
      error: err.message,
      message: `DB error in performing the create culture action. `,
      err: err,
    });
  }
}

export async function POST(req) {
  if (!isLoggedIn(req)) {
    return NextResponse.json(
      { message: 'you need to be logged in to perform this request.' },
      { status: 401 }
    );
  }
  const { name, contact, photo, position } = await req.json();
  try {
    const person = await People.create({
      name,
      photo,
      contact,
      position,
    });

    return NextResponse.json(
      {
        message: `created People ${person.name}.`,
        person: person,
      },
      {
        status: 201,
      }
    );
  } catch (err) {
    return NextResponse.json(
      {
        error: err.message,
        message: `Error: ${err.message}. `,
        data: err,
      },
      { status: 400 }
    );
  }
}
