import { NextResponse } from 'next/server';
import User from '@/models/user';
import bcrypt from 'bcryptjs';

/**
 * @swagger
 * /api/v1/users:
 *   get:
 *     summary: validate authentication
 *     tags:
 *       - places
 *     description: Returns a list of places
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                   name:
 *                     type: string
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
 *     description: adds user in body to the db
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                   name:
 *                     type: string
 */
export async function POST(req) {
  const { name, email, password, role } = await req.json();
  const saltValue = process.env.SALT_ROUNDS;
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
      { ERROR: 'failed to create the user', details: err },
      { status: 500 }
    );
  }
}
