"use client";

import { useRouter } from "next/navigation";
import { LogOut, UserPlus, LogIn, Download } from "lucide-react";

const Logout = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/auth/logout", {
        method: "DELETE",
        credentials: "include",
      });

      if (res.ok) {
        router.push("/sign-up");
      } else {
        console.error("Failed to logout");
      }
    } catch (err) {
      console.error("An error occurred during logout:", err);
    }
  };



  return (
    <div className="flex items-center justify-center gap-4 p-4 bg-gray-50 rounded-lg">
      <button
        onClick={handleLogout}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
      >
        <LogOut className="w-4 h-4" />
        Logout
      </button>
    </div>
  );
}

export default Logout