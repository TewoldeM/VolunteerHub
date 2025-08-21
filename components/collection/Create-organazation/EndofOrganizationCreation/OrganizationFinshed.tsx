"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function WelcomePage() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/create-opportunity");
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-12 md:mt-24">
      <div className="max-w-8xl w-full md:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 text-center md:px-20 md:mt-8 ">
            <h1 className="text-xl text-orange-600 mb-6">
              Welcome to the VolunteerLink network.
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-orange-700 mb-6">
              You’ve unlocked a welcome gift - 30 days free Pro Membership!
            </h2>
            <p className="text-gray-700 mb-6 md:text-lg">
              Your organization is pending approval. Confirmation or a request
              for additional information will be sent within 72 hours. Get
              started now by creating your first volunteer opportunity, which
              can be published once your organization is approved.
            </p>
            <Button
              onClick={handleGetStarted}
              className="bg-orange-600 text-white px-6 py-6 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              Create Opportunity
            </Button>
          </div>
          <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg mt-8 md:mt-0">
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">
              Pro Membership Benefits
            </h2>
            <p className="text-orange-600 mb-4">
              Save time and repost opportunities with one click. Streamline your
              communication and automatically send custom greetings,
              questionnaires and documents to potential volunteers. Request
              donations.
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Refresh your opportunities with One Click Reposting</li>
              <li>
                Coordinate and communicate easily with volunteer engagement
                tools
              </li>
              <li>
                Boost recruitment with access to exclusive marketing
                opportunities
              </li>
              <li>Grow your skillset with access to Pro resource library</li>
              <li>
                Ensure your customer service tickets are prioritized with Pro
                support
              </li>
              <li>Reach more zip codes with Multi-zip discount</li>
              <li>
                Showcase your opportunities on your website with embeddable code
              </li>
              <li>Store more photos to enhance your opportunities</li>
              <li>
                Convert volunteers to donors with a donation button for 50+
                organizations
              </li>
              <li>
                Save time by bringing interested volunteers to your external
                registration link with Direct Connect
              </li>
            </ul>
            <p className="text-gray-500 italic mb-4">
              Membership includes this and more
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
