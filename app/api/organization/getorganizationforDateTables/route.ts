import { NextRequest, NextResponse } from "next/server";
import { db } from "@/app/lib/db"; // Adjust the import path as necessary

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    console.log("User ID:", userId); // Log the user ID

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

    console.log("Organizations:", organizations); // Log the organizations

    // Check if the organizations are correctly fetched
    if (!organizations.length) {
      console.log("No organizations found for user ID:", userId);
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
