import React from "react";
import EditOrganizationForm from "@/components/collection/Create-organazation/EditOrganization/EditOrganization";
import { getOrganization } from "@/app/lib/getOrganization";

const Basics = async ({ params }: { params: { organazationId: string } }) => {
  if (!params) {
    return <div>Organization not found</div>;
  }

  const { organazationId } = await params; // Await params before accessing its properties

  if (!organazationId) {
    return <div>Organization not found</div>;
  }

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

