import { Button } from "@/components/ui/button";
import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
const OrganizationFinshed = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-6">
      <h1 className="text-green-400 text-4xl">
        You have created the organization Successfully{" "}
      </h1>
      <h2 className="text-green-300 text-lg">
        You must wait 72hr for Autherazation of your organization ,we will
        send you an email
      </h2>

      {/* <Link href="/VolunteerProfile/DashboardofOrganization">
        <Button className={cn("bg-blue-500 text-yellow-50 hover:bg-blue-300")}>
          Go to Dashboard
        </Button>
      </Link> */}
    </div>
  );
};

export default OrganizationFinshed;
