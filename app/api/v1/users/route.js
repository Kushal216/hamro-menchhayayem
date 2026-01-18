import { NextResponse } from 'next/server';
import User from '@/models/user';
/**
 * @swagger
 * /api/v1/users:
 *   get:
 *     summary: validate authentication
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
  const users = await User.find({});

  return NextResponse.json({ message: 'users fetched', data: users });
}

export async function POST(req){
//get body email and pw
//encrypt pw bcrypt
//add content of body 
}
