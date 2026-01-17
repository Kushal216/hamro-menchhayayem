/**
 * @swagger
 * /api/places/{id}/likes:
 *   get:
 *     summary: Get likes for a place
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
 *         description: Success - returns likes for the place
 *   post:
 *     summary: Add a like to a place
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
 *       description: Optional payload to attribute the like
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Like added successfully
 */
export async function GET(request, { params }) {
  const { id } = params;

  return Response.json({
    message: 'GET likes for place',
    placeId: id,
  });
}

export async function POST(request, { params }) {
  const { id } = params;

  return Response.json({
    message: 'ADD like to place',
    placeId: id,
  });
}
