import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12 min-h-screen  mt-4 mb-4 mx-12">
      {/* Left Section - Text and Buttons */}
      <div className="md:w-1/2 text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-700 dark:text-white">
          Make Volunteer Management a Breeze
        </h1>
        <p className="text-lg md:text-xl dark:text-white text-gray-600 max-w-lg">
          Our proven, intuitive volunteer management software is designed to
          integrate seamlessly with your workflow. This allows you to automate
          administrative tasks and dedicate more time towards your mission.
        </p>
        <div className="flex space-x-4">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors">
            Let's Connect
          </button>
          <button className="bg-blue-100 text-blue-900 px-6 py-3 rounded-full hover:bg-blue-200 transition-colors">
            See our Solutions
          </button>
        </div>
      </div>

      {/* Right Section - Video */}
      <div className="md:w-1/2 mt-6 md:mt-0">
        <div className="relative w-full h-64 rounded-lg overflow-hidden">
          <video
            className="w-full h-full object-cover rounded-lg"
            controls
            src="/What is volunteering_.mp4"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

//What is volunteering_.mp4
