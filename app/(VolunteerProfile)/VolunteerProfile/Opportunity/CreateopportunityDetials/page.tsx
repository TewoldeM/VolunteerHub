"use client"
import CreateOppHeader from "@/components/collection/Create-opportunity/Create-opportunity-about/CreateOppHeader";
import CreateOpportunityDetialsForm from "@/components/collection/Create-opportunity/Create-opportunity-detials/CreateOpportunityDetialsForm";
import React, { useState } from "react";

const CreateOpprtunityDetials = () => {
   const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col gap-2 items-center pb-4">
      <CreateOppHeader />
      <CreateOpportunityDetialsForm open={open} setOpen={setOpen} />
    </div>
  );
};

export default CreateOpprtunityDetials;
