import React from "react";
import { type ClassValue } from "clsx";

const AboutVolunteerMatch = () => {
  return (
    <div className="flex justify-center items-center p-20 gap-4 flex-col md:flex-row">
      <div className="bg-green-300 w-1/3 h-80 rounded-full ">
        <img
          src="/OIP (2).jpg"
          alt="Add Your Photo"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="flex justify-center items-center gap-6 flex-col">
        <h1 className="text-4xl font-semibold text-gray-800">VolunteerMatch transforms volunteer recruiting</h1>
        <p className="flex justify-center items-center w-2/3 font-medium">
          VolunteerMatch helps you effect positive change.you get volunteers
          matched with the right cause at the right moment. you get the a larger
          number of highly qulified volunteers because you are matched withe
          pepole who are both passionate about and committed to your type Class.{" "}
          <br />
          And because volunteers are often interested in contributing thier
          moneyas well as thier time, we make it easy for them to donate to your
          cause. <br />
          Our software solution automates workflow and simplifies
          repetitive tasks such as posting and reposting volunteer
          opportunities. It's fast, easy-to-use and effective
        </p>
      </div>
    </div>
  );
};

export default AboutVolunteerMatch;
