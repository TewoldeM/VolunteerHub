import {
  Users,
  Calendar,
  Clock,
  Database,
  Award,
  BarChart2,
} from "lucide-react";

export default function VolunterServices() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-50 dark:bg-gray-950 p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="flex">
        <h1 className="font-bold mb-8 text-4xl text-orange-400">Services</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full">
        {/* Volunteer Recruitment */}
        <div className="bg-orange-100 rounded-lg p-6 text-center shadow-md">
          <div className="flex justify-center mb-4">
            <div className="bg-orange-500 rounded-full p-3">
              <Users size={24} color="white" />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-orange-900 mb-2">
            Volunteer Recruitment
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            VolunteerHub can enhance your organization’s volunteer recruitment
            process through branded event landing pages, email and text
            communications, volunteer self-registration from any device, and
            automated record management.
          </p>
          <a href="#" className="text-orange-600 hover:underline text-sm">
            Learn more →
          </a>
        </div>

        {/* Volunteer Scheduling */}
        <div className="bg-orange-100 rounded-lg p-6 text-center shadow-md">
          <div className="flex justify-center mb-4">
            <div className="bg-orange-500 rounded-full p-3">
              <Calendar size={24} color="white" />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-orange-900 mb-2">
            Volunteer Scheduling
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Schedule volunteers with ease using our intuitive software. With
            VolunteerHub, you can easily create events, see registrants, create
            waitlists, and allow volunteers to register and sign-up for
            opportunities from anywhere with an internet connection.
          </p>
          <a href="#" className="text-orange-600 hover:underline text-sm">
            Learn more →
          </a>
        </div>

        {/* Volunteer Hour Tracking */}
        <div className="bg-orange-100 rounded-lg p-6 text-center shadow-md">
          <div className="flex justify-center mb-4">
            <div className="bg-orange-500 rounded-full p-3">
              <Clock size={24} color="white" />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-orange-900 mb-2">
            Volunteer Hour Tracking
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Tracking volunteer hours can take a lot of effort, especially if
            tracked in a spreadsheet or other document. VolunteerHub removes
            this friction by automating volunteer tracking. Within our platform,
            coordinators can easily track activity and hours for each individual
            event.
          </p>
          <a href="#" className="text-orange-600 hover:underline text-sm">
            Learn more →
          </a>
        </div>

        {/* Volunteer Database */}
        <div className="bg-orange-100 rounded-lg p-6 text-center shadow-md">
          <div className="flex justify-center mb-4">
            <div className="bg-orange-500 rounded-full p-3">
              <Database size={24} color="white" />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-orange-900 mb-2">
            Volunteer Database
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Maintain a comprehensive database of your volunteers. Access contact
            information, skills, availability, and more at your fingertips and
            on any device.
          </p>
          <a href="#" className="text-orange-600 hover:underline text-sm">
            Learn more →
          </a>
        </div>

        {/* Volunteer Fundraising */}
        <div className="bg-orange-100 rounded-lg p-6 text-center shadow-md">
          <div className="flex justify-center mb-4">
            <div className="bg-orange-500 rounded-full p-3">
              <Award size={24} color="white" />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-orange-900 mb-2">
            Volunteer Fundraising
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Volunteers are 66% more likely to donate than non-volunteers. With
            VolunteerHub, you can tap into your existing volunteer database to
            find new donors, request donations as volunteers sign-up, and accept
            payments directly from our platform.
          </p>
          <a href="#" className="text-orange-600 hover:underline text-sm">
            Learn more →
          </a>
        </div>

        {/* Volunteer Liability Waivers */}
        <div className="bg-orange-100 rounded-lg p-6 text-center shadow-md">
          <div className="flex justify-center mb-4">
            <div className="bg-orange-500 rounded-full p-3">
              <BarChart2 size={24} color="white" />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-orange-900 mb-2">
            Reporting
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Generate detailed reports with our reporting tools. Gain insights
            into volunteer activities, hours, and impact through our preloaded,
            standard reports.
          </p>
          <a href="#" className="text-orange-600 hover:underline text-sm">
            Learn more →
          </a>
        </div>
      </div>

      {/* Let's Connect Button */}
      <div className="mt-8">
        <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors">
          Let's Connect
        </button>
      </div>
    </div>
  );
}
