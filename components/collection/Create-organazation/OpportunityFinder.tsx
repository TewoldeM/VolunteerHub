import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative mx-12 mt-6 h-[400px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/istockphoto-1437885539-612x612.webp"
        alt="Background of volunteers helping"
        fill
        className="object-cover brightness-75"
        priority
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white font-semibold px-4">
        <div className="w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-32 text-center">
          {/* Increased padding: px-8 (small screens), md:px-16 (medium), lg:px-32 (large) */}
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
            VolunteerLink
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl font-light mb-6 max-w-3xl mx-auto">
            VolunteerLink is the largest network in the nonprofit world, with
            the most volunteers, nonprofits and opportunities to make a
            difference.
          </p>

          {/* Search Bar */}
          <div className="flex flex-col md:flex-row items-center bg-white rounded-md shadow-md overflow-hidden w-full max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search City or Zip Code"
              defaultValue="Addis Ababa, Ethiopia"
              className="flex-grow px-4 py-3 text-gray-700 outline-none"
            />
            <span className="px-2 text-green-500">✓</span>
            <button className="bg-orange-500 text-white px-6 py-3 font-semibold hover:bg-orange-600 transition-colors">
              Find Opportunities &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
