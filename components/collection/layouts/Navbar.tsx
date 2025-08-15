"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import {
  Menu,
  LogIn,
  UserPlus,
  LogOut,
  ChevronDown,
  ChevronUp,
  Search,
  User,
  MessageSquare,
  Users,
  Calendar,
  Mail,
  Smartphone,
  Share2,
  LifeBuoy,
  BookOpen,
  Users2,
  Contact,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button, buttonVariants } from "@/components/ui/button";
import Logo from "./Logo";

const navGroups = [
  {
    label: "For Volunteers",
    items: [
      {
        label: "Find Opportunities",
        link: "/volunteers/find-opportunities",
        icon: Search,
      },
      { label: "My Profile", link: "/volunteers/my-profile", icon: User },
      {
        label: "Communication",
        link: "/volunteers/communication",
        icon: MessageSquare,
      },
    ],
  },
  {
    label: "For Organizations",
    items: [
      {
        label: "Volunteer Recruitment",
        link: "/organizations/volunteer-management/recruitment",
        icon: Users,
      },
      {
        label: "Opportunity Management",
        link: "/organizations/opportunity-management",
        icon: Calendar,
      },
      {
        label: "Volunteer Communication",
        link: "/organizations/communication",
        icon: Mail,
      },
      {
        label: "Client Success",
        link: "/organizations/client-success",
        icon: Users2,
      },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Support", link: "/resources/support", icon: LifeBuoy },
      { label: "Guides", link: "/resources/guides", icon: BookOpen },
    ],
  },
  {
    label: "About",
    items: [
      { label: "Our Team", link: "/about/team", icon: Users2 },
      { label: "Contact", link: "/about/contact", icon: Contact },
    ],
  },
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
    <div className="block bg-orange-900 text-gray-300 md:hidden">
      <nav className="container flex items-center justify-between px-4 py-2">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="text-orange-500" />
            </Button>
          </SheetTrigger>
          <SheetContent
            className="w-[300px] bg-gray-900 text-white"
            side="left"
          >
            <div className="flex flex-col gap-2 pt-4">
              {navGroups.map((group) => (
                <div key={group.label}>
                  <h3 className="font-semibold text-lg">{group.label}</h3>
                  {group.items.map((item) => (
                    <NavbarItems
                      key={item.label}
                      label={item.label}
                      link={item.link}
                      icon={item.icon}
                      onClickcallback={() => setIsOpen(false)}
                    />
                  ))}
                </div>
              ))}
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex h-[60px] items-center">
          <Logo />
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={() => router.push("/sign-in")}
            className="bg-gray-500 text-white hover:bg-gray-600"
          >
            <LogIn className="mr-2 h-4 w-4 text-orange-500" /> Log In
          </Button>
          <Button
            onClick={() => router.push("/sign-up")}
            className="bg-gray-700 text-white hover:bg-gray-600"
          >
            <UserPlus className="mr-2 h-4 w-4 text-orange-500" /> Sign Up
          </Button>
          <Button
            onClick={() => router.push("/logout")}
            className="bg-red-700 text-white hover:bg-red-900 border-2 border-gray-100"
          >
            <LogOut className="mr-2 h-4 w-4 text-orange-500" /> Logout
          </Button>
        </div>
      </nav>
    </div>
  );
}

function DesktopNavBar() {
  const router = useRouter();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="hidden bg-orange-600 text-white md:block relative">
      <nav className="container flex items-center justify-between px-4 py-2 relative">
        <div className="flex h-[60px] items-center gap-x-4">
          <Logo />
          <div className="flex space-x-4">
            {navGroups.map((group) => (
              <div key={group.label} className="relative group">
                <Button
                  variant="ghost"
                  className="text-white hover:text-gray-500 flex items-center"
                  onClick={() => handleToggleDropdown(group.label)}
                >
                  {group.label}
                  {openDropdown === group.label ? (
                    <ChevronUp className="ml-2 h-4 w-4 text-gray-100" />
                  ) : (
                    <ChevronDown className="ml-2 h-4 w-4 text-gray-100" />
                  )}
                </Button>
                {openDropdown === group.label && (
                  <div
                    ref={dropdownRef}
                    className="absolute left-0 top-[60px] z-50 bg-white text-black p-3 rounded shadow-xl min-w-[320px]"
                  >
                    {group.items.map((item) => (
                      <NavbarItems
                        key={item.label}
                        label={item.label}
                        link={item.link}
                        icon={item.icon}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={() => router.push("/sign-in")}
            className="bg-green-500 text-white hover:bg-green-600"
          >
            <LogIn className="mr-2 h-4 w-4 text-white" /> Log In
          </Button>
          <Button
            onClick={() => router.push("/sign-up")}
            className="bg-purple-500 text-white hover:bg-purple-600"
          >
            <UserPlus className="mr-2 h-4 w-4 text-white" /> Sign Up
          </Button>
          <Button
            onClick={() => router.push("/logout")}
            className="bg-red-500 text-white hover:bg-red-900 border-2 border-gray-100"
          >
            <LogOut className="mr-2 h-4 w-4 text-white" /> Logout
          </Button>
        </div>
      </nav>
    </div>
  );
}

function NavbarItems({
  label,
  link,
  icon: Icon,
  onClickcallback,
}: {
  label: string;
  link: string;
  icon?: React.ComponentType<{ className?: string }>;
  onClickcallback?: () => void;
}) {
  const pathname = usePathname();
  return (
    <Link
      href={link}
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "w-full justify-start px-4 py-2 text-sm text-gray-800 hover:text-gray-600 text-left flex items-center",
        pathname === link && "text-gray-600"
      )}
      onClick={onClickcallback}
    >
      {Icon && <Icon className="mr-2 h-4 w-4 text-orange-500" />}
      {label}
    </Link>
  );
}

export default Navbar;
