
import { Button } from "@/components/ui/button";
import { HeroHighlight,Highlight } from "@/components/ui/hero-highlight";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
;
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "@/components/collection/Reuseable/MagicButton"
import { User } from "@prisma/client";
import Image from "next/image";

interface HeroProps {
  user: User | null; // Define a more specific type based on your user data
}

const Hero: React.FC<HeroProps> = ({ user }) => {
return (
  <div className="min-h-screen bg-black grid grid-cols-1 place-items-center relative overflow-hidden">
    {/* Join Us Button */}
    <button className="absolute top-6 left-6 bg-gray-800 text-white px-4 py-2 rounded-full flex items-center space-x-2">
      <span className="w-4 h-4 bg-orange-500 rounded-full"></span>
      <span>Join us</span>
    </button>

    {/* Main Heading */}
    <div className="space-y-4 -ml-96">
      <h1 className="text-6xl md:text-8xl font-bold text-white">
        Let&apos;s come
        <br />
        <span className="text-orange-500">Be Part of</span>
        <br />
        Changes
      </h1>

      {/* Buttons */}
      <div className="flex justify-center items-center space-x-4 mt-6">
        <button className="bg-orange-500 text-white px-6 py-3 rounded-lg">
          Get Started
        </button>
        <a href="#" className="text-white underline">
          Explore more →
        </a>
      </div>
    </div>

    {/* Image and Text Boxes */}
    <div className="absolute top-1/2 right-20 transform -translate-y-1/2 space-y-6 border-2 border-gray-900 p-32">
      {/* Image Box */}
      <div className="bg-orange-500 rounded-lg p-2 flex items-center space-x-4">
        <Image
          src="/Screenshot 2025-08-15 172935.jpg"
          alt="Background of volunteers helping"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div>
          <p className="text-sm text-white">Start with small</p>
        </div>
      </div>

      {/* Stats Box */}
      <div className="bg-green-500 rounded-lg p-2 flex items-center space-x-4">
        <Image
          src="/Screenshot 2025-08-15 172935.jpg"
          alt="Background of volunteers helping"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div>
          <p className="text-sm text-white">29k+ Together We Are Strong</p>
        </div>
      </div>

      {/* Globe Box */}
      <div className="bg-orange-500 rounded-lg p-2 flex items-center space-x-4">
        <span className="w-6 h-6 bg-gray-300 rounded-full"></span>
        <div>
          <p className="text-sm text-white">Save The world</p>
        </div>
      </div>

      {/* Heart Box */}
      <div className="bg-green-500 rounded-lg p-2 flex items-center space-x-4">
        <span className="w-6 h-6 bg-orange-500 rounded-full"></span>
        <div>
          <p className="text-sm text-white">&nbsp;</p>
        </div>
      </div>
    </div>
  </div>
);
};
// VolunteerMatch: The largest nonprofit network connecting volunteers with endless opportunities to make a difference

export default Hero;
