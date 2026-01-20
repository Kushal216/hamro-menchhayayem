import { NextResponse } from 'next/server';
import Literature from '@/models/literature';

/**
 * @swagger
 * /api/v1/literature:
 *   get:
 *     summary: Get all literature
 *     tags:
 *       - literature
 *     description: Returns a list of literature
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                   name:
 *                     type: string
 */

export async function GET(req) {
    //check if request is coming from samesite

    const literatures = await Literature.find({});

    return NextResponse.json({
        message: 'GET list of literature',
        data: literatures,
    });
}

/**
 * @swagger
 * /api/literature:
 *   post:
 *     summary: add a literature item
 *     tags:
 *       - cultures
 *     description: Returns a list of literature
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                   name:
 *                     type: string
 */
export async function POST(req) {
    const body = await req.json();

    //check authentication
    //validate data using middleware
    let id = null;
    try {
        const newLiterature = await Literature.create({
            title: body.title,
            description: body.description,
            video: body.video,
            coverImage: body.coverImage,
            category: body.category,
        });

        id = newLiterature._id;
    } catch (err) {
        console.log(`ERROR: in creating Literature:\n${err}`);
        return NextResponse.json({
            message: `DB error in performing the create Literature action. `,
            err: err,
        });
    }

    return NextResponse.json(
        {
            message: `Added ${body.title} to the database with id: ${id}. `,
        },
        { status: 201 }
    );
}
