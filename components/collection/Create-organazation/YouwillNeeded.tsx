"use client"
import {
  ArrowRight,
  GraduationCap,
  HeartHandshake,
  HomeIcon,
  LucideGlobe,
} from "lucide-react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import CreateOrganizationDialog from "./CreateOrganization/CreateOrganizationDialog";

const YouWillNeeded = () => {
  const [open, setOpen] = useState(false);
  const [selectedOrgType, setSelectedOrgType] = useState<string>("");

  const items = [
    {
      icon: <HeartHandshake size={80} />,
      label: "501(c) Nonprofits",
      hoverText: "Supporting certified nonprofits.",
      orgType: "NONPROFIT",
    },
    {
      icon: <HomeIcon size={80} />,
      label: "Gov't, Hospice, State-Level",
      hoverText: "Public sector partnerships.",
      orgType: "GOVERNMENT",
    },
    {
      icon: <GraduationCap size={80} />,
      label: "Schools and University",
      hoverText: "Educational institutions support.",
      orgType: "SCHOOL",
    },
    {
      icon: <LucideGlobe size={80} />,
      label: "Non-Ethiopian NGO",
      hoverText: "Connecting with global NGOs.",
      orgType: "NGO",
    },
  ];

  const handleOpenDialog = (orgType:string) => {
    setSelectedOrgType(orgType);
    setOpen(true);
  };

  return (
    <div className="flex flex-col items-center p-20 space-y-10 mb-14">
      <h1 className="text-4xl border-b-4 border-green-500 text-center p-2">
        You Will Needed
      </h1>
      <ul className="text-center  text-xl space-y-4">
        <span className="flex justify-center items-center gap-2 flex-row">
          <ArrowRight />
          <li className="">
            Have your mission statement and organization description handy
          </li>
        </span>
        <span className="flex justify-center items-center gap-2 flex-row">
          <ArrowRight className="-ml-4 text-red-300" />
          <li className="">
            If you are a non-profit (501(c)), be sure to have your EIN ready
          </li>
        </span>
      </ul>
      <h1 className="text-6xl  text-center mt-10">Start Here</h1>

      <div className="flex flex-wrap gap-8 justify-center mt-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative p-6 w-48 h-64 flex flex-col items-center cursor-pointer"
          >
            <div className="flex justify-center items-center dark:bg-gray-900 
            rounded-full p-4 hover:bg-opacity-90 text-green-300 border-1 border-green-500">
              {item.icon}
            </div>
            <span className="mt-4 text-xl  text-center">
              {item.label}
            </span>
            <div className="mt-8">
                   <Button
                variant={"outline"}
                className="border-emerald-500 bg-emerald-500 text-white hover:bg-emerald-900 hover:text-white"
              
                onClick={() => handleOpenDialog(item.orgType)}>
              
                Select
              </Button>
            </div>
          </div>
        ))}
      </div>

      <CreateOrganizationDialog
        open={open}
        onOpenChange={setOpen}
        selectedOrgType={selectedOrgType}
      />
    </div>
  );
};

export default YouWillNeeded;