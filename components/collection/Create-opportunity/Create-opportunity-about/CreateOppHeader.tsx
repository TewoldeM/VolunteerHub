"use client"
import { ArrowBigRight } from "lucide-react";
import React from "react";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";


const CreateOppHeader = () => {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = React.useState(pathname);

  React.useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  const bgColor = currentPath !== pathname ? "bg-red-800" : "bg-green-400";

  return (
    <div className="mt-12">
      <div className="flex flex-col justify-center">
        <div className="flex flex-col justify-center gap-4">
          <h1 className="text-4xl text-foreground text-green-700 ml-6">
            Post Opportunity
          </h1>
          {/* <Separator className="w-80" /> */}
          <div className="flex flex-row md:gap-0 p-4">
            <div className="flex flex-col justify-center items-center ">
              <div
                className={`text-sm md:text-lg ${bgColor} p-1 md:p-4 text-white rounded-sm cursor-pointer`}
              >
                Aboute
              </div>
            </div>
            <ArrowBigRight className="flex justify-center items-center  mt-2 w-2 h-2 md:w-10 md:h-10 text-green-400" />
            <div className="flex flex-col justify-center items-center ">
              <div
                className={`text-sm md:text-lg ${bgColor} p-1 md:p-4 text-white rounded-sm cursor-pointer`}
              >
                Date/Time
              </div>
            </div>
            <ArrowBigRight className="flex justify-center items-center  mt-2 w-2 h-2 md:w-10 md:h-10 text-green-400" />

            <div className="flex flex-col justify-center items-center ">
              <div
                className={`text-sm md:text-lg ${bgColor} p-1 md:p-4 text-white rounded-sm cursor-pointer`}
              >
                Detial
              </div>
            </div>
            <ArrowBigRight className="flex justify-center items-center  mt-2 w-2 h-2 md:w-10 md:h-10 text-green-400" />

            <div className="flex flex-col justify-center items-center ">
              <div
                className={`text-sm md:text-lg ${bgColor} p-1 md:p-4 text-white rounded-sm cursor-pointer`}
              >
                Filters
              </div>
            </div>
            <ArrowBigRight className="flex justify-center items-center  mt-2 w-2 h-2 md:w-10 md:h-10 text-green-400" />

            <div className="flex flex-col justify-center items-center ">
              <div
                className={`text-sm md:text-lg ${bgColor} p-1 md:p-4 text-white rounded-sm cursor-pointer`}
              >
                Comms
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateOppHeader;