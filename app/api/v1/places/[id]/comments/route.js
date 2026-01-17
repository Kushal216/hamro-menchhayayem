/**
 * @swagger
 * /api/places/{id}/comments:
 *   get:
 *     summary: Get comments for a place
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
 *         description: Success - returns comments for the place
 *   post:
 *     summary: Create comment for a place
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
 *       description: Comment payload
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Comment created successfully
 */
export async function GET(request, { params }) {
  const { id } = params;

  return Response.json({
    message: 'GET comments for place',
    placeId: id,
  });
}

export async function POST(request, { params }) {
  const { id } = params;

  return Response.json({
    message: 'CREATE comment for place',
    placeId: id,
  });
}
