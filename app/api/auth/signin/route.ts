// app/api/auth/signin/route.ts
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { SignJWT } from "jose";
import argon2 from "argon2";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || "A5xj97s5GiJHD0518ZI02XjZPQU328";
const REFRESH_TOKEN_SECRET =
  process.env.REFRESH_TOKEN_SECRET || "8ZI02XjZPQU328A5xj97s5GiJHD051";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || !(await argon2.verify(user.password, password))) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Create tokens
    const token = await new SignJWT({
      id: user.id,
      roles: user.roles,
      name: user.name,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("120h")
      .sign(new TextEncoder().encode(JWT_SECRET));

    const refreshToken = await new SignJWT({
      id: user.id,
      roles: user.roles,
      name: user.name,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("720h") // 30 days
      .sign(new TextEncoder().encode(REFRESH_TOKEN_SECRET));

    // Set cookies and return JSON response
    const response = NextResponse.json({
      message: "Sign-in successful",
      name: user.name,
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
    });

    response.cookies.set("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Error in POST /api/auth/signin:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
