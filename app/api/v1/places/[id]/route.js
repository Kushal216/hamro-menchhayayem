/**
 * @swagger
 * /api/places/{id}:
 *   get:
 *     summary: Get place by ID
 *     tags:
 *       - places
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Place ID
 *     responses:
 *       200:
 *         description: Success - returns place data
 *   put:
 *     summary: Update place by ID
 *     tags:
 *       - places
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Place ID
 *     requestBody:
 *       description: Place data to update
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Place updated successfully
 *   delete:
 *     summary: Delete place by ID
 *     tags:
 *       - places
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Place ID
 *     responses:
 *       200:
 *         description: Place deleted successfully
 */
export async function GET(request, { params }) {
  const { id } = params;

  return Response.json({
    message: 'GET place by ID',
    id: id,
  });
}

export async function PUT(request, { params }) {
  const { id } = params;

  return Response.json({
    message: 'UPDATE place',
    id: id,
  });
}

export async function DELETE(request, { params }) {
  const { id } = params;

  return Response.json({
    message: 'DELETE place',
    id: id,
  });
}
