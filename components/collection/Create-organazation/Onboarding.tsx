import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-2 md:p-12 bg-orange-50 dark:bg-black min-h-screen mx-12 mt-8">
      {/* Left Section - Text */}
      <div className="md:w-1/2 text-left space-y-6">
        <p className="text-sm text-gray-500 dark:text-white">
          From Start to Success:
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-orange-700 dark:text-white">
          Your Onboarding and Training Journey with VolunteerLink
        </h1>
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-200">
              Onboarding
            </h2>
            <p className="text-gray-600 dark:text-white max-w-lg">
              Onboarding ensures a seamless transition, equipping you with the
              knowledge and tools to effectively use VolunteerLink.
            </p>
            <a href="#" className="text-orange-600 hover:underline">
              Learn more →
            </a>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-200">
              Training
            </h2>
            <p className="text-gray-600 dark:text-white max-w-lg">
              For all plans, we provide in-depth, personalized training sessions
              to help set up admins up for success. For clients needing
              additional support after training, we offer ongoing support and a
              comprehensive knowledge base that is accessible at any time.
            </p>
            <a href="#" className="text-orange-600 hover:underline">
              Learn more →
            </a>
          </div>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="md:w-1/2 mt-6 md:mt-0 relative">
        <div className="relative w-full h-96 rounded-lg overflow-hidden">
          {/* Image Placeholder - Replace with actual src if available */}
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
            <span className="text-gray-500">Image Placeholder</span>
            <Image
              src="/VolunteerHub Onboarding1.webp"
              alt="Background of volunteers helping"
              fill
              className="object-cover brightness-75"
              priority
            />
            //VolunteerHub Onboarding1.webp
          </div>
          {/* Orange Shape Background */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-orange-400 rounded-full opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>
    </div>
  );
}
