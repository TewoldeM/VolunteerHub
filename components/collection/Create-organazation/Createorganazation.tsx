import { ChevronRightIcon } from "lucide-react";
import React from "react";
const Createorganazation = () => {

  
  return (
    <div className="flex flex-col gap-10 md:flex-row items-center justify-center md:gap-80 px-6 mb-12">
      <div className="flex flex-col gap-16">
        <div className="flex gap-2  text-xl">
          <div className="cursor-pointer hover:text-blue-400">
            Recruit Volunteers{" "}
          </div>
          <span>
            {" "}
            <ChevronRightIcon />{" "}
          </span>
          <div className={`cursor-pointer hover:text-blue-400`}>
            Claim Your Nonprofit
          </div>
        </div>
        <div className="flex gap-4 flex-col">
          <h1 className="text-4xl ">
            Cliam Your organzation's VoluntreeMatch Profile now
          </h1>
          <p className="text-xl ">
            Enjoy the benefits! Join our highly engaged network -- 10k
            volunteers and 1k nonprofit-- and
            <br /> takes advantage of the world's most powerful volunteer
            recruiting services,
            <br /> engagement tools, and best-in-class educational resources
          </p>
        </div>
      </div>
      <div className=" w-1/3 h-80 rounded-full py-4">
        <img
          src="/cyo-family-engaging-in-volunteering.png"
          alt="Add Your Photo"
          className="h-full object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default Createorganazation;
