import User from '@/models/user';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

/**
 * @swagger
 * /api/v1/auth:
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
export async function POST(req) {
  const { email, password } = await req.json();

  try {
    const user = await User.findOne({ email: email }).select('+password');
    if (!user) {
      return NextResponse.json(
        { message: 'Invalid Credentials' },
        { status: 401 }
      );
    }

    const matches = await bcrypt.compare(password, user.password);

    if (matches) {
      //retur jwt

      const token = jwt.sign(
        {
          userId: user._id,
          email: user.email,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: '7d',
        }
      );

      cookies().set('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 7,
      });

      return NextResponse.json({
        message: 'Logged in successfully',
        data: user.name,
      });
    }

    return NextResponse.json(
      { message: 'Invalid Credentials' },
      { status: 401 }
    );
  } catch (err) {
    console.log(`ERROR: in creating culture:\n${err}`);
    return NextResponse.json({
      message: `DB error in performing the create culture action. `,
      err: err,
    });
  }
}
