import React from "react";
import { workExperience } from "@/lib/Data";
import { Card } from "@/components/ui/card";

const Experience = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="font-bold text-4xl md:text-5xl text-center">
        <span className="text-purple">Claim your organization's profile</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10 ">
        {workExperience.map((card) => (
          <Card
            key={card.id}
            className="flex-1 border-neutral-200 dark:border-slate-800 dark:bg-black "
          >
            <div className="flex flex-col lg:items-center p-5 gap-2 ">
              <div className="flex justify-start items-center gap-4 ">
                <img
                  src={card.thumbnail}
                  alt={card.thumbnail}
                  className="lg:w-20 md:w-12 w-12"
                />
                <h1 className="text-start text-xl md:text-2xl font-bold  text-gray-800 dark:text-gray-50">
                  {card.title}
                </h1>
              </div>
              <div className="lg:ms-5">
                <p className="text-start text-white-100 mt-3 font-semibold  text-gray-700 dark:text-gray-50">
                  {card.desc}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Experience;
