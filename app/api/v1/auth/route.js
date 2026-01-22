import User from '@/models/user';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import isLoggedIn from '@/lib/middlewares/validateAuth';

/**
 * @swagger
 * /api/v1/auth:
 *   post:
 *     summary: validate login credientials and return jwt in cookie
 */
export async function POST(req) {
  if (isLoggedIn(req)) {
    return NextResponse.json(
      {
        message: 'you are already logged in, Log out first and try again',
      },
      { status: 400 }
    );
  }
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
      console.log('user ', user);
      const token = jwt.sign(
        {
          name: user.name,
          userId: user._id,
          email: user.email,
          role: user.role,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: '7d',
        }
      );

      const cookie = await cookies();

      cookie.set('token', token, {
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
    console.log(`ERROR: in authenticating user:\n${err}`);
    return NextResponse.json(
      {
        message: `DB error in performing the action. `,
        err: err,
      },
      { status: 500 }
    );
  }
}
