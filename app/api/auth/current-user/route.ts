// app/api/auth/current-user/route.ts
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// Set runtime to Node.js instead of Edge
export const config = {
  runtime: 'nodejs', // Ensure this API runs on the Node.js runtime
};

export async function GET(req: NextRequest) {
  try {
    // Retrieve token from headers instead of cookies
    const authHeader = req.headers.get("authorization");
    const token = authHeader?.split(" ")[1];

    if (!token) {
      return NextResponse.json({ message: "User not authenticated" }, { status: 401 });
    }

    // Verify token using jsonwebtoken in Node.js runtime
    const decoded = jwt.verify(token, JWT_SECRET) as { id: number };

    if (!decoded || !decoded.id) {
      return NextResponse.json({ message: "User not authenticated" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      select: { id: true, email: true },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error("Error fetching current user:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
