"use client";
import { useState } from "react";
import CreateOppHeader from "@/components/collection/Create-opportunity/Create-opportunity-about/CreateOppHeader";
import CreateOpportunityShift from "@/components/collection/Create-opportunity/Create-opportunity-date/OpportunityShift/CreateOpportunityShift";
import CreateOpportunitySpecificDate from "@/components/collection/Create-opportunity/Create-opportunity-date/OpportunitySpecificDate/CreateOpportunitySpecificDate";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const CreateOpportunityDateTimeHeader = () => {
  const [opendate, setOpendate] = useState(false);
    const [openshift, setOpenshift] = useState(false);

  return (
    <div className="flex flex-col gap-2 items-center pb-4">
      <CreateOppHeader />
      <Card className={cn("p-8")}>
        <h1 className="mb-8 text-3xl text-orange-600">
          Add Date, Time And Shift(Optional)
        </h1>
        <CreateOpportunitySpecificDate
          opendate={opendate}
          setOpendate={setOpendate}
        />
        <CreateOpportunityShift
          openshift={openshift}
          setOpenshift={setOpenshift}
        />
      </Card>
    </div>
  );
};

export default CreateOpportunityDateTimeHeader;
