"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      // Check if response is JSON
      const contentType = res.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        console.error("Received non-JSON response:", await res.text());
        alert("Server error: Invalid response format. Please try again.");
        return;
      }

      const data = await res.json();

      if (res.status === 423) {
        alert("Your account is locked. Please try again later.");
      } else if (res.ok) {
        console.log("Login successful:", data);
        router.push("/"); // Redirect to home page
      } else {
        alert(data.error || "Invalid email or password.");
      }
    } catch (error) {
      console.error("Error in signin:", error);
      alert("An error occurred during sign-in. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 max-[649px]:p-2">
      <form
        onSubmit={handleSubmit}
        className="p-6 rounded-lg shadow-xl w-1/3 max-[649px]:w-full max-[649px]:p-4 border-2 dark:border-gray-600"
      >
        <h2 className="text-3xl font-bold mb-4 max-[649px]:text-2xl">Login</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 dark:text-white text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline 
            bg-gray-100 dark:bg-gray-600 dark:text-gray-200"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 dark:text-white text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline
                    bg-gray-100 dark:bg-gray-600 dark:text-gray-200"
          />
        </div>
        <Button
          type="submit"
          className="bg-orangePrimary hover:bg-orangeDark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline max-[649px]:text-sm"
        >
          Login
        </Button>
        <div className="mt-4">
          <Link href="/reset-password">
            <span className="text-gray-700 dark:text-white hover:text-orangePrimary text-sm">
              Forgot password?
            </span>
          </Link>
        </div>
        <div className="mt-4 text-gray-700 dark:text-white text-sm">
          Don't have an account?
        </div>
        <Link href="/sign-up" className="mb-4">
          <Button className="bg-orangePrimary hover:bg-orangeDark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline max-[649px]:text-sm">
            Sign Up
          </Button>
        </Link>
      </form>
    </div>
  );
};

export default SignIn;
