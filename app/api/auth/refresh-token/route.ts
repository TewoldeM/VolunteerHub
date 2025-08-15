import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { SignJWT } from "jose";
const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || "A5xj97s5GiJHD0518ZI02XjZPQU328";

export async function POST(req: NextRequest) {
  if (req.headers.get("content-type") !== "application/json") {
    return NextResponse.json(
      { error: "Content-Type must be application/json" },
      { status: 415 }
    );
  }

  let refreshToken;
  try {
    const body = await req.json();
    refreshToken = body.refreshToken;

    if (!refreshToken) {
      return NextResponse.json(
        { error: "Refresh token is required" },
        { status: 400 }
      );
    }
     
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid JSON format" },
      { status: 400 }
    );
  }

  try {
    const user = await prisma.user.findFirst({
      where: { PasswordResetToken: refreshToken },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Invalid refresh token" },
        { status: 401 }
      );
    }
    const secret = new TextEncoder().encode(JWT_SECRET);
    const token = await new SignJWT({
      id: user.id,
      email: user.email,
      Roles: true
    })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("1h")
      .sign(secret);

    const newRefreshToken = await new SignJWT({
      id: user.id,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("7d")
      .sign(secret);
  
    await prisma.user.update({
      where: { id: user.id },
      data: { PasswordResetToken: newRefreshToken },
    });
    return NextResponse.json(
      {
        token,
        refreshToken: newRefreshToken,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          roles: user.roles,
          PasswordResetToken: user.PasswordResetToken || null,
        },
      },
      { status: 200 }
    );
  }
  catch (error) {
    console.error("Error finding user with refresh token:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
