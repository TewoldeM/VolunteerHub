"use client";
import CreateOppHeader from "@/components/collection/Create-opportunity/Create-opportunity-about/CreateOppHeader";
import CreateOpportunityCommsForm from "@/components/collection/Create-opportunity/CreateOpportunityComms/CreateOpportunityCommsForm";
import React, { useState } from "react";

const CreateOpportunityComms = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col gap-2 items-center pb-4">
      <CreateOppHeader />
      <div className="mt-20">
        <CreateOpportunityCommsForm open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default CreateOpportunityComms;
