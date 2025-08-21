"use client";
import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import CreateOpportunityDialogSpecificDateForyes from "./CreateOpportunityDialogSpecificDateForyes";
import CreateOpportunityDialogSpecificDateForNo from "./CreateOpportunityDialogSpecificDateForNo";

interface DialogProps {
  opendate: boolean;
  setOpendate: (arg: boolean) => void;
}

const CreateOpportunitySpecificdate = ({
  opendate,
  setOpendate,
}: DialogProps) => {
  const [showDialog, setShowDialog] = useState(false);
  const [selected, setSelected] = useState("");

  const itemsDate = [{ label: "Yes" }, { label: "No" }];

  const handleOpenDialog = (label: string) => {
    setSelected(label);
    if (label === "Yes") {
      setOpendate(true);
    } else if (label === "No") {
      setShowDialog(true); // Open the "No" dialog
    }
  };

  return (
    <div className="flex flex-col items-center mt-4 bg-orange-50 p-6">
      <h2 className="text-lg md:text-2xl font-semibold items-center justify-center text-orange-400">
        Are there specific dates for this opportunity?
      </h2>
      <div className="flex flex-wrap gap-8 justify-center">
        {itemsDate.map((itemDate, index) => (
          <div
            key={index}
            className="relative w-20 h-20 p-2 md:w-32 md:h-32 md:p-1 flex flex-col items-center cursor-pointer"
          >
            <span className="mt-4 text-xl text-center">{itemDate.label}</span>
            <div className="mt-2">
              <Checkbox
                checked={selected === itemDate.label}
                onClick={() => handleOpenDialog(itemDate.label)}
              />
            </div>
          </div>
        ))}
      </div>
      {selected === "Yes" && (
        <CreateOpportunityDialogSpecificDateForyes
          opendate={opendate}
          setOpendate={setOpendate}
        />
      )}
      {selected === "No" && (
        <CreateOpportunityDialogSpecificDateForNo
          opendate={showDialog}
          setOpendate={setShowDialog}
        />
      )}
    </div>
  );
};

export default CreateOpportunitySpecificdate;
