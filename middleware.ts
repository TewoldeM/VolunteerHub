import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = process.env.JWT_SECRET || "A5xj97s5GiJHD0518ZI02XjZPQU328";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  if (token) {
    try {
      const secret = new TextEncoder().encode(JWT_SECRET);
      const result = await jwtVerify(token, secret);
      const payload = result.payload as { id: string; roles: string[] };
      req.nextUrl.searchParams.set("userId", payload.id); // Attach userId to the request
      const pathname = req.nextUrl.pathname;
      if (pathname.startsWith("/VolunteerProfile/create-organization")) {
        return NextResponse.next();
      }
      if (pathname.startsWith("/VolunteerProfile/organization")) {
        return NextResponse.next();
      }
      if (pathname.startsWith("/VolunteerProfile/organization/")) {
        return NextResponse.next();
      }
      if (
        pathname.startsWith("/VolunteerProfile/organization") &&
        !payload.roles.includes("ORGANIZATION_ADMIN")
      ) {
        return NextResponse.redirect(new URL("/unauthorized", req.url));
      }

      return NextResponse.next();
    } catch (err) {
      console.error("Token verification failed", err);
    }
  }
  return NextResponse.redirect(new URL("/sign-in", req.url));
}

export const config = {
  matcher: [
    "/VolunteerProfile/:path*",
    "/VolunteerProfile/organization/:path*",
  ],
};

// import { NextRequest, NextResponse } from "next/server";
// import { jwtVerify } from "jose";
// const JWT_SECRET = process.env.JWT_SECRET || "A5xj97s5GiJHD0518ZI02XjZPQU328";
// interface AuthContextProps {
//   userId: string | null;
//   setUserId: (userId: string | null) => void;
// }
// export async function middleware(req: NextRequest,) {
//   const token = req.cookies.get("token")?.value;
//   if (token) {
//     try {
//       const secret = new TextEncoder().encode(JWT_SECRET);
//       const result = await jwtVerify(token, secret);
//       const payload = result.payload as { id: string; roles: string[] };
//       req.nextUrl.searchParams.set("userId", payload.id); // Attach userId to the request
//       const pathname = req.nextUrl.pathname;
//       // Allow users to create an organization
//       if (pathname.startsWith("/VolunteerProfile/create-organization")) {
//         return NextResponse.next(); // Continue to create organization page
//       }
//       // Allow users to Manage an organization and this is Adminpage
//       if (pathname.startsWith("/VolunteerProfile/organization")) {
//         return NextResponse.next(); // Continue to create organization page
//       }
//       // Allow users to access their own organization
//       if (pathname.startsWith("/VolunteerProfile/organization/")) {
//         const organizationId = pathname.split("/").pop()?.split("/")[0];
//         // You may want to add additional checks here to ensure the user owns the organization
//         return NextResponse.next(); // Continue to organization page
//       }
//       // Role checks for specific routes
//       if (
//         pathname.startsWith("/VolunteerProfile/organization") &&
//         !payload.roles.includes("ORGANIZATION_ADMIN")
//       ) {
//         return NextResponse.redirect(new URL("/unauthorized", req.url));
//       }
//       return NextResponse.next(); // Continue if user has necessary role(s)
//     } catch (err) {
//       console.error("Token verification failed", err);
//     }
//   }
//   return NextResponse.redirect(new URL("/sign-in", req.url)); // Redirect if no valid token
// }
// export const config = {
//   matcher: [
//     "/VolunteerProfile/:path*",
//     "/VolunteerProfile/organization/:path*",
//   ],
// };
