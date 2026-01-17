import { NextResponse } from 'next/server';

/**
 * @swagger
 * /api/cultures/{id}:
 *   get:
 *     summary: Get culture item with :id
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
export async function GET(request, { params }) {
  const { id } = params;
  return Response.json({
    message: 'GET culture by ID',
    id: id,
  });
}

/**
 * @swagger
 * /api/cultures/{id}:
 *   put:
 *     summary: Update item with :id
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
export async function PUT(request, { params }) {
  const { id } = params;

  return Response.json({
    message: 'UPDATE culture',
    id: id,
  });
}

/**
 * @swagger
 * /api/cultures/{id}:
 *   delete:
 *     summary: delete culture item with :id
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
  const { id } = params;

  return Response.json({
    message: 'DELETE culture',
    id: id,
  });
}
