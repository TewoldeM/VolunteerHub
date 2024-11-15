import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { jwtVerify } from 'jose';
const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

export async function POST(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  if (!token) {
    // return NextResponse.json({ error: '' }, { status: 401 });
    return new NextResponse("Unauthorized No token found ", { status: 401 });
  }
  try {
    // Verify the token and get the user ID
    const secret = new TextEncoder().encode(JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);
    const decoded = payload as { id: string; roles: string[] };
    const userId = decoded.id;
    const { name, country, postalcode, orgtype } = await req.json();
    // Create the organization with the user as the owner
    const newOrganization = await prisma.organization.create({
      data: {
        name,
        country,
        postalcode,
        orgtype,
        owner: {
          connect: {
            id: userId,
          },
        },
      },
    });

    return NextResponse.json({ id: newOrganization.id }, { status: 201 });
  } catch (error) {
    console.error("[Error creating organization]", error);
    return new NextResponse(
      "Internal Server Error while creating organization",
      { status: 500 }
    );
  }
}