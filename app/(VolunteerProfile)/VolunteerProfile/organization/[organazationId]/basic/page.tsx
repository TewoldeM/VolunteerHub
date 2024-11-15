import React from "react";
import EditOrganizationForm from "@/components/collection/Create-organazation/EditOrganization/EditOrganization";
import { getOrganization } from "@/app/lib/getOrganization";

const Basics = async ({ params }: { params: { organazationId: string } }) => {
  if (!params || !params.organazationId) {
    return <div>Organization not found</div>;
  }

  const organazationId = params.organazationId as string;

  const organization = await getOrganization(organazationId);

  if (!organization) {
    return <div>Organization not found</div>;
  }

  return (
    <div>
      <EditOrganizationForm Organization={organization} />
    </div>
  );
};

export default Basics;

// import { NextResponse } from "next/server";
// import { jwtVerify } from "jose";
// import { headers } from "next/headers";
// import { db } from "@/app/lib/db";
// import EditOrganizationForm from "@/components/collection/Create-organazation/EditOrganization/EditOrganization";
// import { redirect } from "next/navigation";
// // import { use } from "next/server";

// interface Props {
//   organizationId: string;
// }

// const Basic = ({ organizationId }: Props) => {
//   console.log("the id of current organization is", organizationId);

//   return (
//     <div className="flex flex-col justify-center items-center gap-4 h-screen mb-20">
//       {/* <EditOrganizationForm Organization={organizationData} /> */}
//       <h1 className=" bg-black text-white">{}</h1>
//     </div>
//   );
// };

// export const useServer = async ({ params }: { params: { organizationId: string } }) => {
//   const organizationId = params.organizationId;

//   // You can also add authentication and authorization logic here
//   // const authHeader = (await headers()).get("authorization");
//   // if (!authHeader) {
//   //   return NextResponse.json(
//   //     { error: "No authorization header provided" },
//   //     { status: 401 }
//   //   );
//   // }

//   // const token = authHeader.split(" ")[1];
//   // if (!token) {
//   //   redirect("/sign-in");
//   // }

//   // let userId;
//   // try {
//   //   const secret = new TextEncoder().encode(
//   //     process.env.JWT_SECRET || "default_secret"
//   //   );
//   //   const { payload } = await jwtVerify(token, secret);
//   //   userId = payload?.sub;
//   // } catch (err) {
//   //   return NextResponse.json({
// }
