"use client";
import { ArrowUp, ArrowDown, HeartHandshake } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const YouWillNeeded = () => {
  const [showText, setShowText] = useState({ first: false, second: false });

  const toggleText = (index: "first" | "second") => {
    setShowText((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <h1 className="text-4xl p-2 text-orange-400 mb-4">You Will Needed</h1>
      <div className="flex flex-col md:flex-row items-center justify-between w-full md:px-20 md:py-20">
        <div className="md:w-2/3 gap-20 max-w-2xl">
          <ul className="flex flex-col text-start justify-start text-xl mt-4 gap-4">
            <li className="flex flex-col p-8 mb-2 bg-orange-100 rounded-lg hover:bg-orange-300 transition-all duration-300 ease-in-out hover:scale-105">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 p-2">
                  <HeartHandshake size={24} className="text-orange-500" />
                  Have your mission statement and organization description handy
                </span>
                {showText.first ? (
                  <ArrowUp
                    size={24}
                    className="text-orange-500 cursor-pointer"
                    onClick={() => toggleText("first")}
                  />
                ) : (
                  <ArrowDown
                    size={24}
                    className="text-orange-500 cursor-pointer"
                    onClick={() => toggleText("first")}
                  />
                )}
              </div>
              {showText.first && (
                <p className="mt-2 text-gray-700">
                  Additional details: Please ensure your mission statement is
                  concise and reflects your organization's goals.
                </p>
              )}
            </li>
            <li className="flex flex-col p-8 bg-orange-100 rounded-lg hover:bg-orange-300 transition-all duration-300 ease-in-out hover:scale-105">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 p-2">
                  <HeartHandshake size={24} className="text-orange-500" />
                  If you are a non-profit (501(c)), be sure to have your EIN
                  ready
                </span>
                {showText.second ? (
                  <ArrowUp
                    size={24}
                    className="text-orange-500 cursor-pointer"
                    onClick={() => toggleText("second")}
                  />
                ) : (
                  <ArrowDown
                    size={24}
                    className="text-orange-500 cursor-pointer"
                    onClick={() => toggleText("second")}
                  />
                )}
              </div>
              {showText.second && (
                <p className="mt-2 text-gray-700">
                  Additional details: Your EIN (Employer Identification Number)
                  is required for verification purposes.
                </p>
              )}
            </li>
          </ul>
        </div>
        <div className="md:w-1/3 flex justify-center items-center border-2 border-orange-300 py-8 mt-4 md:mt-0">
          <Image
            src="/istockphoto-1437885539-612x612.webp"
            alt="Organization Illustration"
            className="w-full max-w-xs rounded-full"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default YouWillNeeded;
