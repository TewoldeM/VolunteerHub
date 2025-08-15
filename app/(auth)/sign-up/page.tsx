"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/api/auth/signup", {
        email,
        password,
        name,
      });
      router.push("/");
    } catch (err: any) {
      console.error("Error during sign-up:", err);
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data.error || "An unexpected error occurred.");
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 max-[649px]:p-2">
      <form
        onSubmit={handleSignup}
        className="p-6 rounded-lg shadow-xl w-1/3 max-[649px]:w-full max-[649px]:p-4 border-2 dark:border-gray-600"
      >
        <h2 className="text-3xl font-bold mb-4 max-[649px]:text-2xl">
          Sign Up
        </h2>

        <div className="mb-4">
          <label
            className="block text-gray-700 dark:text-white text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-100 dark:bg-gray-600 dark:text-gray-200"
          />
        </div>

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
            className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-100 dark:bg-gray-600 dark:text-gray-200"
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
            className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-100 dark:bg-gray-600 dark:text-gray-200"
          />
        </div>

        <div className="flex justify-between gap-4 max-[649px]:flex-col">
          <button
            type="submit"
            className="bg-orangePrimary hover:bg-orange-400 text-white font-bold py-2 px-4 rounded w-full max-[649px]:text-sm"
          >
            Sign Up
          </button>
          <button
            type="button"
            onClick={() => router.push("/sign-in")}
            className="bg-orangePrimary hover:bg-orange-400 text-white font-bold py-2 px-4 rounded w-full max-[649px]:text-sm"
          >
            Sign In
          </button>
        </div>

        {error && <p className="text-red-500 mt-4 text-sm">{error}</p>}
      </form>
    </div>
  );
}
