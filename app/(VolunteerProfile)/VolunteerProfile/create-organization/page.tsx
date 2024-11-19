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

const CreateOrganaztion = () => {
  const { user, loading, error } = useCurrentUser();
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const router = useRouter();
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    if (user) {
      const fetchOrganizations = async () => {
        const response = await fetch(
          `/api/organization/organizationfetch?userId=${user.id}`
        );
        const data = await response.json();
        setOrganizations(data);
      };
      fetchOrganizations();
    }
  }, [user]);

  useEffect(() => {
    if (organizations && organizations.length > 0) {
      setShouldRedirect(true);
    }
  }, [organizations]);

  useEffect(() => {
    if (shouldRedirect) {
      router.push("/VolunteerProfile/organization");
    }
  }, [shouldRedirect, router]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  if (shouldRedirect) return null;

  return (
    <div className="mt-20 mb-14">
      <Createorganazation />
      <YouwillNeeded />
      <Link href="/VolunteerProfile/create-organization">
        <Button className={cn("bg-blue-500 text-yellow-50 hover:bg-blue-300")}>
          Create New Organization
        </Button>
      </Link>
    </div>
  );
};

export default CreateOrganaztion;
