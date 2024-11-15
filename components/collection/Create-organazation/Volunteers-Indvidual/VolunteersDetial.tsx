"use client"
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Banknote, HousePlusIcon, Star } from "lucide-react";
import React, { useState } from "react";

const VolunteersDetial = () => {
  const [Mobile,setMobile]= useState(false);
  return (
    <div className="flex justify-center items-center py-8">
      <div className="flex flex-col justify-center items-center gap-4 bg-gray-300 p-12  mt-20 w-full">
        <div className="flex flex-row gap-8 -mt-28 px-6 py-2">
          <Button
            className={cn(
              "md:px-12 py-6  text-lg p-2 md:text-xl text-gray-100 bg-blue-600 hover:bg-blue-400 hover:border border-gray-600  mb-6"
            )}
          >
            Recommendation
          </Button>
          <Button
            className={cn(
              "md:px-12 py-6  text-lg p-2 md:text-xl text-gray-100 bg-blue-600 hover:bg-blue-400 hover:border border-gray-600  mb-6"
            )}
          >
            Voluntry History
          </Button>
          <Button
            className={cn(
              "md:px-12 py-6  text-lg p-2 md:text-xl text-gray-100 bg-blue-600 hover:bg-blue-400 hover:border border-gray-600  mb-6"
            )}
          >
           <Star />
          </Button>
        </div>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex flex-col bg-gray-200 gap-4 p-6 shadow-xl">
              <h1 className="text-gray-600 text-xl border-blue-300 border-b-4 mb-10 font-semibold p-2">
                Web and Technology Assistant
              </h1>

              <h2 className="text-gray-600 text-3xl mb-6 border-blue-300 border-b-4 font-semibold p-2">
                Crossing party lines INC
              </h2>
              <Separator />
              <div className="flex items-center justify-center gap-10 flex-row shadow-md p-4 bg-slate-300">
                <HousePlusIcon size={80} className="bg-blue-400 text-gray-300 rounded-md px-2" />
                <p className="text-gray-700 text-lg">
                  Website project
                  <br /> manu Basic Computer Skills
                  <br /> Database Adminstrative <br /> Google Apps
                </p>
              </div>
              <div className="flex justify-center items-center gap-4">
                <Star size={45} className="text-yellow-500 cursor-pointer" />
                <p className="text-2xl text-blue-600">Add to favorite</p>
              </div>
            </div>
            <div className="flex flex-col bg-gray-200 gap-4 p-6 shadow-xl">
              <h1 className="text-gray-600 text-xl border-blue-300 border-b-4 mb-10 font-semibold p-2">
                Web and Technology Assistant
              </h1>

              <h2 className="text-gray-600 text-3xl mb-6 border-blue-300 border-b-4 font-semibold p-2">
                Crossing party lines INC
              </h2>
              <Separator />
              <div className="flex items-center justify-center gap-10 flex-row shadow-md p-4 bg-slate-300">
                <HousePlusIcon size={80} className="bg-blue-400 text-gray-300 rounded-md px-2" />
                <p className="text-gray-700 text-lg">
                  Website project
                  <br /> manu Basic Computer Skills
                  <br /> Database Adminstrative <br /> Google Apps
                </p>
              </div>
              <div className="flex justify-center items-center gap-4">
                <Star size={45} className="text-yellow-500 cursor-pointer" />
                <p className="text-2xl text-blue-600">Add to favorite</p>
              </div>
            </div>
            <div className="flex flex-col bg-gray-200 gap-4 p-6 shadow-xl">
              <h1 className="text-gray-600 text-xl border-blue-300 border-b-4 mb-10 font-semibold p-2">
                Web and Technology Assistant
              </h1>

              <h2 className="text-gray-600 text-3xl mb-6 border-blue-300 border-b-4 font-semibold p-2">
                Crossing party lines INC
              </h2>
              <Separator />
              <div className="flex items-center justify-center gap-10 flex-row shadow-md p-4 bg-slate-300">
                <HousePlusIcon size={80} className="bg-blue-400 text-gray-300 rounded-md px-2" />
                <p className="text-gray-700 text-lg">
                  Website project
                  <br /> manu Basic Computer Skills
                  <br /> Database Adminstrative <br /> Google Apps
                </p>
              </div>
              <div className="flex justify-center items-center gap-4">
                <Star size={45} className="text-yellow-500 cursor-pointer " />
                <p className="text-2xl text-blue-600">Add to favorite</p>
              </div>
            </div>
            <div className="flex flex-col bg-gray-200 gap-4 p-6 shadow-xl">
              <h1 className="text-gray-600 text-xl border-blue-300 border-b-4 mb-10 font-semibold p-2">
                Web and Technology Assistant
              </h1>

              <h2 className="text-gray-600 text-3xl mb-6 border-blue-300 border-b-4 font-semibold p-2">
                Crossing party lines INC
              </h2>
              <Separator />
              <div className="flex items-center justify-center gap-10 flex-row shadow-md p-4 bg-slate-300">
                <HousePlusIcon size={80} className="bg-blue-400 text-gray-300 rounded-md px-2" />
                <p className="text-gray-700 text-lg">
                  Website project
                  <br /> manu Basic Computer Skills
                  <br /> Database Adminstrative <br /> Google Apps
                </p>
              </div>
              <div className="flex justify-center items-center gap-4">
                <Star size={45} className="text-yellow-500 cursor-pointer " />
                <p className="text-2xl text-blue-600">Add to favorite</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex flex-col bg-gray-200 gap-4 p-6 shadow-xl">
              <h1 className="text-gray-600 text-xl border-blue-300 border-b-4 mb-10 font-semibold p-2">
                Web and Technology Assistant
              </h1>

              <h2 className="text-gray-600 text-3xl mb-6 border-blue-300 border-b-4 font-semibold p-2">
                Crossing party lines INC
              </h2>
              <Separator />
              <div className="flex items-center justify-center gap-10 flex-row shadow-md p-4 bg-slate-300">
                <HousePlusIcon size={80} className="bg-blue-400 text-gray-300 rounded-md px-2" />
                <p className="text-gray-700 text-lg">
                  Website project
                  <br /> manu Basic Computer Skills
                  <br /> Database Adminstrative <br /> Google Apps
                </p>
              </div>
              <div className="flex justify-center items-center gap-4">
                <Star size={45} className="text-yellow-500 " />
                <p className="text-2xl text-blue-600">Add to favorite</p>
              </div>
            </div>
            <div className="flex flex-col bg-gray-200 gap-4 p-6 shadow-xl">
              <h1 className="text-gray-600 text-xl border-blue-300 border-b-4 mb-10 font-semibold p-2">
                Web and Technology Assistant
              </h1>

              <h2 className="text-gray-600 text-3xl mb-6 border-blue-300 border-b-4 font-semibold p-2">
                Crossing party lines INC
              </h2>
              <Separator />
              <div className="flex items-center justify-center gap-10 flex-row shadow-md p-4 bg-slate-300">
                <HousePlusIcon size={80} className="bg-blue-400 text-gray-300 rounded-md px-2" />
                <p className="text-gray-700 text-lg">
                  Website project
                  <br /> manu Basic Computer Skills
                  <br /> Database Adminstrative <br /> Google Apps
                </p>
              </div>
              <div className="flex justify-center items-center gap-4">
                <Star size={45} className="text-yellow-500 cursor-pointer " />
                <p className="text-2xl text-blue-600">Add to favorite</p>
              </div>
            </div>
            <div className="flex flex-col bg-gray-200 gap-4 p-6 shadow-xl">
              <h1 className="text-gray-600 text-xl border-blue-300 border-b-4 mb-10 font-semibold p-2">
                Web and Technology Assistant
              </h1>

              <h2 className="text-gray-600 text-3xl mb-6 border-blue-300 border-b-4 font-semibold p-2">
                Crossing party lines INC
              </h2>
              <Separator />
              <div className="flex items-center justify-center gap-10 flex-row shadow-md p-4 bg-slate-300">
                <HousePlusIcon size={80} className="bg-blue-400 text-gray-300 rounded-md px-2" />
                <p className="text-gray-700 text-lg">
                  Website project
                  <br /> manu Basic Computer Skills
                  <br /> Database Adminstrative <br /> Google Apps
                </p>
              </div>
              <div className="flex justify-center items-center gap-4">
                <Star size={45} className="text-yellow-500 cursor-pointer" />
                <p className="text-2xl text-blue-600">Add to favorite</p>
              </div>
            </div>
            <div className="flex flex-col bg-gray-200 gap-4 p-6 shadow-xl">
              <h1 className="text-gray-600 text-xl border-blue-300 border-b-4 mb-10 font-semibold p-2">
                Web and Technology Assistant
              </h1>

              <h2 className="text-gray-600 text-3xl mb-6 border-blue-300 border-b-4 font-semibold p-2">
                Crossing party lines INC
              </h2>
              <Separator />
              <div className="flex items-center justify-center gap-10 flex-row shadow-md p-4 bg-slate-300">
                <HousePlusIcon size={80} className="bg-blue-400 text-gray-300 rounded-md px-2" />
                <p className="text-gray-700 text-lg">
                  Website project
                  <br /> manu Basic Computer Skills
                  <br /> Database Adminstrative <br /> Google Apps
                </p>
              </div>
              <div className="flex justify-center items-center gap-4 cursor-pointer">
                <Star size={45} className="text-yellow-500 " />
                <p className="text-2xl text-blue-600">Add to favorite</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteersDetial;
