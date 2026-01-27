import { NextResponse } from 'next/server';
import Logs from '@/models/logs';
import jwt from 'jsonwebtoken';

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
  const cultures = await Logs.find({});

  return NextResponse.json({
    message: 'GET list of logs',
    data: cultures,
  });
}

export async function POST(req) {
  const body = await req.json();

  const token = req.cookies.get('token')?.value;
  const user = jwt.verify(token, process.env.JWT_SECRET);

  // const user = isLoggedIn(req);
  // console.log(user);
  if (!user) {
    return NextResponse.json(
      { message: 'you need to be logged in to perform this request.' },
      { status: 401 }
    );
  }


  body.user = {
    id: user.userId,
    name: user.name,
    email: user.email,
  };
  // console.log(body);

  try {
    const log = await Logs.create(body);
    const id = log._id;

    return NextResponse.json(
      {
        message: `logged action to the database with id: ${id}. `,
      },
      { status: 201 }
    );
  } catch (err) {
    console.log("ERROR:",err)
    return NextResponse.json(
      {
        error: err.message,
        message: `DB error in performing the create culture action. `,
        err: err,
      },
      { status: 400 }
    );
  }
}
