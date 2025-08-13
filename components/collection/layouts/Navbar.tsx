"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { Menu, LogIn, UserPlus } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button, buttonVariants } from "@/components/ui/button";
import Logo from "./Logo";
import { ModeToggle } from "./ModelToggle";

const items = [
  { label: "Find opportunities", link: "/Findopportunities" },
  { label: "Myaccount", link: "/Myaccount" },
  { label: "Recruit volunteers", link: "/VolunteerProfile/createorganization" },
];

const Navbar = () => {
  return (
    <>
      <DesktopNavBar />
      <MobileNavBar />
    </>
  );
};

function MobileNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="block border-separate bg-background md:hidden">
      <nav className="container flex items-center justify-between px-8">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant={"ghost"} size={"icon"} className="bg-gray-500">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[400px] sm:w-[540px]" side="left">
            <div className="flex flex-col gap-1 pt-4">
              {items.map((item) => (
                <NavbarItems
                  key={item.label}
                  label={item.label}
                  link={item.link} // Fixed from previous code
                  onClickcallback={() => setIsOpen((prev) => !prev)}
                />
              ))}
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex h-[80px] min-h-[60px] items-center gap-x-4">
          {/* <MobileLogo /> */}
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <button
            onClick={() => router.push("/sign-in")}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors max-[359px]:px-2 max-[359px]:gap-0"
            aria-label="Log in"
          >
            <LogIn className="w-4 h-4 max-[359px]:mr-0" />
            <span className="max-[359px]:hidden">Log In</span>
          </button>
          <button
            onClick={() => router.push("/sign-up")}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-purple-500 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors max-[359px]:px-2 max-[359px]:gap-0"
            aria-label="Sign up"
          >
            <UserPlus className="w-4 h-4 max-[359px]:mr-0" />
            <span className="max-[359px]:hidden">Sign Up</span>
          </button>
        </div>
      </nav>
    </div>
  );
}

function DesktopNavBar() {
  const router = useRouter();

  return (
    <div className="hidden border-separate border-b bg-background md:block">
      <nav className="container flex items-center justify-between px-8">
        <div className="flex h-[80px] min-h-[60px] items-center gap-x-4">
          <Logo />
          <div className="flex h-full">
            {items.map((item) => (
              <NavbarItems
                key={item.label}
                label={item.label}
                link={item.label}
              />
            ))}
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <ModeToggle />
          <button
            onClick={() => router.push("/sign-in")}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
          >
            <LogIn className="w-4 h-4" />
            Log In
          </button>
          <button
            onClick={() => router.push("/sign-up")}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-purple-500 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors"
          >
            <UserPlus className="w-4 h-4" />
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
}

function NavbarItems({
  label,
  link,
  onClickcallback,
}: {
  label: string;
  link: string;
  onClickcallback?: () => void;
}) {
  const pathname = usePathname();
  return (
    <div className="relative flex items-center">
      <Link
        href={link}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "w-full justify-center text-lg text-muted-foreground hover:text-foreground",
          pathname === link && "text-foreground"
        )}
        onClick={onClickcallback}
      >
        {label}
      </Link>
    </div>
  );
}

export default Navbar;
