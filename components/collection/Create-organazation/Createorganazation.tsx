import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Createorganazation = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between w-full py-12 px-6 md:px-20 bg-white rounded-lg shadow-lg">
      <div className="md:w-1/2 p-4 order-1 md:order-2">
        <div className="bg-gray-200 rounded-lg overflow-hidden">
          <Image
            src="/volunteer.webp"
            alt="Volunteers"
            className="w-full h-auto object-cover"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="md:w-1/2 px-2 flex flex-col items-center mt-0 md:mt-16 gap-4 order-2 md:order-1">
        <h1 className="text-2xl md:text-5xl font-bold text-orange-700 mb-4">
          Claim Your Organization&apos;s VoluntreeLink Profile Now
        </h1>
        <p className="text-gray-600 mb-6 text-lg md:text-xl">
          Enjoy the benefits! Join our highly engaged network -- 10k volunteers
          and 1k nonprofits -- and take advantage of the world&apos;s most
          powerful volunteer recruiting services, engagement tools, and
          best-in-class educational resources. Our platform&apos;s key features,
          including Volunteer Management, Opportunity Management, and Volunteer
          Communication, are designed to make your processes more efficient,
          your opportunities more organized, and your communication with
          volunteers more effective. This way, you can put your energy into what
          truly matters: advancing your mission.
        </p>
        <Button className="px-8 py-6 bg-orange-100 text-orange-500 hover:bg-orange-200 rounded-full font-semibold">
          ROI of VoluntreeLink
        </Button>
      </div>
    </div>
  );
};

export default Createorganazation;
