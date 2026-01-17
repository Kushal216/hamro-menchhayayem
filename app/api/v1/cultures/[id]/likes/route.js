import Culture from '@/models/culture.js';
import { NextResponse } from 'next/server';

/**
 * @swagger
 * /api/v1/cultures/{id}/likes:
 *   post:
 *     summary: like the culture
 *     tags:
 *       - cultures
 *     description: Returns a list of cultures
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
export async function POST(request, { params }) {
  const { id } = await params;

  try {
    const updated = await Culture.findByIdAndUpdate(
      id,
      { $inc: { likesCount: 1 } },
      { new: true, runValidators: true }
    );

    if (!updated) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    return NextResponse.json({
      message: `${updated.title} has ${updated.likesCount} likes.`,
      data: updated,
    });
  } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
  }
}


/**
 * @swagger
 * /api/v1/cultures/{id}/likes:
 *   post:
 *     summary: unlike the culture
 *     tags:
 *       - cultures
 *     description: Returns a list of cultures
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
export async function DELETE(request, { params }) {
  const { id } = await params;

  try {
    const updated = await Culture.findByIdAndUpdate(
      id,
      { $inc: { likesCount: -1 } },
      { new: true, runValidators: true }
    );

    if (!updated) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    return NextResponse.json({
      message: `${updated.title} has ${updated.likesCount} likes.`,
      data: updated,
    });
  } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
