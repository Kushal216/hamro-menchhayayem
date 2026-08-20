import { NextResponse } from 'next/server';
import User from '@/models/user';
import bcrypt from 'bcryptjs';
import isLoggedIn, { isAdmin } from '@/lib/middlewares/validateAuth';

/**
 * @swagger
 * /api/v1/users:
 *   get:
 *     summary: validate authentication
 *     tags:
 *       - users
 *     description: Returns a list of all users
 */
export async function GET(req) {
  if (!isLoggedIn(req)) {
    return NextResponse.json(
      { message: 'Unauthorized: you need to be logged in.' },
      { status: 401 }
    );
  }

  const users = await User.find({}).lean();
  return NextResponse.json({ message: 'users fetched', data: users });
}

/**
 * @swagger
 * /api/v1/users:
 *   post:
 *     summary: add user to the database
 *     tags:
 *       - users
 *     description: creates a user
 */
export async function POST(req) {
  if (!isAdmin(req)) {
    return NextResponse.json(
      { message: 'Permission Error: Only admins can create users.' },
      { status: 401 }
    );
  }

  const { name, email, password, role } = await req.json();
  const saltValue = parseInt(process.env.SALT_ROUNDS) || 10;
  try {
    const hashedPassword = await bcrypt.hash(password, saltValue);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    return NextResponse.json(
      {
        message: `created User ${user.name}.`,
        user: user,
      },
      {
        status: 201,
      }
    );
  } catch (err) {
    return NextResponse.json(
      { error: err.message, message: `error: ${err.message}`, data: err },
      { status: 500 }
    );
  }
}
