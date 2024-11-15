import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Fullscreen, Glasses, Home, HomeIcon, HousePlusIcon, Minus, Plus } from "lucide-react";
import React from "react";

const Volunter_profile = () => {
  return (
    <div className="flex flex-col gap-2 md:gap-4 justify-center items-center p-4 h-screen w-screen ">
      <div className="flex items-center mb-2 m-36 md:m-8 md:flex-row md:mt-2 gap-2 md:gap-8 ">
        <span className="flex items-center md:justify-center md:gap-2 cursor-pointer ">
          <Glasses size="28" className="text-gray-700" />
          <h1 className="text-gray-500 cursor-pointer text-lg md:text-xl hover:text-blue-400 
           px-2 border-b-2">
            FindVolunteerOpportunity
          </h1>
        </span>
        <h1 className="text-gray-500 cursor-pointer text-lg md:text-xl hover:text-blue-400 border-b-2">
          Organization
        </h1>
      </div>
      <div className="flex justify-center items-center bg-gray-100 py-1 md:py-24 px-4 md:px-44">
        <div className="flex flex-col md:flex-row bg-white w-full">
          <div className="flex flex-row md:flex-col justify-center items-center px-4 md:px-8 gap-4 border-4 bg-teal-200">
            <img
              src="/image.png"
              alt="Add Your Photo"
              className="object-cover rounded w-40 h-40 border border-red-700 p-1"
            />
            <div className="px-4">
              <h1 className="text-xl text-gray-700 ">Tewold Marie</h1> 
              <p className="text-lg text-gray-800 mt-2">Memeber since 2024</p>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex flex-col md:flex-row border border-b-2 border-gray-600 justify-between">
              <div className="flex  flex-col md:flex-row md:items-center gap-4 md:gap-10 p-8 md:px-6">
                <div className="flex flex-col   md:flex-col md:gap-24 gap-4">
                  <div>
                    <h1 className="cursor-pointer md:text-2xl text-lg border-blue-900 border-b-2">
                      My Cause
                      <span className="font-semibold text-sm md:text-xl  px-2 text-red-500">
                        Edit
                      </span>
                    </h1>
                    <HousePlusIcon
                      className="bg-blue-500 text-white mt-2 rounded-md"
                      size={35}
                    />
                  </div>
                  <div>
                    <h1 className="cursor-pointer md:text-2xl text-lg border-blue-900 border-b-2">
                      My Skills
                      <span className="font-semibold text-sm md:text-xl px-2 text-red-500">
                        Edit
                      </span>
                    </h1>
                    <p className="text-sm text-gray-600 p-1">Basic Computer</p>
                  </div>
                </div>
                <div className="flex flex-col mt-0 md:mt-1  md:flex-col md:gap-24 gap-4">
                  <div>
                    <h1 className="cursor-pointer md:text-2xl text-lg border-blue-900 border-b-2">
                      Location
                      <span className="font-semibold text-sm md:text-xl px-2 text-red-500">
                        Edit
                      </span>
                    </h1>
                    <p className="text-sm text-gray-600 p-1">Ethiopia</p>
                  </div>
                  <div className="">
                    <h1 className="cursor-pointer md:text-2xl text-lg border-blue-900 border-b-2">
                      Account
                      <span className="font-semibold text-sm md:text-xl px-2 text-red-500">
                        Edit
                      </span>
                    </h1>
                    <p className="text-sm text-gray-600 p-1">
                      Account information{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-centerbg-green-100 py-8 md:py-24 px-4 md:px-16">
              <img
              src="/location.png"
              alt="Add Your Photo"
              className="object-cover rounded w-50 h-50"
            />
            <div className="flex flex-col p-4 gap-4">
              <Plus size={30} className="text-xl font-bold cursor-pointer" />
              <Minus size={30} className="text-xl font-bold cursor-pointer"  />
              <Fullscreen size={30} className="text-xl font-bold cursor-pointer"  />
            </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-2 py-2">
              <h1 className="flex flex-col justify-center items-center text-2xl py-4 font-bold">
                Check out your personalized{" "}
                <span className="text-blue-500 font-semibold">
                  Recommendation
                </span>
              </h1>
              <Button
                className={cn(
                  "px-12 py-6 text-xl text-white bg-blue-600 hover:bg-blue-400"
                )}
              >
                See recommendation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunter_profile;
