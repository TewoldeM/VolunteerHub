import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import CreateOrganizationDialog from "./CreateOrganization/CreateOrganizationDialog";
import {
  GraduationCap,
  HeartHandshake,
  HomeIcon,
  LucideGlobe,
} from "lucide-react";

const GetStarted = () => {
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

  const handleOpenDialog = (orgType: string) => {
    setSelectedOrgType(orgType);
    setOpen(true);
  };
  return (
    <div className="flex flex-col justify-center items-center py-12 px-4">
      <h1 className="text-4xl text-center mt-10 text-orange-400 mb-12">Start Here</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:px-20 w-full mt-6 p-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative p-6 w-full h-80 flex flex-col items-center cursor-pointer bg-orange-50 dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
          >
            <div className="flex justify-center items-center dark:bg-gray-900 rounded-full p-4 hover:bg-opacity-90 text-orange-300 border border-orange-500">
              {item.icon}
            </div>
            <span className="mt-4 text-xl text-center text-black">{item.label}</span>
            <div className=" mt-8">
              <Button
                variant={"outline"}
                className="border-orange-500 bg-orange-400 text-white hover:bg-orange-600 hover:text-white px-20 py-6"
                onClick={() => handleOpenDialog(item.orgType)}
              >
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

export default GetStarted;
