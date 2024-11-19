import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { SignJWT } from "jose";
import argon2 from "argon2";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || "A5xj97s5GiJHD0518ZI02XjZPQU328";

// Regular expression for validating email
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // Validate email format
  if (!emailRegex.test(email)) {
    //
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
          "password must be mixed.....",
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
      },
    });

    const token = await new SignJWT({ id: newUser.id, roles: newUser.roles })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("120h")
      .sign(new TextEncoder().encode(JWT_SECRET));

    // Set the token in the cookies
    const response = NextResponse.json({ token }, { status: 201 });
    response.cookies.set("token", token, {
      maxAge: 3600, // 1 hour
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });

      return response;
  } catch (error) {
    console.error("Error during signup:", error);
    return NextResponse.json({ error: "Error creating user" }, { status: 500 });
  }
}
