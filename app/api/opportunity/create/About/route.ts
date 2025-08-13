import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const { title, description, country, city, address, state, zipcode } =
    await request.json();

  try {
    const AboutOpportunity = await prisma.about.create({
      data: {
        title: title,
        description: description,
        location: {
          create: {
            country: country,
            city: city,
            address: address,
            state: state,
            zipcode: zipcode,
          },
        },
      },
    });
    return NextResponse.json({ id: AboutOpportunity }, { status: 201 });
  } catch (error) {
    // console.error("[Error creating organization]", error);
    return new NextResponse(
      "Internal Server Error while creating opportunity",
      { status: 500 }
    );
  }
}
