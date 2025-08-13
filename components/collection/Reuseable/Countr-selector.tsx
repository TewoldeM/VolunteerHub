import React from "react";
import ReactFlagsSelect from "react-flags-select";
// import "./CountrySelector.css"; // Import the CSS file for overrides

interface CountrySelectorProps {
  value: string;
  onChange: (country: string) => void;
}

const Countryselector: React.FC<CountrySelectorProps> = ({
  value,
  onChange,
}) => {
  return (
    <div className="dark:border-gray-500 border-2 dark:text-gray-300">
      <ReactFlagsSelect
        selected={value}
        onSelect={onChange}
        placeholder="Select Country"
        searchable
        searchPlaceholder="Search countries"
        className="dark:text-gray-600"
      />
    </div>
  );
};

export default Countryselector;
