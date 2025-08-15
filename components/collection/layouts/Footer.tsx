import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Youtube } from "lucide-react";

const navGroups = [
  { label: "For Volunteers", link: "/volunteers" },
  { label: "For Organizations", link: "/organizations" },
  { label: "Resources", link: "/resources" },
  { label: "About", link: "/about" },
  { label: "Support", link: "/support" },
  { label: "Contact", link: "/contact" },
];

const Home: React.FC = () => {
  return (
    <div className="mx-2">
      <div className="min-h-screen bg-white flex flex-col items-center gap-44">
        {/* Header Section */}
        <header className="w-full mt-40 bg-gradient-to-r from-orange-600 to-orange-400 text-white p-6 rounded-b-lg flex items-center justify-between">
          <div className="flex-1">
            <h1 className="text-4xl font-bold">
              Contact Us for Legal Assistance
            </h1>
            <p className="text-lg mt-2">
              Experienced volunteers ready to fight for your rights
            </p>
            <div className="mt-4 space-x-4">
              <button className="bg-black text-white px-4 py-2 rounded-full">
                Our areas of Law
              </button>
              <a href="#" className="text-white underline">
                New successes →
              </a>
            </div>
          </div>
          <div className="relative w-32 h-32">
            {" "}
            {/* Constrain the image container */}
            <Image
              src="/VolunteerHub Onboarding1.webp"
              alt="Background of volunteers helping"
              width={200} // Explicit width
              height={600} // Explicit height
              className="brightness-75 object-cover rounded-lg" // Optional: rounded corners
            />
          </div>
        </header>

        {/* Footer Section */}
        <footer className="w-full px-6 bg-white text-gray-600 flex justify-between flex-col md:flex-row">
          <div>
            <h3 className="text-xl font-bold text-orange-600">VolunteerLink</h3>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-orange-600">
                <Facebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-600">
                <Instagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-600">
                X
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-600">
                <Youtube />
              </a>
            </div>
            <div className="mt-4 text-sm flex flex-col gap-4">
              <a href="#" className="mr-4">
                Privacy Policy
              </a>
              <a href="#" className="mr-4">
                Terms of Service
              </a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
          {/* Navigation Section */}
          <div className="w-full py-4 bg-white flex justify-center space-x-20">
            <div className="flex flex-col space-y-4">
              {navGroups.slice(0, 3).map((group, index) => (
                <a
                  key={index}
                  href={group.link}
                  className="text-gray-600 hover:text-orange-600 text-lg font-medium"
                >
                  {group.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col space-y-4">
              {navGroups.slice(3).map((group, index) => (
                <a
                  key={index}
                  href={group.link}
                  className="text-gray-600 hover:text-orange-600 text-lg font-medium"
                >
                  {group.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Subscribe</h4>
            <p className="mt-2">Join our community to receive updates</p>
            <div className="mt-4 flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-l-md w-full border border-gray-300"
              />
              <button className="bg-orange-600 text-white px-4 py-2 rounded-md">
                Subscribe
              </button>
            </div>
            <p className="text-xs mt-2 text-gray-500">
              By subscribing, you agree to our Privacy Policy
            </p>
          </div>
        </footer>
      </div>
      <p className="flex justify-center items-center text-lg mb-10">
        © 2025 VolunteerLink. All rights reserved
      </p>
    </div>
  );
};

export default Home;
