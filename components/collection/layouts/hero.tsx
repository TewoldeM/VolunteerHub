// components/collection/hero.tsx
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface HeroProps {
  user: any; // Define a more specific type based on your user data
}

const Hero: React.FC<HeroProps> = ({ user }) => {
  return (
    <div className="hero">
      {user ? (
        <h1 className="text-muted-foreground text-2xl text-purple-400 p-4">
          Welcome back To VolunteerHub!
        </h1>
      ) : (
        <h1>Welcome to our platform!</h1>
      )}
      <div className="flex flex-col justify-center items-center h-screen bg-red-300">
        <div className="bg-gray-100 h-full w-full flex flex-col gap-8 justify-start px-2 md:px-24 py-10">
          <div className="flex justify-center items-center mb-4">
            <input
              type="search"
              placeholder="Search by postalcode..."
              className="w-1/2 h-10 pl-10 p-6 text-sm text-gray-700 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600"
            />

            <Button
              type="button"
              className={cn(
                "rounded-none w-1/4 h-10 p-6 text-lg text-white bg-blue-500 hover:bg-blue-700 rounded-r-lg border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
              )}
            >
              Search
            </Button>
          </div>
          <img
            src="/image7.png"
            alt="Home page image"
            className="w-full h-full object-cover rounded shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
