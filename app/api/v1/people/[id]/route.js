/**
 * @swagger
 * /api/people/{id}:
 *   get:
 *     summary: Get person by ID
 *     tags:
 *       - people
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Person ID
 *     responses:
 *       200:
 *         description: Success - returns person data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 id:
 *                   type: string
 *   put:
 *     summary: Update person by ID
 *     tags:
 *       - people
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Person ID
 *     requestBody:
 *       description: Person data to update
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Person updated successfully
 *   delete:
 *     summary: Delete person by ID
 *     tags:
 *       - people
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Person ID
 *     responses:
 *       200:
 *         description: Person deleted successfully
 */
export async function GET(request, { params }) {
  const { id } = params;

  return Response.json({
    message: 'GET person by ID',
    id: id,
  });
}

export async function PUT(request, { params }) {
  const { id } = params;

  return Response.json({
    message: 'UPDATE person',
    id: id,
  });
}

export async function DELETE(request, { params }) {
  const { id } = params;

  return Response.json({
    message: 'DELETE person',
    id: id,
  });
}
