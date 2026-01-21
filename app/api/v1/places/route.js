import { NextResponse } from 'next/server';
import Places from '@/models/places.js';

/**
 * @swagger
 * /api/v1/places:
 *   get:
 *     summary: Get all Places
 *     tags:
 *       - places
 *     description: Returns a list of places
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
    const places = await Places.find({});

    return NextResponse.json({
        message: 'GET list of places',
        data: places,
    });
}

/**
 * @swagger
 * /api/places:
 *   post:
 *     summary: add a culture item
 *     tags:
 *       - places
 *     description: Returns a list of places
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
        const newPlace = await Places.create({
          _id: body._id,
          title: body.title,
          description: body.description,
          gallery: body.gallery,
          video: body.video,
          coverImage: body.coverImage,
          category: body.category,
          subCategory: body.subCategory,
          location: body.location,
        });

        id = newPlace._id;
    } catch (err) {
        console.log(`ERROR: in creating places:\n${err}`);
         return NextResponse.json(
           {
             message: `Error: ${err.message}. `,
             err: err,
           },
           { status: 400 }
         );
    }

    return NextResponse.json(
        {
            message: `Added ${body.title} to the database with id: ${id}. `,
        },
        { status: 201 }
    );
}
