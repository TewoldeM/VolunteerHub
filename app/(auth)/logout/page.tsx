import { redirect } from "next/navigation";

const Logout = async () => {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/auth/logout`, {
      method: "DELETE",
      credentials: "include",
    });

    if (!res.ok) {
      console.error("Failed to logout:", await res.text());
      return { error: "Failed to logout" };
    }

    // Redirect to sign-in page on successful logout
    redirect("/sign-in");
  } catch (err:any) {
    // Only log unexpected errors, not NEXT_REDIRECT
    if (err.message !== "NEXT_REDIRECT") {
      console.error("An error occurred during logout:", err);
      return { error: "An error occurred during logout" };
    }
    // Rethrow NEXT_REDIRECT to allow Next.js to handle the redirect
    throw err;
  }
};

export default Logout;
