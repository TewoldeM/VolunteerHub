import React from "react";
import ReactFlagsSelect from "react-flags-select";

interface CountrySelectorProps {
  value: string;
  onChange: (country: string) => void;
}

const Countryselector: React.FC<CountrySelectorProps> = ({ value, onChange }) => {
  return (
    <div>
      <ReactFlagsSelect
        selected={value}
        onSelect={onChange}  // Pass the onChange prop to handle selection
        placeholder="Select Country"
        searchable
        searchPlaceholder="Search countries"
      />
    </div>
  );
};

export default Countryselector;
