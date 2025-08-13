"use client"
import useCurrentUser from "@/app/lib/UserCurrentUser";
import { columns } from "@/components/collection/Create-organazation/Columns";
import { DataTable } from "@/components/collection/Create-organazation/DataTable";
import { Button } from "@/components/ui/button";
import { OrganizationWithOpportunities } from "@/type/organizationwithopprtunity";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const DashboardOfOrganization = () => {
      const { user, loading, error } = useCurrentUser();
      const [organizations, setOrganizations] = useState<
        OrganizationWithOpportunities[]
      >([]);
    const router = useRouter();
      useEffect(() => {
        if (user) {
          const fetchOrganizations = async () => {
            try {
              const response = await fetch(
                `/api/organization/organizationfetch?userId=${user.id}`
              );
              const data = await response.json();
              setOrganizations(data);
            } catch (err) {
              console.log(err, "Error in fetching the organizations");
            }
          };
          fetchOrganizations();
        }
      }, [user]);

  const handleCreateAnotherOrganization = () => {
    router.push("/VolunteerProfile/CreateAnotherOrganization");
  };
  return (
    <div className="flex flex-col px-4 py-12 gap-4 ">
      <div>
        <DataTable
          columns={user ? columns(user.name) : []}
          data={organizations}
        />
      </div>
      <div className="flex flex-row justify-end items-center gap-10">
        <Link href="/VolunteerProfile/Opportunity/CreateopportunityAbout">
          <Button
            variant={"outline"}
            className="border-emerald-500 bg-emerald-700 dark:bg-emerald-950 text-white hover:bg-emerald-500 hover:text-white"
          >
            Create Opportunity
          </Button>
        </Link>
        <Button
          variant={"outline"}
          className="border-emerald-500 bg-emerald-700 dark:bg-emerald-950 text-white hover:bg-emerald-500 hover:text-white"
          onClick={handleCreateAnotherOrganization}
        >
          Create Another organization
        </Button>
      </div>
    </div>
  );
};

export default DashboardOfOrganization;
