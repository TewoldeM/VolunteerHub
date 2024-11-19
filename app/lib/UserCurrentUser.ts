import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { db } from "@/app/lib/db";

interface User {
  id: string;
  name: string;
  email: string;
}

interface UseCurrentUserResponse {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const useCurrentUser = (): UseCurrentUserResponse => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch("/api/auth/user", {
        method: "GET",
        credentials: "include",
      });

      if (!res.ok) {
        if (res.status === 401) {
          router.push("/sign-in");
        } else {
          setError(`Failed to fetch user data. Status code: ${res.status}`);
        }
        return;
      }

      const userData: User = await res.json();
      setUser(userData);
      setLoading(false);
    };

    fetchUser();
  }, [router]);

  return { user, loading, error };
};

export default useCurrentUser;
