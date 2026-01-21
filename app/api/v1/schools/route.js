import { NextResponse } from 'next/server';
import Schools from '@/models/school.js';

/**
 * @swagger
 * /api/v1/schools:
 *   get:
 *     summary: Get all schools
 *     tags:
 *       - cultures
 *     description: Returns a list of schools
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
    const schools = await Schools.find({});

    return Response.json({
        message: 'GET all lists school',
        data: schools,
    });
}


/**
 * @swagger
 * /api/cultures:
 *   post:
 *     summary: add a school item
 *     tags:
 *       - cultures
 *     description: Returns a list of school
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
    let id = null
    try {
        const newSchool = await Schools.create({
            title: body.title,
            description: body.title,
            gallery: body.gallery,
            coverImage: body.coverImage,
            location: body.location,
            video: body.video,
            category: body.category,
            phoneNo: body.phoneNo,
        })
        id = newSchool._id;
    } catch(err) {
        console.log(`ERROR: in creating school:\n${err}`);
        return NextResponse.json({
            message: `DB error in performing the create school action. `,
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
