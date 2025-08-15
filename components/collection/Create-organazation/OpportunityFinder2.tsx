import {
  Bird,
  Music,
  User,
  Users,
  Mic,
  GraduationCap,
  HeartPulse,
  Glasses,
  MoreHorizontal,
} from "lucide-react";

export default function Home() {
  const categories = [
    { icon: Mic, label: "Advocacy & Human Rights", count: "(0)" },
    { icon: Bird, label: "Animals", count: "(0)" },
    { icon: Music, label: "Arts & Culture", count: "(0)" },
    { icon: User, label: "Children & Youth", count: "(0)" },
    { icon: Users, label: "Community", count: "(0)" },
    { icon: Mic, label: "Computers & Technology", count: "(0)" },
    { icon: GraduationCap, label: "Education & Literacy", count: "(0)" },
    { icon: HeartPulse, label: "Health & Medicine", count: "(0)" },
    { icon: Glasses, label: "Seniors", count: "(0)" },
    { icon: MoreHorizontal, label: "More", count: "(0)" },
  ];

  const newOpportunities = [
    {
      id: 1,
      title: "Volunteer AI Software Developer (Remote)",
      org: "with MATCHINGDONORS.COM",
    },
    {
      id: 2,
      title: "Volunteer Real Estate Agent",
      org: "with MATCHINGDONORS.COM",
    },
    {
      id: 3,
      title:
        "Online researchers volunteers help for elders to find information...",
      org: "with CARING CRAFTY HANDS LS",
    },
    {
      id: 4,
      title: "New Donor Acquisition Specialists (USA Only)",
      org: "with YOUR SERVICE DOG INC",
    },
  ];

  const upcomingOpportunities = [
    {
      id: 1,
      title: "Volunteer Orientation - Powered by Texas Good Deeds Project...",
      org: "with THE HAPPY PET PROJECT",
    },
    {
      id: 2,
      title: "Attend a Virtual CASA 101 Informational Session!",
      org: "with CASA OF ADAMS AND BROOMFIELD COUNTIES",
    },
    {
      id: 3,
      title:
        "Become a Special Education Decision Maker - Online Orientation...",
      org: "with RECRUITMENT TRAINING AND SUPPORT CENTER (RTSC) FOR SPECIAL...",
    },
    {
      id: 4,
      title:
        "Event Speaker Scheduler for 7th annual National Domestic Violence...",
      org: "with FFT HELPING OTHERS",
    },
  ];

  const popularOpportunities = [
    {
      id: 1,
      title: "Need community service hours fast?",
      org: "with HANDMAIDENS MINISTRIES INC",
    },
    {
      id: 2,
      title: "Earn community service hours - in person or virtually!",
      org: "with SECOND ACTS",
    },
    {
      id: 3,
      title: "GIVING VIRTUAL VOLUNTEERS NEEDED",
      org: "with SOUTH VALLEY HOSPICE",
    },
    {
      id: 4,
      title:
        "Seeking One Experienced MERN Stack (React.js / MongoDB) Full-stack ...",
      org: "with ONE COMMUNITY",
    },
  ];

  return (
    <div className="min-h-screen bg-orange-50 dark:bg-gray-950 p-4 sm:p-6 md:p-8 lg:p-12">
      {/* Header */}
      <div className="bg-orange-500 text-white text-center py-4 rounded-lg mb-6">
        <h2 className="text-xl sm:text-2xl font-bold">
          VolunteerLink Addis Ababa
        </h2>
      </div>

      {/* Main Title and Categories */}
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-900">
          Find The Best Volunteer Opportunities
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-orange-700 mt-2">
          Near Addis Ababa
        </h2>
      </div>


      {/* Opportunities Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* New Volunteer Opportunities */}
        <div className="md:col-span-1">
          <h3 className="text-xl font-semibold text-orange-900 mb-4">
            New Volunteer Opportunities Near Addis Ababa
          </h3>
          <div className="space-y-4">
            {newOpportunities.map((opp) => (
              <div
                key={opp.id}
                className="bg-orange-100 p-4 rounded-lg shadow-md"
              >
                <p className="text-orange-900">{opp.title}</p>
                <p className="text-sm text-orange-700">{opp.org}</p>
              </div>
            ))}
          </div>
          <a
            href="#"
            className="text-orange-600 hover:underline mt-4 inline-block"
          >
            See All
          </a>
        </div>

        {/* Upcoming Volunteer Opportunities */}
        <div className="md:col-span-1">
          <h3 className="text-xl font-semibold text-orange-900 mb-4">
            Upcoming Volunteer Opportunities Near Addis Ababa
          </h3>
          <div className="space-y-4">
            {upcomingOpportunities.map((opp) => (
              <div
                key={opp.id}
                className="bg-orange-100 p-4 rounded-lg shadow-md"
              >
                <p className="text-orange-900">{opp.title}</p>
                <p className="text-sm text-orange-700">{opp.org}</p>
              </div>
            ))}
          </div>
          <a
            href="#"
            className="text-orange-600 hover:underline mt-4 inline-block"
          >
            See All
          </a>
        </div>

        {/* Popular Volunteer Opportunities */}
        <div className="md:col-span-1">
          <h3 className="text-xl font-semibold text-orange-900 mb-4">
            Popular Volunteer Opportunities Near Addis Ababa
          </h3>
          <div className="space-y-4">
            {popularOpportunities.map((opp) => (
              <div
                key={opp.id}
                className="bg-orange-100 p-4 rounded-lg shadow-md"
              >
                <p className="text-orange-900">{opp.title}</p>
                <p className="text-sm text-orange-700">{opp.org}</p>
              </div>
            ))}
          </div>
          <a
            href="#"
            className="text-orange-600 hover:underline mt-4 inline-block"
          >
            See All
          </a>
        </div>
      </div>
    </div>
  );
}
