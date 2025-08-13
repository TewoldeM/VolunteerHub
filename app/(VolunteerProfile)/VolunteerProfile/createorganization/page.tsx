"use client"
import Createorganazation from "@/components/collection/Create-organazation/Createorganazation";
import YouwillNeeded from "@/components/collection/Create-organazation/YouwillNeeded";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import useCurrentUser from "@/app/lib/UserCurrentUser";
import { Organization } from "@prisma/client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DataTable } from "@/components/collection/Create-organazation/DataTable";
import { columns } from "@/components/collection/Create-organazation/Columns";
import { OrganizationWithOpportunities } from "@/type/organizationwithopprtunity";

const CreateOrganaztion = () => {
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

  const handleDashboardofOrganization = () => {
    router.push("/VolunteerProfile/DashboardofOrganization");
  };
 const handleCreateAnotherOrganization = () => {
    router.push("/VolunteerProfile/CreateAnotherOrganization");
 };
  if (loading) return <div className="flex justify-center items-center h-screen ">Loading...</div>;
  if (error) return <div className="flex justify-center items-center">Error: {error}</div>;

  return (
    <div className="mt-32 mb-14 flex flex-col justify-center items-center">
      {organizations.length > 0 ? (
        <div className="flex justify-center items-center flex-row gap-8">
          <Button onClick={handleDashboardofOrganization}>
            Go to Dashboard
          </Button>
          <Button onClick={handleCreateAnotherOrganization}>
            Create Organization
          </Button>
        </div>
      ) : (
        <div>
          <Createorganazation />
          <YouwillNeeded />
        </div>
      )}
    </div>
  );
};

export default CreateOrganaztion;
