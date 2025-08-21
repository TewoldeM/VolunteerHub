"use client";
import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import CreateOpportunityDialogForYesShift from "./CreateOpportunityDialogForYesShift";
import CreateOpportunityDialogForNoShift from "./CreateOpportunityDialogForNoShift";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface DialogProps {
  openshift: boolean;
  setOpenshift: (arg: boolean) => void;
}

const CreateOpportunitySpecificdate = ({
  openshift,
  setOpenshift,
}: DialogProps) => {
  const itemsDate = [{ label: "Yes" }, { label: "No" }];
  const [selected, setSelected] = useState("");

  const handleOpenDialog = (label: string) => {
    setSelected(label);
    setOpenshift(true); // Open the dialog for both "Yes" and "No"
  };

  return (<>
    <div className="flex flex-col items-center mt-4 bg-orange-50 p-6">
      {/* <h1 className="mb-8 text-2xl md:text-3xl text-orange-600">
        Add Date, Time And Shift(Optional)
      </h1> */}
      <h2 className="text-lg md:text-xl font-semibold items-center justify-center text-orange-400">
        DOES THIS OPPORTUNITY HAVE SHIFTS?{" "}
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
        <CreateOpportunityDialogForYesShift
          openshift={openshift}
          setOpenshift={setOpenshift}
        />
      )}
      {selected === "No" && (
        <CreateOpportunityDialogForNoShift
          openshift={openshift}
          setOpenshift={setOpenshift}
        />
      )}
     
    </div>
    
     <div className="flex justify-between items-center  py-6 md:gap-20">
        <Link href="/VolunteerProfile/Opportunity/CreateopportunityAbout">
          <Button className="bg-orange-500 hover:bg-orange-400  font-bold py-6 px-4 rounded-l-full text-white">
            Previous
          </Button>
        </Link>

        <div className="flex justify-end">
          <button className=" hover:text-orange-600 font-bold md:py-2 px-4 text-orange-700">
            Save Draft
          </button>
          <Link href="/VolunteerProfile/Opportunity/CreateopportunityDetials">
            <Button className="bg-orange-500 hover:bg-orange-400  font-bold py-6 px-4 rounded-r-full text-white">
              Next
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CreateOpportunitySpecificdate;
