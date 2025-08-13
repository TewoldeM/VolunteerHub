import Createorganazation from "@/components/collection/Create-organazation/Createorganazation";
import YouwillNeeded from "@/components/collection/Create-organazation/YouwillNeeded";
import React from "react";

const CreateAnotherorganization = () => {
  return (
    <div className="mt-32 mb-14 flex flex-col justify-center items-center">
      <div>
        <Createorganazation />
        <YouwillNeeded />
      </div>
    </div>
  );
};

export default CreateAnotherorganization;
