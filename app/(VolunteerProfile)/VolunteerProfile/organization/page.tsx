"use client"
import { useContext, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { Organization, Opportunity } from "@prisma/client";

const OrganizationComponent = () => {
  const { userId, name } = useContext(AuthContext);
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

  if (!organizations.length) {
    return (
      <div className="flex flex-col justify-center px-6 py-4 gap-10">
        <div className="flex flex-row justify-between px-10">
          <Link href="/VolunteerProfile/create-organization" passHref>
            <Button
              type="button"
              className="bg-blue-500 text-yellow-50 hover:bg-blue-300"
            >
              Create New Organization
            </Button>
          </Link>
          <Link
            href="/VolunteerProfile/Opportunity/Create-opportunity-About"
            passHref
          >
            <Button
              type="button"
              className="bg-blue-500 text-yellow-50 hover:bg-blue-300"
            >
              Post Opportunity
            </Button>
          </Link>
        </div>
        <div className="mt-5">
          <div className="text-blue-400">Loading...</div>
        </div>
      </div>
    );
  }

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
      <div className="flex justify-center items-center">
        {organizations.map((organization) => (
          <div key={organization.id}>
            <h2>{organization.name}</h2>
            <p>Opportunities:</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrganizationComponent;
