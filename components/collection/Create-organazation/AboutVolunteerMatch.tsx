import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";


const AboutVolunteerMatch = () => {
  return (
    <div className="flex justify-center items-center flex-col md:flex-row py-12 md:gap-20 md:px-16">
      <div className="bg-green-300 md:w-1/3 h-80 rounded-full px-2 ml-28 ">
        <img
          src="/OIP (2).jpg"
          alt="Add Your Photo"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="flex justify-center items-center gap-12 flex-col ">
        <h1 className="md:text-4xl font-bold text-gray-800 dark:text-gray-100 text-2xl px-2 mt-4">
          In transforming volunteer recruiting
        </h1>
        <div className="felx flex-col justify-center items-center ">
          <p className="flex justify-center items-center  font-medium text-gray-600 dark:text-gray-100">
            VolunteerHub helps you effect positive change.you get volunteers
            matched with the right cause at the right moment. you get the a
            larger number of highly qulified volunteers because you are matched
            withe pepole who are both passionate about and committed to your
            type Class.
            <br />
            And because volunteers are often interested in contributing thier
            moneyas well as thier time, we make it easy for them to donate to
            your cause. <br />
            Our software solution automates workflow and simplifies repetitive
            tasks such as posting and reposting volunteer opportunities. It's
            fast, easy-to-use and effective
          </p>
          <div className="md:ml-96 ml-20 mt-4">
            <Button className={cn("p-6")}>
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutVolunteerMatch;
