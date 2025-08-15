import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center justify-center gap-2">
        <img
          src="/logo1.png"
          alt="Add Your Photo"
          className="object-cover rounded w-50 h-50 border-none"
          width={60}
          height={30}
        />
        <p className="hidden xs:block bg-gradient-to-r from-emerald-400 to-orange-400 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent">
          VolunteerLink
        </p>
      </div>
    </Link>
  );
};

export default Logo;
