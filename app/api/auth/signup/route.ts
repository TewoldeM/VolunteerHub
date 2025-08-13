// /api/auth/signup/route.ts
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { SignJWT } from "jose";
import argon2 from "argon2";

const prisma = new PrismaClient();

const JWT_SECRET = process.env.JWT_SECRET || "A5xj97s5GiJHD0518ZI02XjZPQU328";
const REFRESH_TOKEN_SECRET =
  process.env.REFRESH_TOKEN_SECRET || "refresh-token-secret";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password, name } = body;

    // Input validation
    if (!email || !password || !name) {
      return NextResponse.json(
        { error: "Email, password, and name are required" },
        { status: 400 }
      );
    }
// email valiation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }
// password validation
    if (password.length < 4 || password.length > 16) {
      return NextResponse.json(
        { error: "Password must be between 4 and 8 characters long" },
        { status: 400 }
      );
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,16}$/;
    if (!passwordRegex.test(password)) {
      return NextResponse.json(
        {
          error:
            "Password must be mixed with uppercase, lowercase, numbers, and special characters",
        },
        { status: 400 }
      );
    }

    // Check if user exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists with this email" },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await argon2.hash(password);
    const newUser = await prisma.user.create({
      data: { email, password: hashedPassword, name },
    });

    // Generate tokens
    const token = await new SignJWT({
      id: newUser.id,
      roles: newUser.roles,
      name: newUser.name,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("168h")
      .sign(new TextEncoder().encode(JWT_SECRET));

    const refreshToken = await new SignJWT({
      id: newUser.id,
      roles: newUser.roles,
      name: newUser.name,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("720h")
      .sign(new TextEncoder().encode(REFRESH_TOKEN_SECRET));

    // ✅ Redirect with cookies set
    const response = NextResponse.redirect(new URL("/", req.url));

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
    console.error("Signup error:", error);
    return NextResponse.json(
      { error: "Error creating user or invalid request format" },
      { status: 500 }
    );
  }
}
