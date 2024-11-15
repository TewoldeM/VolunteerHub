// Dashboard.tsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { currentUser } from "../lib/currentUser";

const Dashboard = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        // router.push("/sign-in"); // Redirect if no token
        console.log("no token found")
        return;
      }

      const user = await currentUser();
      if (!user) {
        // router.push("/sign-in"); // Redirect if no user is found
        console.log("no user found")
      } else {
        setEmail(user.email || "");
      }
      setLoading(false);
    };

    fetchUser();
  }, [router]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex flex-col justify-center items-center h-screen p-10">
      <div className="flex flex-col justify-center items-center p-20 gap-4 bg-gray-300 rounded-md shadow-md w-2/3">
        <h1 className="text-3xl font-bold mb-4">Welcome to your Dashboard!</h1>
        <h2 className="text-xl font-bold mb-4">Hello, User!</h2>
        <p className="text-lg mb-4">Your email address is: {email}</p>
        <div className="flex flex-row justify-center items-center gap-4">
          <Link href="/profile">
            <p className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
              View Profile
            </p>
          </Link>
          <Link href="/settings">
            <p className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
              Settings
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;













// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { currentUser } from "../lib/currentUser";

// const Dashboard = () => {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUser = async () => {
//       const user = await currentUser();
//       if (user) {
//         setEmail(user.email);
//       } else {
//         console.log("no user no dashboard");
//       }
//       setLoading(false);
//     };
  
//     fetchUser();
//   }, [router]);
//   // useEffect(() => {
//   //   const fetchUser = async () => {
//   //     const user = await currentUser();
//   //     if (!user) {
//   //       // router.push("/sign-in"); // Redirect if no user is found
//   //       console.log("no youser no dashbored")
//   //       setEmail(user.email || "");
//   //     }
//   //     setLoading(false);
//   //   };

//   //   fetchUser();
//   // }, [router]);

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div className="flex flex-col justify-center items-center h-screen p-10">
//       <div className="flex flex-col justify-center items-center p-20 gap-4 bg-gray-300 rounded-md shadow-md w-2/3">
//         <h1 className="text-3xl font-bold mb-4">Welcome to your Dashboard!</h1>
//         <h2 className="text-xl font-bold mb-4">Hello, User!</h2>
//         <p className="text-lg mb-4">Your email address is: {email}</p>
//         <div className="flex flex-row justify-center items-center gap-4">
//           <Link href="/profile">
//             <p className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
//               View Profile
//             </p>
//           </Link>
//           <Link href="/settings">
//             <p className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
//               Settings
//             </p>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
