import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import UserButtonSettings from "./UserButtonSettings";

const UserButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        className="flex justify-center items-center rounded-full px-7 py-7 w-12 h-8 bg-blue-300 cursor-pointer "
        onClick={() => setOpen(!open)}
      >
        {/* Your button content here */}
      </div>
      {open && (
        <div
          className="fixed top-20 right-0 bg-white dark:bg-gray-950 shadow-lg p-6 w-96
          
          border-2 dark:border-gray-900 border-gray-200 mr-2"
          style={{ zIndex: 1000 }}
        >
          <UserButtonSettings />
        </div>
      )}
    </div>
  );
};

export default UserButton;
