"use client";
import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import CreateOpportunityDialogSHift from "./CreateOpportunityDialogSHift";
import { AlertCircle, Copy, Delete, Edit2, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import CreateShiftDilog from "../CreateShiftDilog";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import CreateOpportunityDialogForYesShift from "./CreateOpportunityDialogForYesShift";
import CreateOpportunityDialogForNoShift from "./CreateOpportunityDialogForNoShift";

interface DialogProps {
  open: boolean;
  setOpen: (arg: boolean) => void;
}

const CreateOpportunityShift = ({ open, setOpen }: DialogProps) => {
  const itemsDate = [
    {
      label: "Yes",
    },
    {
      label: "No",
    },
  ];
  const [checked, setChecked] = useState(false);
  const [selected, setSelected] = useState("");
  const [selectAll, setSelectAll] = useState(false);
  const [weekdaysDaytime, setWeekdaysDaytime] = useState(false);
  const [weekdaysEvenings, setWeekdaysEvenings] = useState(false);
  const [weekendsDaytime, setWeekendsDaytime] = useState(false);
  const [weekendsEvenings, setWeekendsEvenings] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  
  const handleOpenDialog = (label: string) => {
    if (label === "Yes") {
      setSelected(label);
    } else {
      setOpen(false);
      setSelected(label);
    }
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setWeekdaysDaytime(selectAll ? false : true);
    setWeekdaysEvenings(selectAll ? false : true);
    setWeekendsDaytime(selectAll ? false : true);
    setWeekendsEvenings(selectAll ? false : true);
  };

  const handleCheckboxChange = (type: string) => {
    switch (type) {
      case "weekdaysDaytime":
        setWeekdaysDaytime(!weekdaysDaytime);
        break;
      case "weekdaysEvenings":
        setWeekdaysEvenings(!weekdaysEvenings);
        break;
      case "weekendsDaytime":
        setWeekendsDaytime(!weekendsDaytime);
        break;
      case "weekendsEvenings":
        setWeekendsEvenings(!weekendsEvenings);
        break;
      default:
        break;
    }
  };

  const handleAddShift = () => {
    setShowDialog(true);
  };

  return (
    <>
      <div className="flex flex-col items-center mt-4 ">
        <h1 className="text-lg ml-16 md:ml-28 md:text-2xl  font-semibold items-center justify-center">
          Is this opportunity have shift for Volunteers?
        </h1>
        <div className="flex flex-wrap gap-8 justify-center">
          {itemsDate.map((itemDate, index) => (
            <div
              key={index}
              className="relative w-20 h-20 p-2  md:w-32 md:h-32 md:p-1 flex flex-col items-center cursor-pointer"
            >
              <span className="mt-4 text-xl  text-center">
                {itemDate.label}
              </span>
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
          <CreateOpportunityDialogForYesShift open={open} setOpen={setOpen} />
        )}

        {selected === "No" && (
          <CreateOpportunityDialogForNoShift open={open} setOpen={setOpen} />
        )}

        {showDialog && (
          <CreateShiftDilog open={showDialog} setOpen={setShowDialog} />
        )}
      </div>

      <div className="flex justify-between items-center mb-1 md:mb-8 px-8">
        <Link href="/VolunteerProfile/Opportunity/CreateopportunityAbout">
          <Button className="bg-green-500 hover:bg-green-400  font-bold py-2 px-4 rounded-l-full text-white">
            Previous
          </Button>
        </Link>

        <div className="flex justify-end">
          <button className=" hover:text-green-600 font-bold md:py-2 px-4 ">
            Save Draft
          </button>
          <Link href="/VolunteerProfile/Opportunity/CreateopportunityDetials">
            <Button className="bg-green-500 hover:bg-green-400  font-bold py-2 px-4 rounded-r-full text-white">
              Next
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CreateOpportunityShift;
