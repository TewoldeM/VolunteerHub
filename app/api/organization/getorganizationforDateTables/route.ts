// app/api/organizations/route.ts
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/app/lib/db"; // Adjust the import path as necessary

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");

  if (!userId) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }

  try {
    const organizations = await db.organization.findMany({
      where: {
        ownerId: String(userId),
      },
      include: {
        opportunities: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });
    return NextResponse.json(organizations, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
