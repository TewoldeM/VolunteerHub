import SearchBox from "@/components/collection/Findopportunity/SearchBox";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import React from "react";

const DefaultHomepageforSignedup = () => {
  return (
    <div className="h-screen">
      <div className="flex justify-center items-center flex-col gap-4">
        <h1 className="text-3xl text-gray-800 dark:text-white mt-2">
          Remarkable Networks
          <Separator className="mt-4 " />
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
            "px-80 py-8 text-2xl bg-gray-300 dark:bg-gray-800 dark:text-gray-50  text-gray-700 hover:bg-gray-400 hover:dark:bg-gray-900 border-1 border-gray-400 "
          )}
        >
          Volunteer Found Adiss Abeba
        </Button>

        <h1 className="text-6xl text-gray-700 dark:text-white">
          Find The Best Volunteer Opportunitys Near <br /> Adiss Ababa
        </h1>

        <div className="flex justify-center items-center"></div>
      </div>
    </div>
  );
};

export default DefaultHomepageforSignedup;
