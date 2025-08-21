import { useState } from "react";
import { Category } from "@prisma/client";
import { Card } from "@/components/ui/card";

interface CategoryListProps {
  selectedCategories: Category[];
  handleCategoryChange: (category: Category) => void;
}

const categories = [
  Category.EDUCATION,
  Category.HEALTH,
  Category.ENVIRONMENT,
  Category.ANIMAL_WELFARE,
  Category.ARTS,
  Category.SPORTS,
  Category.COMMUNITY,
  Category.OTHER,
];

const categoryNames = {
  [Category.EDUCATION]: "Education",
  [Category.HEALTH]: "Health",
  [Category.ENVIRONMENT]: "Environment",
  [Category.ANIMAL_WELFARE]: "Animal Welfare",
  [Category.ARTS]: "Arts",
  [Category.SPORTS]: "Sports",
  [Category.COMMUNITY]: "Community",
  [Category.OTHER]: "Other",
};

const CategoryList = ({
  selectedCategories,
  handleCategoryChange,
}: CategoryListProps) => {
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
    <Card className="flex flex-col md:flex-row gap-12 space-y-4 md:px-4">
      <div className="flex flex-col overflow-y-auto h-96 md: w-72 ">
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search categories"
          className="p-2 border border-gray-400 rounded mb-4"
        />
        {filteredCategories.map((category, index) => (
          <div
            key={`${category}-${index}`}
            className={`flex items-center md:space-x-2 p-2 border-b border-gray-300 cursor-pointer hover:bg-blue-100 dark:hover:bg-gray-700 ${
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
          {selected.map((category: Category) => (
            <li
              key={category}
              className="list-none flex items-center justify-between border border-b-1 p-2 dark:bg-gray-800 dark:border-b-1 border-gray-400"
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
