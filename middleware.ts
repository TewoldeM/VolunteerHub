import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  if (token) {
    try {
      const secret = new TextEncoder().encode(JWT_SECRET);
      const { payload } = await jwtVerify(token, secret);
      const decoded = payload as { id: string; roles: string[] };

      req.nextUrl.searchParams.set("userId", decoded.id); // Attach userId to the request

      const pathname = req.nextUrl.pathname;

      // Allow users to create an organization
      if (pathname.startsWith("/VolunteerProfile/create-organization")) {
        return NextResponse.next(); // Continue to create organization page
      }

      // Allow users to access their own organization
      if (pathname.startsWith("/VolunteerProfile/organization/")) {
        const organizationId = pathname.split("/").pop()?.split("/")[0];
        // You may want to add additional checks here to ensure the user owns the organization
        return NextResponse.next(); // Continue to organization page
      }

      // Role checks for specific routes
      if (
        pathname.startsWith("/VolunteerProfile/organization") &&
        !decoded.roles.includes("ORGANIZATION_ADMIN")
      ) {
        return NextResponse.redirect(new URL("/unauthorized", req.url));
      }

      return NextResponse.next(); // Continue if user has necessary role(s)
    } catch (err) {
      console.error("Token verification failed", err);
    }
  }

  return NextResponse.redirect(new URL("/sign-in", req.url)); // Redirect if no valid token
}

export const config = {
  matcher: [
    "/VolunteerProfile/:path*",
    "/VolunteerProfile/organization/:path*",
  ],
};
