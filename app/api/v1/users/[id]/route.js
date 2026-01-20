import { NextResponse } from 'next/server';
import User from '@/models/user';

/**
 * @swagger
 * /api/v1/users/{id}:
 *   get:
 *     summary: Get user by id
 *     tags:
 *       - users
 */
export async function GET(req, res) {
  const { id } = await res.params;

  try {
    const user = await User.findById(id);

    if (!user) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    return NextResponse.json({ data: user });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

/**
 * @swagger
 * /api/v1/users/{id}:
 *   patch:
 *     summary: Update specific fields of user
 *     tags:
 *       - users
 */
export async function PATCH(req, res) {
  const { id } = await res.params;
  const body = await req.json();

  try {
    const updated = await User.findByIdAndUpdate(
      id,
      { $set: body },
      { new: true, runValidators: true }
    );

    if (!updated) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    return NextResponse.json({
      message: `Updated user ${updated.name}`,
      data: updated,
    });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

/**
 * @swagger
 * /api/v1/users/{id}:
 *   put:
 *     summary: Replace user by id
 *     tags:
 *       - users
 */
export async function PUT(req, res) {
  const { id } = await res.params;
  const body = await req.json();

  try {
    const user = await User.findById(id);

    if (!user) {
      return NextResponse.json(
        { error: "User with given id doesn't exist." },
        { status: 404 }
      );
    }

    const dbResponse = await User.replaceOne(
      { _id: id },
      {
        name: body.name,
        email: body.email,
        password: body.password,
        role: body.role ?? 'contributer',
      }
    );

    return NextResponse.json({
      message: `Replaced user ${body.email}`,
      id,
      data: dbResponse,
    });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

/**
 * @swagger
 * /api/v1/users/{id}:
 *   delete:
 *     summary: Delete user by id
 *     tags:
 *       - users
 */
export async function DELETE(req, res) {
  const { id } = await res.params;

  try {
    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return NextResponse.json(
        { message: "User with given id doesn't exist.", id },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: `Deleted user ${user.email}`,
      data: user,
    });
  } catch (err) {
    return NextResponse.json(
      { message: 'Database error', error: err.message },
      { status: 500 }
    );
  }
}
