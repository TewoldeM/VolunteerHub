import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { SignJWT } from 'jose';
import argon2 from 'argon2';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json({ message: 'Email and password are required' }, { status: 400 });
    }

    // Find user
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !(await argon2.verify(user.password, password))) {
      return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
    }

    // Generate tokens
    const token = await new SignJWT({ id: user.id, roles: user.roles })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("1h")
      .sign(new TextEncoder().encode(JWT_SECRET));
    
    // Set cookies
    const response = NextResponse.json({ message: 'Sign-in successful' });
    response.cookies.set('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', path: '/' });

    return response;
  } catch (error) {
    console.error("Error in POST /login:", error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}