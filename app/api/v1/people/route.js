import People from "@/models/people";
import { NextResponse } from "next/server";
/**
 * @swagger
 * /api/v1/Peoples:
 *   get:
 *     summary: get People from the database
 *     tags:
 *       - places
 *     description: adds People in body to the db
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

export async function GET(req){
  try{
  const people= await People.find({});

  return NextResponse.json({message:"Peoples fetched successfully",data:people})

  } catch(err){
      return NextResponse.json({
      message: `DB error in performing the create culture action. `,
      err: err,
    });
  }
}

/**
 * @swagger
 * /api/v1/Peoples:
 *   post:
 *     summary: add People to the database
 *     tags:
 *       - places
 *     description: adds People in body to the db
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
  const { name, contact,photo, position } = await req.json();
  try {
    const person = await People.create({
      name,
      photo,contact, position
    });

    return NextResponse.json(
      {
        message: `created People ${person.name}.`,
        person:person,
      },
      {
        status: 201,
      }
    );
  } catch (err) {
    return NextResponse.json(
      {
        message: `Error: ${err.message}. `,
        err: err,
      },
      { status: 400 }
    );
  }
}

