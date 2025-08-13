"use client";
import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import CreateOpportunityDialogSpecificDateForyes from "./CreateOpportunityDialogSpecificDateForyes";
import CreateOpportunityDialogSpecificDateForNo from "./CreateOpportunityDialogSpecificDateForNo";

interface DialogProps {
  open: boolean;
  setOpen: (arg: boolean) => void;
}

const CreateOpportunitySpecificdate = ({ open, setOpen }: DialogProps) => {
  const itemsDate = [{label: "Yes",},{label: "No",}];
  const [checked, setChecked] = useState(false);
  const [selected, setSelected] = useState("");

  const handleOpenDialog = (label: string) => {
    if (label === "Yes") {
      setOpen(true);
      setSelected(label);
    } else {
      setOpen(false);
      setSelected(label);
    }
  };

  return (
    <div className="flex flex-col items-center mt-4">
      <h1 className="mb-8 text-3xl dark:text-white">Add Date, Time And Shift(Optional) </h1>
      <h2 className="text-lg  md:text-2xl  font-semibold items-center justify-center dark:text-gray-100">
        Are specific Date for this opportunity
      </h2>
      <div className="flex flex-wrap gap-8 justify-center">
        {itemsDate.map((itemDate, index) => (
          <div
            key={index}
            className="relative w-20 h-20 p-2  md:w-32 md:h-32 md:p-1 flex flex-col items-center cursor-pointer"
          >
            <span className="mt-4 text-xl  text-center">{itemDate.label}</span>
            <div className="mt-2">
              <Checkbox
                checked={selected === itemDate.label}
                onClick={() => handleOpenDialog(itemDate.label)}
              />
            </div>
          </div>
        ))}
      </div>

      {selected === "No" && (
        <CreateOpportunityDialogSpecificDateForNo
          open={open}
          setOpen={setOpen}
        />
      )}

      <CreateOpportunityDialogSpecificDateForyes
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
};

export default CreateOpportunitySpecificdate;
