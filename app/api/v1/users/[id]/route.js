import { NextResponse } from 'next/server';
import User from '@/models/user';
import bcrypt from 'bcryptjs';
/**
 * @swagger
 * /api/v1/users/{id}:
 *   get:
 *     summary: Get user by id
 *     tags:
 *       - users
 */
export async function GET(req, { params }) {
  const { id } = params;

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
export async function PATCH(req, { params }) {
  const { id } = await params;
  const body = await req.json();
  const saltValue = parseInt(process.env.SALT_ROUNDS);
  try {

    let updatedbody = { ...body }
    if (body.password) {
      updatedbody.hashedPassword = await bcrypt.hash(body.password, saltValue);
      delete updatedbody.password;
    }

    const updated = await User.findByIdAndUpdate(
      id,
      { $set: updatedbody },
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
export async function PUT(req, { params }) {
  const { id } = await params;
  const body = await req.json();
  const saltValue = parseInt(process.env.SALT_ROUNDS);

  try {
    const user = await User.findById(id);
    const hashedPassword = await bcrypt.hash(body.password, saltValue);

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
        hashedPassword: hashedPassword,
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
export async function DELETE(req, { params }) {
  const { id } = params;

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
