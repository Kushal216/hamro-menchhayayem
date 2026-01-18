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

export async function POST(req) {
  const { email, password } = await req.json();
  const saltValue = 10;
  try {
    const hashedPassword = await bcrypt.hash(password, saltValue);
    await User.create({
      email,
      password: hashedPassword,
    })
    return NextResponse.jsonm({
      message: "created User"
    }, {
      status: 201
    })
  } catch {
    return NextResponse.json({ ERROR: "failed to create the user" }, { status: 401 })
  }
}
