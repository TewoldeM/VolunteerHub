
"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button, buttonVariants } from '@/components/ui/button';
import Logo from './Logo';
import Logout from '@/app/(auth)/logout/page';
import { ModeToggle } from './ModelToggle';
const items = [
  { label: "Find opportunities", link: "/Findopportunities" },
  { label: "Bussiness Solution", link: "/BussinessSolution" },
  { label: "Recruit volunteers", link: "/VolunteerProfile/create-organization"},
  { label: "Sign up", link: "/sign-up"},
  { label: "Sign in", link: "/sign-in"},

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
  return (
    <div className="block border-separate bg-background md:hidden">
      <nav className="container flex items-center justify-between px-8">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant={"ghost"} size={"icon"} className="bg-gray-500">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[400px] sm:w-[540px] " side="left">
            <div className="flex flex-col gap-1 pt-4">
              {items.map((item) => (
                <NavbarItems
                  key={item.label}
                  label={item.label}
                  link={item.link}
                  onClickcallback
                   ={() => setIsOpen((prev) => !prev)}
                />
              ))}
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex h-[80px] min-h-[60px] items-center gap-x-4">
          {/* <MobileLogo /> */}
        </div>
        <div className="flex items-center gap-2">
          {/* <ModeToggle /> */}
          {/* <UserButton afterSignOutUrl="/sign-in" /> */}
        </div>
      </nav>
    </div>
  );
}

function DesktopNavBar() {
  return (
    <div className="hidden border-separate border-b bg-background md:block">
      <nav className="container flex items-center justify-between px-8 ">
        <div className="flex h-[80px] min-h-[60px] items-center gap-x-4">
          <Logo />
          <div className="flex h-full">
            {items.map((item) => (
              <NavbarItems
                key={item.label}
                label={item.label}
                link={item.link}
              />
            ))}
          </div>
        </div>
        <div className="flex gap-2 items-center">
        {/* <ModeToggle /> */}
           <Logout />
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
  onClickcallback
?: () => void;
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
export default Navbar

