import { createContext, useState } from "react";

interface AuthContextProps {
  userId: string | null;
  email: string | null; // Add email property
  setUserId: (userId: string | null) => void;
  setEmail: (email: string | null) => void; // Add setEmail method
}

const AuthContext = createContext<AuthContextProps>({
  userId: null,
  email: null, // Set default value for email
  setUserId: () => {},
  setEmail: () => {}, // Set default function for setEmail
});

export default AuthContext;
