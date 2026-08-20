import { NextResponse } from 'next/server';
import Logs from '@/models/logs';
import isLoggedIn, { isAdmin } from '@/lib/middlewares/validateAuth';

/**
 * @swagger
 * /api/v1/logs/{id}:
 *   get:
 *     summary: get a log entry of given id
 *     tags:
 *       - logs
 *   put:
 *     summary: Replace the data associated to the log with given id
 *     tags:
 *       - logs
 *   delete:
 *     summary: delete log of given id
 *     tags:
 *       - logs
 *   patch:
 *     summary: updates specified properties in the req.body corresponding to the given log id
 *     tags:
 *       - logs
 */

export async function GET(req, { params }) {
  const { id } = await params;
  try {
    const log = await Logs.findById(id).lean();

    if (!log) {
      return NextResponse.json({ message: 'item Not found' }, { status: 404 });
    }

    return NextResponse.json({
      message: 'item found and returned',
      data: log,
    });
  } catch (err) {
    return NextResponse.json({
      error: err.message,
      message: `DB error in performing the create log action. `,
      err: err,
    });
  }
}

export async function PATCH(req, { params }) {
  if (!isLoggedIn(req)) {
    return NextResponse.json(
      { message: 'you need to be logged in to perform this request.' },
      { status: 401 }
    );
  }

  const { id } = await params;
  const body = await req.json();

  try {
    const updated = await Logs.findByIdAndUpdate(
      id,
      { $set: body }, // only update provided fields
      { new: true, runValidators: true }
    );

    if (!updated) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    return NextResponse.json({
      message: `Updated log ${updated._id}`,
      data: updated,
    });
  } catch (err) {
    return NextResponse.json({
      error: err.message,
      message: `DB error in performing the create log action. `,
      err: err,
    });
  }
}


export async function PUT(req, { params }) {
  if (!isLoggedIn(req)) {
    return NextResponse.json(
      { message: 'you need to be logged in to perform this request.' },
      { status: 401 }
    );
  }

  const body = await req.json();
  const { id } = await params;

  try {
    const log = await Logs.findById(id).lean();

    if (!log) {
      return NextResponse.json(
        { message: "The log id doesn't exist." },
        { status: 404 }
      );
    }

    const dbResponse = await Logs.replaceOne(
      { _id: id },
      {
        user: body.user,
        activity: body.activity,
        item: body.item,
        remarks: body.remarks,
      }
    );

    return NextResponse.json({
      message: `replaced log`,
      id: id,
      data: dbResponse,
    });
  } catch (err) {
      return NextResponse.json({
        error: err.message,
        message: `DB error in performing the create log action. `,
        err: err,
      });
    }
}

export async function DELETE(req, { params }) {
  if (!isAdmin(req)) {
    return NextResponse.json(
      { message: 'Permission Error: Only admins can delete items.' },
      { status: 401 }
    );
  }

  const { id } = await params;

  try {
    const log = await Logs.findByIdAndDelete(id);

    if (log) {
      return NextResponse.json({
        message: `deleted log ${log._id}`,
        data: log,
      });
    } else {
      return NextResponse.json(
        {
          message: "The log with the given id doesn't exist.",
          id: id,
        },
        { status: 404 }
      );
    }
  } catch (err) {
    return NextResponse.json({
      error: err.message,
      message: `DB error in performing the create log action. `,
      err: err,
    });
  }
}
