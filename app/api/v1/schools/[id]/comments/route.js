/**
 * @swagger
 * /api/schools/{id}/comments:
 *   get:
 *     summary: Get comments for a school
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
 *         description: Success - returns comments for the school
 *   post:
 *     summary: Create comment for a school
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
    message: 'GET comments for school',
    schoolId: id,
  });
}

export async function POST(request, { params }) {
  const { id } = params;

  return Response.json({
    message: 'CREATE comment for school',
    schoolId: id,
  });
}
