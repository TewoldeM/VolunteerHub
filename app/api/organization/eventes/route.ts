// api/organization/create/route.ts
import prisma from "@/app/lib/client";
import { NextApiRequest, NextApiResponse } from "next";

import { z } from "zod";

// Define the schema for the incoming organization data
const organizationSchema = z.object({
  name: z.string().min(2),
  address: z.string(),
  city: z.string(),
  province: z.string(),
  postalcode: z.string(),
  country: z.string(),
  phone: z.string(),
  website: z.string(),
  linkedinURL: z.string(),
  facebookURL: z.string(),
  twitterURL: z.string(),
  photo: z.string().optional(),
  mission: z.string(),
  description: z.string(),
  type: z.enum(["NONPROFIT", "GOVERNMENT", "SCHOOLE", "NGO"]).optional(),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      // Validate the request body using Zod
      const formData = organizationSchema.parse(req.body);

      // Create a new organization in the database
      const organization = await prisma.organization.create({
        data: {
          ...formData,
          owner: { connect: { id: req.body.ownerId } }, // assuming ownerId is passed in request
          type: formData.type ?? "NGO", // Default to NGO if type is not specified
        },
      });

      // Respond with the created organization ID
      res.status(201).json({ id: organization.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: error.errors });
      } else {
        res.status(500).json({ error: "Failed to create organization" });
      }
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}













// import prisma from "@/app/lib/client";
// import { NextResponse } from "next/server";
//  // assuming prisma client is exported from here

// export async function POST(req: Request) {
//   const data = await req.json();

//   try {
//     const organization = await prisma.organization.create({
//       data: {
//         name: data.name,
//         description: data.description,
//         type: data.type, // Ensure this matches your Prisma schema
//         ownerId: data.ownerId,
//       },
//     });

//     return NextResponse.json({ id: organization.id });
//   } catch (error) {
//     return NextResponse.json({ error: "Failed to create organization" }, { status: 500 });
//   }
// }
