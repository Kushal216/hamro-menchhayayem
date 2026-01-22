import { NextResponse } from 'next/server';
import User from '@/models/user';
import bcrypt from 'bcryptjs';
import { isAdmin } from '@/lib/middlewares/validateAuth';

/**
 * @swagger
 * /api/v1/users:
 *   get:
 *     summary: validate authentication
 *     tags:
 *       - places
 *     description: Returns a list of all users
 */
export async function GET(req) {
  const users = await User.find({});
  return NextResponse.json({ message: 'users fetched', data: users });
}

/**
 * @swagger
 * /api/v1/users:
 *   post:
 *     summary: add user to the database
 *     tags:
 *       - places
 *     description: creates a user
 */
export async function POST(req) {
  if (!isAdmin(req)) {
    return NextResponse.json(
      { message: 'Permission Error: Only admins can delete items.' },
      { status: 401 }
    );
  }

  const { name, email, password, role } = await req.json();
  const saltValue = 10;
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
        message: `created User ${user.main}.`,
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
