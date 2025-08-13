import { useState } from "react";
import { Category } from "@prisma/client";
import { Card } from "@/components/ui/card";

interface CategoryListProps {
  selectedCategories: Category[];
  handleCategoryChange: (category: Category) => void;
}
const categories = [
  Category.ADVOCACY_HUMAN_RIGHTS,
  Category.ANIMALS,
  Category.ARTS_CULTURE,
  Category.BOARD_DEVELOPMENT,
  Category.CHILDREN_YOUTH,
  Category.COMMUNITY,
  Category.COMPUTERS_TECHNOLOGY,
  Category.CRISIS_SUPPORT,
  Category.DISASTER_RELIEF,
  Category.EDUCATION_LITERACY,
  Category.EMERGENCY_SAFETY,
  Category.EMPLOYMENT,
  Category.ENVIRONMENT,
  Category.FAITH_BASED,
  Category.HEALTH_MEDICINE,
  Category.HOMELESS_HOUSING,
  Category.HUNGER,
  Category.IMMIGRANTS_REFUGEES,
  Category.INTERNATIONAL,
  Category.JUSTICE_LEGAL,
  Category.LGBTQ,
  Category.MEDIA_BROADCASTING,
  Category.PEOPLE_WITH_DISABILITIES,
  Category.POLITICS,
  Category.RACE_ETHNICITY,
  Category.SENIORS,
  Category.SPORTS_RECREATION,
  Category.VETERANS_MILITARY_FAMILIES,
  Category.WOMEN,
];
const categoryNames = {
  [Category.ADVOCACY_HUMAN_RIGHTS]: "Advocacy & Human Rights",
  [Category.ANIMALS]: "Animals",
  [Category.ARTS_CULTURE]: "Arts & Culture",
  [Category.BOARD_DEVELOPMENT]: "Board Development",
  [Category.CHILDREN_YOUTH]: "Children & Youth",
  [Category.COMMUNITY]: "Community",
  [Category.COMPUTERS_TECHNOLOGY]: "Computers & Technology",
  [Category.CRISIS_SUPPORT]: "Crisis Support",
  [Category.DISASTER_RELIEF]: "Disaster Relief",
  [Category.EDUCATION_LITERACY]: "Education & Literacy",
  [Category.EMERGENCY_SAFETY]: "Emergency & Safety",
  [Category.EMPLOYMENT]: "Employment",
  [Category.ENVIRONMENT]: "Environment",
  [Category.FAITH_BASED]: "Faith-Based",
  [Category.HEALTH_MEDICINE]: "Health & Medicine",
  [Category.HOMELESS_HOUSING]: "Homeless & Housing",
  [Category.HUNGER]: "Hunger",
  [Category.IMMIGRANTS_REFUGEES]: "Immigrants & Refugees",
  [Category.INTERNATIONAL]: "International",
  [Category.JUSTICE_LEGAL]: "Justice & Legal",
  [Category.LGBTQ]: "LGBTQ",
  [Category.MEDIA_BROADCASTING]: "Media & Broadcasting",
  [Category.PEOPLE_WITH_DISABILITIES]: "People with Disabilities",
  [Category.POLITICS]: "Politics",
  [Category.RACE_ETHNICITY]: "Race & Ethnicity",
  [Category.SENIORS]: "Seniors",
  [Category.SPORTS_RECREATION]: "Sports & Recreation",
  [Category.VETERANS_MILITARY_FAMILIES]: "Veterans & Military Families",
  [Category.WOMEN]: "Women",
};
const CategoryList = ({selectedCategories,  handleCategoryChange,}: CategoryListProps) => {
  const [selected, setSelected] = useState(selectedCategories);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSelect = (category: Category) => {
    if (selected.includes(category)) {
      setSelected(selected.filter((cat) => cat !== category));
    } else if (selected.length < 5) {
      setSelected([...selected, category]);
    }
    handleCategoryChange(category);
  };

  const filteredCategories = categories.filter((category) =>
    categoryNames[category].toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    //className="flex flex-col md:flex-row  gap-12 space-y-4  px-4"
    //flex flex-col overflow-y-auto h-96 md:p-2 border-2 border-blue-50 w-96

    <Card className="flex flex-col md:flex-row gap-12 space-y-4 px-4">
      <div className="flex flex-col overflow-y-auto h-96 w-72 ">
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search categories"
          className="p-2 border border-gray-400 rounded mb-4"
        />
        {filteredCategories.map((category) => (
          <div
            key={category}
            className={`flex items-center space-x-2 p-2 border-b border-gray-300 cursor-pointer hover:bg-blue-100 dark:hover:bg-gray-700 ${
              selected.includes(category)
                ? "bg-blue-300 border border-b-2 dark:bg-gray-800"
                : ""
            }`}
            onClick={() => handleSelect(category)}
          >
            <span>{categoryNames[category]}</span>
            {selected.includes(category) && <span>✅</span>}
          </div>
        ))}
      </div>
      <div className="mt-4">
        <h3 className="font-bold">Selected Categories:</h3>
        <ul className="list-disc list-inside bg-gray-100">
          {selected.map((category) => (
            <li
              key={category}
              className="list-none flex items-center justify-betweenv border border-b-1 p-2 dark:bg-gray-800 dark:border-b-1 border-gray-400"
            >
              <span className="w-52">{categoryNames[category]}</span>
              <button
                className="text-red-500"
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
