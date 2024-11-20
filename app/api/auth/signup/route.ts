import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { SignJWT } from "jose";
import argon2 from "argon2";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || "A5xj97s5GiJHD0518ZI02XjZPQU328";

export async function POST(req: NextRequest) {
  const { email, password, name } = await req.json();

  // Validate input
  if (!email || !password || !name) {
    return NextResponse.json(
      { error: "Email, password, and name are required" },
      { status: 400 }
    );
  }

  // Validate email format
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "Invalid email format" },
      { status: 400 }
    );
  }

  // Validate password length
  if (password.length < 4 || password.length > 8) {
    return NextResponse.json(
      { error: "Password must be between 4 and 8 characters long" },
      { status: 400 }
    );
  }

  // Validate password strength
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,8}$/;
  if (!passwordRegex.test(password)) {
    return NextResponse.json(
      {
        error:
          "Password must be mixed with uppercase, lowercase, numbers, and special characters",
      },
      { status: 400 }
    );
  }

  try {
    // Hash password using Argon2
    const hashedPassword = await argon2.hash(password);
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });

    // Generate tokens
    const token = await new SignJWT({
      id: newUser.id,
      roles: newUser.roles,
      name: newUser.name,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("120h")
      .sign(new TextEncoder().encode(JWT_SECRET));

    // Set cookies
    const response = NextResponse.json({ token });
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
    });
    return response;
  } catch (error) {
    // console.error("Error during signup:", error);
    return NextResponse.json({ error: "Error creating user" }, { status: 500 });
  }
}
