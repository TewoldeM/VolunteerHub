// app/api/organization/create/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

export async function POST(req: NextRequest) {
  try {
    // Parse token from request cookies
    const token = req.cookies.get('token')?.value;
    if (!token) {
      return NextResponse.json({ message: 'User not authenticated' }, { status: 401 });
    }

    // Verify JWT and extract user ID and roles
    const decoded = jwt.verify(token, JWT_SECRET) as { id: number; roles: string[] };
    if (!decoded || !decoded.id || !decoded.roles.includes('ORGANIZATION_ADMIN')) {
      return NextResponse.json({ message: 'Unauthorized: Must be an ORGANIZATION_ADMIN' }, { status: 403 });
    }

    // Parse the request body to get organization details
    const { name, description } = await req.json();
    if (!name || !description) {
      return NextResponse.json({ message: 'Name and description are required' }, { status: 400 });
    }

    // Create organization with current user as the owner
    const organization = await prisma.organization.create({
      data: {
        name,
        description,
        ownerId: decoded.id,
      },
    });

    return NextResponse.json(organization, { status: 201 });
  } catch (error) {
    console.error('Error creating organization:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
