import { NextRequest, NextResponse } from "next/server";
import { db } from "@/app/lib/db";
import { URL } from "url";

const getOrganizations = async (req: NextRequest) => {
  const url = new URL(req.url);
  const userId = url.searchParams.get("userId");

  if (!userId) {
    return new NextResponse("User ID is required", { status: 400 });
  }

  try {
    const organizations = await db.organization.findMany({
      where: {
        ownerId: userId,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    return new NextResponse(JSON.stringify(organizations), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
    return new NextResponse("Failed to fetch organizations", { status: 500 });
  }
};

export const GET = getOrganizations;
