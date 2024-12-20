// CategoryList.tsx
import { useState } from "react";
import { Category } from "@prisma/client";

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

const CategoryList = ({
  selectedCategories,
  handleCategoryChange,
}: CategoryListProps) => {
  return (
    <div className="flex flex-row gap-12 space-y-4 ml-60">
      <div className="flex flex-col overflow-y-auto h-96 md:p-4 border-2 border-blue-50 w-96">
        {categories.map((category) => (
          <div
            key={category}
            className={`flex items-center space-x-2 p-4 cursor-pointer hover:bg-blue-100 ${
              selectedCategories.includes(category) ? "bg-blue-300" : ""
            }`}
            onClick={() => handleCategoryChange(category)}
          >
            <span>{categoryNames[category]}</span>
            {selectedCategories.includes(category) && <span>✔️</span>}
          </div>
        ))}
      </div>
      <div className="mt-4">
        <h3 className="font-bold">Selected Categories:</h3>
        <ul className="list-disc list-inside">
          {selectedCategories.map((category) => (
            <li key={category}>{categoryNames[category]}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryList;
