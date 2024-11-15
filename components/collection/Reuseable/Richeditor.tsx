import React from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useMemo } from "react";
interface RichediterProps {
  placeholder: string;
  onChange: (value: string) => void;
  value?: string;
}

const RichEditor = ({ placeholder, onChange, value }: RichediterProps) => {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );
  return (
    <div>
   <ReactQuill
      theme="snow"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      
    />
    </div>
  );
};

export default RichEditor;
