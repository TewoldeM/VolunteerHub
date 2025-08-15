import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { jwtVerify, JWTPayload } from "jose";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || "A5xj97s5GiJHD0518ZI02XjZPQU328";

export async function GET(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const secret = new TextEncoder().encode(JWT_SECRET);
    const { payload } = await jwtVerify(token, secret, { clockTolerance: 30 });
    const userId = (payload as JWTPayload & { id?: string })?.id;

    if (!userId) {
      console.log(
        "User ID not found or invalid in token payload in /api/auth/me:",
        payload
      );
      return NextResponse.json(
        { error: "Invalid token: Missing or invalid user ID" },
        { status: 401 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        roles: true,
        PasswordResetToken:true,
      },
    });

    if (!user) {
      console.log("User not found for ID:", userId, "in /api/auth/me");
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(
      {
        user,
        token, // Return the current token
        refreshToken: user.PasswordResetToken || null, // Return the refresh token
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error verifying token in /api/auth/me:", error);
  } finally {
    await prisma.$disconnect();
  }
}
