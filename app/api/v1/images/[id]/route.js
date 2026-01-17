/**
 * @swagger
 * /api/images/{id}:
 *   get:
 *     summary: Get image by ID
 *     tags:
 *       - images
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Image ID
 *     responses:
 *       200:
 *         description: Success - returns image data
 *   put:
 *     summary: Update image by ID
 *     tags:
 *       - images
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Image ID
 *     requestBody:
 *       description: Image data to update
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Image updated successfully
 *   delete:
 *     summary: Delete image by ID
 *     tags:
 *       - images
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Image ID
 *     responses:
 *       200:
 *         description: Image deleted successfully
 */
export async function GET(request, { params }) {
  const { id } = params;

  return Response.json({
    message: 'GET image by ID',
    id: id,
  });
}

export async function PUT(request, { params }) {
  const { id } = params;

  return Response.json({
    message: 'UPDATE image',
    id: id,
  });
}

export async function DELETE(request, { params }) {
  const { id } = params;

  return Response.json({
    message: 'DELETE image',
    id: id,
  });
}
