import {
  Globe,
  Globe2Icon,
  GraduationCap,
  Home,
  HousePlus,
  LucideGlobe,
  MapPinHouse,
  School,
  School2,
  WholeWord,
} from "lucide-react";
import React from "react";
import { Button } from "../../ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Experience from "../Reuseable/Experinces";

const Cliamyourorg = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full ">
        {" "}
        <Experience />
      </div>
    </main>
  );
};

export default Cliamyourorg;
// <div>
//   <div className="flex flex-col items-center justify-center gap-8 py-12">
//     <h1 className="flex justify-center items-center text-2xl font-bold   md:text-6xl s">
//       Claim your organization's profile
//     </h1>
//     <div className="flex items-center justify-center gap-8 flex-col md:flex-row">
//       <div
//         className="flex flex-col justify-center items-center gap-4
//         border border-gray-400   text-white rounded-md py-10 px-4 w-80 h-80"
//       >
//         <HousePlus size={85} className="bg-blue-400 p-2 rounded-md" />
//         <h1 className="text-4xl font-bold text-blue-300">Non-Profit</h1>
//         <p className="flex justify-center items-center font-medium text-gray-600 dark:text-gray-100">
//           Tax Exempt status pending organazations
//         </p>
//       </div>
//       <div
//         className="flex flex-col justify-center items-center gap-4
//         border border-gray-400   text-white rounded-md py-10 px-4 w-80 h-80"
//       >
//         <Home size={85} className="bg-blue-400 p-2 rounded-md" />
//         <h1 className="text-4xl font-bold text-blue-300">Gov't,hospic</h1>
//         <p className="flex justify-center items-center font-medium text-gray-600 dark:text-gray-100">
//           Goverment Organazations <br /> Hospitals and Other{" "}
//         </p>
//       </div>
//       <div
//         className="flex flex-col justify-center items-center gap-4
//         border border-gray-400 text-white rounded-md py-10 px-4 w-80 h-80"
//       >
//         <GraduationCap size={85} className="bg-blue-400 p-2 rounded-md" />
//         <h1 className="text-4xl font-bold text-blue-300 ">Schools</h1>
//         <p className="flex justify-center items-center font-medium text-gray-600 dark:text-gray-100">
//           Public and private K-12,
//           <br />
//           Public and private University
//         </p>
//       </div>
//       <div
//         className="flex flex-col justify-center items-center gap-4
//         border border-gray-400  text-white rounded-md py-10 px-4 w-80 h-80"
//       >
//         <LucideGlobe size={85} className="bg-blue-400 p-2 rounded-md" />
//         <h1 className="text-4xl font-bold text-blue-300">Non-Ethio NGO</h1>
//         <p className="flex justify-center items-center font-medium text-gray-600 dark:text-gray-100">
//           Non-Govermental Organazation-out of Ethiopia
//         </p>
//       </div>
//     </div>
//     <div className="">
//       <Link href="././././VolunteerProfile/create-organazation">
//         <Button
//           className={cn(
//             "px-12 py-8 text-2xl text-blue-100 bg-blue-500 hover:bg-blue-300 hover:text-blue-600"
//           )}
//         >
//           Cliam Your Organazation
//         </Button>
//       </Link>
//     </div>
//   </div>
// </div>
