"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import StepstoJoin from "@/components/collection/Create-organazation/StepstoJoin";
import Hero from "@/components/collection/layouts/hero";
import { User } from "@prisma/client";
import { Separator } from "@/components/ui/separator";
import OpportunityFinder from "@/components/collection/Create-organazation/OpportunityFinder";
import AboutVolunteer from "@/components/collection/Create-organazation/AboutVolunteer";
import Onboarding from "@/components/collection/Create-organazation/Onboarding";
import VolunterServices from "@/components/collection/Create-organazation/VolunterServices";
import OpportunityFinder2 from "@/components/collection/Create-organazation/OpportunityFinder2";

// Helper function to get cookie by name
function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift() || null;
  return null;
}

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/auth/user", {
          method: "GET",
          credentials: "include",
        });

        if (res.ok) {
          const userData = await res.json();
          setUser(userData);
        } else {
          // Instead of redirecting, set user to null and allow homepage to render
          setUser(null);
        }
      } catch (err) {
        setError("An unexpected error occurred while fetching user data.");
        setUser(null); // Allow homepage to render even if error occurs
      } finally {
        setLoading(false);
      }
    };

    // Check for token; if present, fetch user; if not, render homepage with null user
    const token = getCookie("token");
    if (token) {
      fetchUser();
    } else {
      setLoading(false); // Skip loading state for unauthenticated users
    }
  }, [router]);

  if (loading) {
    return (
      <div className="flex flex-col gap-4 justify-center items-center h-screen">
        <div>
          <img src="/wait.jpg" alt="Loading" width="300" height="300" />
          <div>Please wait while we fetch your data...</div>
        </div>
      </div>
    );
  }

  if (error) {
    console.error(error); // Log error for debugging, but don't block homepage
  }

  return (
    <div>
      <Hero user={user} />
      <OpportunityFinder />
      <OpportunityFinder2 /> 
      <Onboarding />
      <AboutVolunteer />
      {/* <Cliamyourorg /> */}
      <Separator />
      <VolunterServices />
      {/* <AboutVolunteerMatch /> */}
      <Separator />
      {/* <StepstoJoin /> */}
    </div>
  );
}
