import { NextResponse } from 'next/server';
import Logs from '@/models/logs';
import jwt from 'jsonwebtoken';

/**
 * @swagger
 * /api/v1/logs:
 *   get:
 *     summary: Returns all logs
 *     tags:
 *       - logs
 *   post:
 *     summary: Add a log entry
 *     tags:
 *       - logs
 */
export async function GET(req) {
  try {
    const logs = await Logs.find({}).lean();

    return NextResponse.json({
      message: 'GET list of logs',
      data: logs,
    });
  } catch (err) {
    return NextResponse.json(
      { error: 'Failed to fetch logs' },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  const body = await req.json();

  let user;
  try {
    const token = req.cookies.get('token')?.value;
    if (!token) throw new Error('No token');

    user = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return NextResponse.json(
      { message: 'Unauthorized', error: err.message },
      { status: 401 }
    );
  }
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
    console.error("ERROR:", err)
    return NextResponse.json(
      { error: 'Failed to create log entry' },
      { status: 400 }
    );
  }
}
