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
export async function GET(request, { params }) {
  const { id } = params;

  return Response.json({
    message: 'GET school by ID',
    id: id,
  });
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
