import { NextResponse } from 'next/server';
import School from '@/models/school.js';

/**
 * @swagger
 * /api/schools/{id}:
 *   get:
 *     summary: Get school by ID
 *     tags:
 *       - schools
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: School ID
 *     responses:
 *       200:
 *         description: Success - returns school data
 *   put:
 *     summary: Update school by ID
 *     tags:
 *       - schools
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: School ID
 *     requestBody:
 *       description: School data to update
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: School updated successfully
 *   delete:
 *     summary: Delete school by ID
 *     tags:
 *       - schools
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: School ID
 *     responses:
 *       200:
 *         description: School deleted successfully
 */
export async function GET(request, res) {
  const { id } = await res.params;
  try {
    const school = await School.findById(id);

    if (!school) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    return NextResponse.json({ data: school });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
export async function PUT(request, { params }) {
  const { id } = params;


  return Response.json({
    message: 'UPDATE school',
    id: id,
  });
}

export async function DELETE(request, { params }) {
  const { id } = params;

  return Response.json({
    message: 'DELETE school',
    id: id,
  });
}
