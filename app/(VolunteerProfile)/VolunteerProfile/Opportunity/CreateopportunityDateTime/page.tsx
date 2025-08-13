"use client";
import { useState } from "react";
import CreateOppHeader from "@/components/collection/Create-opportunity/Create-opportunity-about/CreateOppHeader";
import CreateOpportunityShift from "@/components/collection/Create-opportunity/Create-opportunity-date/OpportunityShift/CreateOpportunityShift";
import CreateOpportunitySpecificDate from "@/components/collection/Create-opportunity/Create-opportunity-date/OpportunitySpecificDate/CreateOpportunitySpecificDate";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const CreateOpportunityDateTimeHeader = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col gap-2 items-center pb-4">
      <CreateOppHeader />
      <Card className={cn("p-4")}>
        <CreateOpportunitySpecificDate open={open} setOpen={setOpen} />
        <CreateOpportunityShift open={open} setOpen={setOpen} />
      </Card>
    </div>
  );
};

export default CreateOpportunityDateTimeHeader;
