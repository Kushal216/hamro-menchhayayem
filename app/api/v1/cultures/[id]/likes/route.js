/**
 * @swagger
 * /api/cultures/{id}/likes:
 *   get:
 *     summary: Get likes for a culture
 *     tags:
 *       - cultures
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Culture ID
 *     responses:
 *       200:
 *         description: Success - returns likes for the culture
 *   post:
 *     summary: Add a like to a culture
 *     tags:
 *       - cultures
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Culture ID
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
    message: 'GET likes for culture',
    cultureId: id,
  });
}

export async function POST(request, { params }) {
  const { id } = params;

  return Response.json({
    message: 'ADD like to culture',
    cultureId: id,
  });
}
