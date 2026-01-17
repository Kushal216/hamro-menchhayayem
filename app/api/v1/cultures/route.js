// app/api/users/route.js
import { NextResponse } from 'next/server';
import culture from '@/models/culture';

/**
 * @swagger
 * /api/v1/cultures:
 *   get:
 *     summary: Get all cultures
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

export async function GET(request) {
  return NextResponse.json({
    message: 'GET list of cultures',
  });
}

/**
 * @swagger
 * /api/cultures:
 *   post:
 *     summary: add a culture item
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
export async function POST(request) {
  const body = await request.json();

  const newCulture = await culture.create({
    title: body.title,
    description: body.description,
    gallery: body.gallery,
    video: body.video,
    coverImage: body.coverImage,
    category: body.category,
  });

  return NextResponse.json({
    message: `Added ${body.title} to the database. `,
  });
}
