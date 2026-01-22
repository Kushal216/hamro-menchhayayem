import swaggerJSDoc from 'swagger-jsdoc';
import { NextResponse } from 'next/server';
import path from 'path';

export const runtime = 'nodejs';

const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hamro-menchhayayem API',
      version: '1.0.0',
    },
  },
  apis: [path.join(process.cwd(), 'app/api/v1/**/route.js')],
});

export async function GET() {
  return NextResponse.json(swaggerSpec);
}
