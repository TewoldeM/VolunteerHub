'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cliamyourorg from "@/components/collection/Create-organazation/Cliamyourorg";
import AboutVolunteerMatch from "@/components/collection/Create-organazation/AboutVolunteerMatch";
import StepstoJoin from "@/components/collection/Create-organazation/StepstoJoin";
import Hero from "@/components/collection/layouts/hero";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      // Use fetch to get the token from server-side API
      const res = await fetch("/api/auth/user", {
        method: "GET",
        credentials: 'include', // Include cookies in requests
      });

      if (!res.ok) {
        if (res.status === 401) {
          router.push("/sign-in");
        } else {
          setError(`Failed to fetch user data. Status code: ${res.status}`);
        }
        return;
      }

      const userData = await res.json();
      setUser(userData);
      setLoading(false);
    };

    fetchUser();
  }, [router]);

  if (loading) return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen">
     
      <div>
        <img
          src="/wait.jpg"
          alt="Loading"
          width="300"
          height="300"
        />
     <div>Please wait while we fetch your data...</div>
    </div>
  </div>
  ); // Show loading state
  if (error) return <div>Error: {error}</div>; // Show error message

  return (
    <div>
      <Hero user={user} />
      <Cliamyourorg />
      <AboutVolunteerMatch />
      <StepstoJoin />
    </div>
  );
}