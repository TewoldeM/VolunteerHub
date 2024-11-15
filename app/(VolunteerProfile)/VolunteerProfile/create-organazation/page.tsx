"use client"
import Createorganazation from '@/components/collection/Create-organazation/Createorganazation';
import YouwillNeeded from '@/components/collection/Create-organazation/YouwillNeeded';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const CreateOrganaztion = () => {
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

  if (loading) return <div>Loading...</div>; // Show loading state
  if (error) return <div>Error: {error}</div>; // Show error message
  return (
    <div className='mt-20 mb-14'>
    <Createorganazation  />
    <YouwillNeeded />
    </div>
  )
}

export default CreateOrganaztion;