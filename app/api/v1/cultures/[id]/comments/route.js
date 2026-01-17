/**
 * @swagger
 * /api/cultures/{id}/comments:
 *   get:
 *     summary: Get comments for a culture
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
 *         description: Success - returns comments for the culture
 *   post:
 *     summary: Create comment for a culture
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
    message: 'GET comments for culture',
    cultureId: id,
  });
}

export async function POST(request, { params }) {
  const { id } = params;

  return Response.json({
    message: 'CREATE comment for culture',
    cultureId: id,
  });
}
