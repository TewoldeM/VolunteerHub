// "use client";

// import { createContext, useEffect, useState } from "react";
// import { jwtVerify } from "jose";
// import AuthContext from "@/app/lib/AuthContext";

// interface AuthProviderProps {
//   children: React.ReactNode;
// }

// const AuthProvider = ({ children }: AuthProviderProps) => {
//   const [userId, setUserId] = useState<string | null>(null);
//   const [email, setEmail] = useState<string | null>(null);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       const secret = process.env.NEXT_PUBLIC_JWT_SECRET; // Use the updated environment variable

//       if (!secret) {
//         console.log("JWT_SECRET is not defined");
//         return; // Exit early if the secret is not defined
//       }

//       const encodedSecret = new TextEncoder().encode(secret);
//       jwtVerify(token, encodedSecret)
//         .then((result: any) => {
//           const payload = result.payload;
//           setUserId(payload.id);
//           setEmail(payload.email);
//         })
//         .catch((err) => {
//           console.error("JWT verification failed:", err);
//         });
//     }
//   }, []);

//   return (
//     <AuthContext.Provider value={{ userId, email, setUserId, setEmail }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;
