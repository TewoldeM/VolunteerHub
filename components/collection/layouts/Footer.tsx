import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-32 gap-8 border-t-2 border-gray-600">
      <div className="flex flex-row gap-14 md:gap-64 items-center justify-center">
        <div className="">
          <div className="flex flex-col gap-4 ">
            <h2 className="text-xl font-bold">Company</h2>
            <h3 className="cursor-pointer  font-semibold">
              About
            </h3>
            <h3 className="cursor-pointer  font-semibold">Term</h3>
            <h3 className="cursor-pointer  font-semibold">
              Press
            </h3>
            <h3 className="cursor-pointer  font-semibold">
              Technology and parties
            </h3>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col gap-4 ">
            <h2 className="text-xl font-bold">Resource</h2>
            <h3 className="cursor-pointer  font-semibold">
              About
            </h3>
            <h3 className="cursor-pointer  font-semibold">Term</h3>
            <h3 className="cursor-pointer  font-semibold">
              Press
            </h3>
            <h3 className="cursor-pointer  font-semibold">
              Technology and parties
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center">
        <h2 className="font-bold">Follows us</h2>
        <div className="flex flex-row gap-8 ">
          <Facebook
            className="bg-blue-400 text-gray-300 rounded-md"
            size={40}
          />
          <Instagram
            className="bg-red-400 text-gray-300 rounded-md"
            size={40}
          />
          <Youtube className="bg-red-600 text-gray-300 rounded-md" size={40} />
          <Linkedin
            className="bg-blue-500 text-gray-300 rounded-md"
            size={40}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
