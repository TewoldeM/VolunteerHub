import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import { jwtVerify } from "jose";
import { toast } from "sonner";
const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || "A5xj97s5GiJHD0518ZI02XjZPQU328";

export async function POST(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  if (!token) {
    return new NextResponse("Unauthorized No token found ", { status: 401 });
  }
  try {
    // Verify the token and get the user ID
    const secret = new TextEncoder().encode(JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);
    const decoded = payload as { id: string; roles: string[] };
    const userId = decoded.id;
    const { name, country, postalcode, orgtype } = await req.json();
    // Check if the organization name already exists
    const existingOrganization = await prisma.organization.findFirst({
      where: { name },
    });
   if (existingOrganization) {
     toast.error(
       "Organization name already exists. Please choose a different name."
     );
     return;
   }
    // Create the organization with the user as the owner
    const newOrganization = await prisma.organization.create({
      data: {
        name,
        country,
        postalcode,
        orgtype,
        ownerId: userId, // Add the ownerId field
      },
    });
    return NextResponse.json({ id: newOrganization.id }, { status: 201 });
  } catch (error) {
    // console.error("[Error creating organization]", error);
    return new NextResponse(
      "Internal Server Error while creating organization",
      { status: 500 }
    );
  }
}
