import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "A5xj97s5GiJHD0518ZI02XjZPQU328";
export async function GET(req: NextRequest) {
  // Ensure JWT_SECRET is defined
  if (!JWT_SECRET) {
    console.error("JWT_SECRET is not defined");
    return NextResponse.json(
      { message: "Server configuration error" },
      { status: 500 }
    );
  }

  // Get token from cookies
  const token = req.cookies.get("token")?.value;

  // Case 1: No token (user likely not signed up)
  if (!token) {
    return NextResponse.json(
      { message: "Please sign up or log in to access this resource" },
      { status: 403 } // Use 403 to indicate access is forbidden without signup/login
    );
  }

  // Case 2: Token exists, verify it
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log("Decoded:", decoded); // Debug: Log decoded token
    return NextResponse.json(decoded); // Return user data for valid token
  } catch (error: any) {
    console.error("JWT Error:", error.message); // Debug: Log error details
    return NextResponse.json(
      { message: "Invalid or expired token", error: error.message },
      { status: 401 } // Use 401 for invalid token
    );
  }
}
