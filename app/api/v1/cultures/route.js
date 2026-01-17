// app/api/users/route.js
import { NextResponse } from 'next/server';

export async function GET(request) {
  return NextResponse.json({
    message: 'GET list of cultures',
  });
}

export async function POST(request) {
  return NextResponse.json({
    message: 'Add a culture',
  });
}
