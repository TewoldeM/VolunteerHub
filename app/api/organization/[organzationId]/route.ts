// api/organization/[id].ts
import { db } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { Category, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const PATCH = async (req: NextRequest, res: NextResponse) => {
  try {
    console.log("Received update request for organization");
    const url = new URL(req.url);
    const organizationId = url.pathname.split("/").pop(); // Get the organization ID from the URL

    if (!organizationId) {
      console.log("Organization ID is required");
      return NextResponse.json(
        { error: "Organization ID is required" },
        { status: 400 }
      );
    }

    const values = await req.json();
    console.log("Received update values:", values);

    // Update the organization
    const organization = await prisma.organization.update({
      where: { id: organizationId },
      data: {
        ...values,
        categories: {
          create: values.categories.map((category: Category) => ({
            category,
          })),
        },
      },
    });
    console.log("Updated organization:", organization);

    return NextResponse.json(organization, { status: 200 });
  } catch (err: any) {
    console.error("Error updating organization:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
