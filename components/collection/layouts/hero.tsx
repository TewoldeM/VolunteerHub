import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col md:flex-row items-center w-full max-w-6xl gap-4 ">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left ">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4">
            Become a Volunteer
          </h1>
          <p className="text-gray-800 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition duration-300">
            READ MORE →
          </button>
        </div>
        {/* Image Section */}
        <div className="md:w-1/2 mt-4 md:mt-0">
          <Image
            src="/landing2.jpg" // Replace with the actual path to the right part image
            alt="Volunteers with heart jar"
            width={500}
            height={300}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
