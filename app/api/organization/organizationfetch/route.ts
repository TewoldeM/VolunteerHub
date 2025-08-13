import { NextRequest, NextResponse } from "next/server";
import { db } from "@/app/lib/db";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    const organizations = await db.organization.findMany({
      where: {
        ownerId: userId,
      },
      include: {
        opportunities: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    if (!organizations.length) {
      console.log(`No organizations found for user ID: ${userId}`);
      return NextResponse.json(
        { message: "No organizations found" },
        { status: 404 }
      );
    }

    return NextResponse.json(organizations, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
