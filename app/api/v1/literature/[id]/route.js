import { NextResponse } from 'next/server';
import Literature from '@/models/literature';

/**
 * @swagger
 * /api/literature/{id}:
 *   get:
 *     summary: Get literature item with :id
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
export async function GET(req, {params}) {
    const { id } =await  params;
    try {
        const literature = await Literature.findById(id);

        if (!literature) {
            return NextResponse.json({ error: 'Not found' }, { status: 404 });
        }

        return NextResponse.json({ data: literature });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}

/**
 * @swagger
 * /api/literature/{id}:
 *   put:
 *     summary: Update item with :id
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
export async function PATCH(req, {params}) {
    const { id } =await  params;
    const body = await req.json();

    try {
        const updated = await Literature.findByIdAndUpdate(
            id,
            { $set: body }, // only update provided fields
            { new: true, runValidators: true }
        );

        if (!updated) {
            return NextResponse.json({ error: 'Not found' }, { status: 404 });
        }

        return NextResponse.json({
            message: `Updated literature ${updated.title}`,
            data: updated,
        });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}

/**
 * @swagger
 * /api/literature/{id}:
 *   put:
 *     summary: replace item with given id
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
export async function PUT(req, {params}) {
    //check if authorized
    //validate data

    const body = await req.json()
    const { id } =await  params;

    try {
        const literature = await Literature.findById(id);

        if (!literature) {
            return NextResponse.json(
                { error: "The culture id doesn't exist." },
                { status: 404 }
            );
        }

        const dbResponse = await Literature.replaceOne(
            { _id: id },
            {
                title: body.title,
                description: body.description,
                video: body.video,
                coverImage: body.coverImage,
                category: body.category,
            }
        );

        return NextResponse.json({
            message: `replaced literature ${body.title} with ${body.title}`,
            id: id,
            data: dbResponse
        });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}

/**
 * @swagger
 * /api/literature/{id}:
 *   delete:
 *     summary: delete culture item with :id
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
export async function DELETE(req, {params}) {
    //validate user

    const { id } =await  params;

    try {
        const literature = await Literature.findByIdAndDelete(id);

        if (literature) {
            return Response.json({
                message: `deleted ${literature.title}`,
                data: literature,
            });
        } else {
            return Response.json(
                {
                    message: "The literature with the given id doesn't exist.",
                    id: id,
                },
                { status: 404 }
            );
        }
    } catch (err) {
        return Response.json(
            {
                message: 'Some error occurred in the database',
                error: err,
            },
            { status: 500 }
        );
    }
}
