"use client";

import { useContext, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/collection/Create-organazation/DataTable";
import { columns } from "@/components/collection/Create-organazation/Columns";
import AuthContext from "@/app/lib/AuthContext";
import Link from "next/link";
import { Organization, Opportunity } from "@prisma/client";

const OrganizationComponent = () => {
  const { userId, email } = useContext(AuthContext);
  const [organizations, setOrganizations] = useState<
    (Organization & { opportunities: Opportunity[] })[]
  >([]);

  useEffect(() => {
    const fetchOrganizations = async () => {
      if (userId) {
        try {
          const response = await fetch(
            `/api/organization/getorganizationforDateTables?userId=${userId}`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch organizations");
          }
          const userOrganizations = await response.json();
          setOrganizations(userOrganizations);
        } catch (error) {
          console.error("Error fetching organizations:", error);
        }
      }
    };
    fetchOrganizations();
  }, [userId]);

  return (
    <div className="flex flex-col justify-center px-6 py-4 gap-10">
      <Link href="/VolunteerProfile/create-organization" passHref>
        <Button
          type="button"
          className="bg-blue-500 text-yellow-50 hover:bg-blue-300"
        >
          Create New Organization
        </Button>
      </Link>
      <div className="mt-5">
        <DataTable columns={columns(email || "N/A")} data={organizations} />
      </div>
    </div>
  );
};

export default OrganizationComponent;
