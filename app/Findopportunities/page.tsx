import SearchBox from "@/components/collection/Findopportunity/SearchBox";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import React from "react";

const FindOpprtunity = () => {
  return (
    <div className="h-screen">
      <div className="flex justify-center items-center flex-col gap-4">
        <h1 className="text-3xl text-green-800 dark:text-white mt-2">
          Remarkable Networks
          <Separator className="mt-4 text-green-400" />
        </h1>
        <p className="text-gray- flex flex-grow px-20 md:px-96 text-lg md:text-xl ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          explicabo natus harum ratione officiis quidem assumenda sit adipisci!
          Ipsam, molestias. Odit velit dolore fugit illo, porro beatae qui.
        </p>
        <div className="flex justify-center items-center">
          {/* <SearchBox /> */}
        </div>
      </div>

      <div className="flex justify-center items-center flex-col gap-16 mt-72 ">
        <Button
          className={cn(
            "px-80 py-8 text-2xlborder-emerald-500 bg-emerald-500 text-white hover:bg-emerald-600 dark:hover:bg-emerald-700 hover:text-white text-xl"
          )}
        >
          Volunteer Found Adiss Abeba
        </Button>

        <h1 className="text-5xl text-gray-700 dark:text-white">
          Find The Best Volunteer Opportunitys Near <br /> Adiss Ababa
        </h1>

        <div className="flex justify-center items-center"></div>
      </div>
    </div>
  );
};

export default FindOpprtunity;
