import { Card } from "@/components/ui/card";
import { useState } from "react";

interface Category {
  name: string;
  subCategories?: Category[];
}

interface CategoryListProps {
  selectedCategories: Category[];
  handleCategoryChange: (category: Category) => void;
}

const categories: Category[] = [
  {
    name: "Academics",
    subCategories: [
      { name: "Anthropology" },
      { name: "Archeology" },
      { name: "Astronomy" },
      { name: "Computer Science" },
      { name: "Environmental Science" },
      { name: "History" },
      { name: "Library Sciences" },
      { name: "Mathematics" },
      { name: "Music Theory" },
      { name: "Research" },
    ],
  },
  {
    name: "Administrative & Clerical",
    subCategories: [
      { name: "Office Management" },
      { name: "Human Resources" },
      { name: "Data Entry" },
      { name: "Customer Service" },
      { name: "Bookkeeping" },
    ],
  },
  {
    name: "Animals & Environment",
    subCategories: [
      { name: "Wildlife Conservation" },
      { name: "Animal Welfare" },
      { name: "Environmental Science" },
      { name: "Sustainability" },
      { name: "Eco-Tourism" },
    ],
  },
  {
    name: "Arts",
    subCategories: [
      { name: "Visual Arts" },
      { name: "Music" },
      { name: "Theater" },
      { name: "Dance" },
      { name: "Literary Arts" },
    ],
  },
  {
    name: "Business & Management",
    subCategories: [
      { name: "Marketing" },
      { name: "Finance" },
      { name: "Human Resources" },
      { name: "Operations Management" },
      { name: "Entrepreneurship" },
    ],
  },
  {
    name: "Children & Family",
    subCategories: [
      { name: "Child Development" },
      { name: "Family Counseling" },
      { name: "Youth Services" },
      { name: "Parenting Education" },
      { name: "Child Advocacy" },
    ],
  },
  {
    name: "Computers & IT",
    subCategories: [
      { name: "Software Development" },
      { name: "Network Administration" },
      { name: "Cybersecurity" },
      { name: "Data Analysis" },
      { name: "IT Project Management" },
    ],
  },
  {
    name: "Disaster Relief",
    subCategories: [
      { name: "Emergency Response" },
      { name: "Disaster Recovery" },
      { name: "Humanitarian Aid" },
      { name: "Crisis Management" },
      { name: "Volunteer Coordination" },
    ],
  },
  {
    name: "Education & Literacy",
    subCategories: [
      { name: "Teaching" },
      { name: "Curriculum Development" },
      { name: "Literacy Education" },
      { name: "Special Education" },
      { name: "Education Policy" },
    ],
  },
  {
    name: "Engineering",
    subCategories: [
      { name: "Mechanical Engineering" },
      { name: "Electrical Engineering" },
      { name: "Civil Engineering" },
      { name: "Chemical Engineering" },
      { name: "Biomedical Engineering" },
    ],
  },
  {
    name: "Finance",
    subCategories: [
      { name: "Accounting" },
      { name: "Investment Banking" },
      { name: "Financial Planning" },
      { name: "Risk Management" },
      { name: "Financial Analysis" },
    ],
  },
  {
    name: "Food Service & Events",
    subCategories: [
      { name: "Catering" },
      { name: "Event Planning" },
      { name: "Food Safety" },
      { name: "Hospitality Management" },
      { name: "Restaurant Management" },
    ],
  },
  {
    name: "For Profit & Nonprofit Development",
    subCategories: [
      { name: "Fundraising" },
      { name: "Grant Writing" },
      { name: "Nonprofit Management" },
      { name: "Social Entrepreneurship" },
      { name: "Corporate Social Responsibility" },
    ],
  },
  {
    name: "HR",
    subCategories: [
      { name: "Recruitment" },
      { name: "Talent Management" },
      { name: "Employee Engagement" },
      { name: "Benefits Administration" },
      { name: "Labor Relations" },
    ],
  },
  {
    name: "Healthcare & Social Services",
    subCategories: [
      { name: "Nursing" },
      { name: "Social Work" },
      { name: "Public Health" },
      { name: "Health Education" },
      { name: "Healthcare Administration" },
    ],
  },
  {
    name: "Hobbies & Crafts",
    subCategories: [
      { name: "Painting" },
      { name: "Photography" },
      { name: "Gardening" },
      { name: "Cooking" },
      { name: "Woodworking" },
    ],
  },
  {
    name: "Housing & Facilities",
    subCategories: [
      { name: "Property Management" },
      { name: "Facilities Management" },
      { name: "Real Estate" },
      { name: "Architecture" },
      { name: "Interior Design" },
    ],
  },
  {
    name: "IT Infrastructure & Software",
    subCategories: [
      { name: "Network Administration" },
      { name: "Database Management" },
      { name: "Software Development" },
      { name: "Cybersecurity" },
      { name: "IT Project Management" },
    ],
  },
  {
    name: "Interactive & Web Development",
    subCategories: [
      { name: "Web Development" },
      { name: "Mobile App Development" },
      { name: "Game Development" },
      { name: "UX Design" },
      { name: "Front-end Development" },
    ],
  },
  {
    name: "Interpersonal",
    subCategories: [
      { name: "Communication" },
      { name: "Conflict Resolution" },
      { name: "Team Building" },
      { name: "Leadership" },
      { name: "Time Management" },
    ],
  },
  {
    name: "Language & Culture",
    subCategories: [
      { name: "Language Instruction" },
      { name: "Cultural Studies" },
      { name: "Translation" },
      { name: "Interpretation" },
      { name: "Linguistics" },
    ],
  },
  {
    name: "Legal & Advocacy",
    subCategories: [
      { name: "Law" },
      { name: "Advocacy" },
      { name: "Policy Analysis" },
      { name: "Public Interest Law" },
      { name: "Human Rights" },
    ],
  },
  {
    name: "Logistics, Supply Chain & Transportation",
    subCategories: [
      { name: "Logistics" },
      { name: "Supply Chain Management" },
      { name: "Transportation Management" },
      { name: "Operations Management" },
      { name: "Procurement" },
    ],
  },
  {
    name: "Marketing & Communications",
    subCategories: [
      { name: "Marketing" },
      { name: "Public Relations" },
      { name: "Advertising" },
      { name: "Branding" },
      { name: "Social Media" },
    ],
  },
  {
    name: "Music",
    subCategories: [
      { name: "Music Performance" },
      { name: "Music Education" },
      { name: "Music Therapy" },
      { name: "Music Production" },
      { name: "Music Business" },
    ],
  },
  {
    name: "Performing Arts",
    subCategories: [
      { name: "Theater" },
      { name: "Dance" },
      { name: "Music" },
      { name: "Film" },
      { name: "Comedy" },
    ],
  },
  {
    name: "Sports & Recreation",
    subCategories: [
      { name: "Athletic Coaching" },
      { name: "Sports Management" },
      { name: "Recreation Management" },
      { name: "Fitness" },
      { name: "Sports Marketing" },
    ],
  },
  {
    name: "Strategy Development & Business Planning",
    subCategories: [
      { name: "Strategic Planning" },
      { name: "Business Development" },
      { name: "Market Research" },
      { name: "Competitive Analysis" },
      { name: "Financial Planning" },
    ],
  },
  {
    name: "Trades",
    subCategories: [
      { name: "Electrician" },
      { name: "Plumber" },
      { name: "Carpenter" },
      { name: "HVAC Technician" },
      { name: "Welder" },
    ],
  },
];

const CategoryList = ({
  selectedCategories,
  handleCategoryChange,
}: CategoryListProps) => {
  const [selected, setSelected] = useState(selectedCategories);
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const handleSelect = (category: Category) => {
    if (selected.includes(category)) {
      setSelected(selected.filter((cat) => cat !== category));
    } else if (selected.length < 5) {
      setSelected([...selected, category]);
    }
    handleCategoryChange(category);
  };

  const handleExpand = (categoryName: string) => {
    if (expandedCategories.includes(categoryName)) {
      setExpandedCategories(
        expandedCategories.filter((cat) => cat !== categoryName)
      );
    } else {
      setExpandedCategories([...expandedCategories, categoryName]);
    }
  };

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card className="flex flex-row gap-12">
      <div className="flex flex-col overflow-y-auto h-96 md:p-4 border-2 border-green-50 w-72">
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search categories"
          className="p-2 border border-gray-400 rounded mb-4"
        />
        {filteredCategories.map((category) => (
          <div key={category.name}>
            <div
              className={`flex items-center space-x-2 p-4 cursor-pointer hover:bg-green-100 border-b-2 border-green-200 dark:hover:bg-gray-700 ${
                selected.includes(category) ? "bg-green-300" : ""
              }`}
              onClick={() => {
                if (category.subCategories) {
                  handleExpand(category.name);
                } else {
                  handleSelect(category);
                }
              }}
            >
              <span>{category.name}</span>
              {category.subCategories && (
                <span>
                  {expandedCategories.includes(category.name) ? "▼" : "▶"}
                </span>
              )}
            </div>
            {category.subCategories &&
              expandedCategories.includes(category.name) && (
                <div className="ml-4 border-b-2 border-green-400">
                  {category.subCategories.map((subCategory) => (
                    <div
                      key={subCategory.name}
                      className={`flex items-center space-x-2 p-2 cursor-pointer border-b-2 border-green-100 hover:bg-green-100 dark:hover:bg-gray-700  ${
                        selected.includes(subCategory)
                          ? "bg-green-300 dark:bg-gray-600"
                          : ""
                      }`}
                      onClick={() => handleSelect(subCategory)}
                    >
                      <span>{subCategory.name}</span>
                      {selected.includes(subCategory) && <span>✅</span>}
                    </div>
                  ))}
                </div>
              )}
          </div>
        ))}
      </div>
      <div className="mt-4 p-2">
        <h3 className="font-bold">Selected Categories:</h3>
        <ul className="list-disc list-inside">
          {selected.map((category) => (
            <li
              key={category.name}
              className="list-none flex items-center justify-between p-4 border-2 border-green-100 dark:bg-gray-800"
            >
              <span className="w-44">{category.name}</span>

              <button
                className="ml-2 text-red-500"
                onClick={() => handleSelect(category)}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
        {selected.length < 1 && (
          <p className="text-red-500">Please select at least one category</p>
        )}
        {selected.length >= 5 && (
          <p className="text-red-500">You can only select up to 5 categories</p>
        )}
      </div>
    </Card>
  );
};

export default CategoryList;
