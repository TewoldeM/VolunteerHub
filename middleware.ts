import { NextRequest, NextResponse } from "next/server";
import { jwtVerify, JWTPayload } from "jose";
import { SignJWT } from "jose"; // Import SignJWT

const JWT_SECRET = process.env.JWT_SECRET || "A5xj97s5GiJHD0518ZI02XjZPQU328";
const REFRESH_TOKEN_SECRET =process.env.REFRESH_TOKEN_SECRET || "8ZI02XjZPQU328A5xj97s5GiJHD051";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const refreshToken = req.cookies.get("refreshToken")?.value;

  if (token) {
    try {
      const secret = new TextEncoder().encode(JWT_SECRET);
      const result = await jwtVerify(token, secret, {
        clockTolerance: 30, // Allow for 30 seconds of clock skew
      });

      const payload = result.payload as JWTPayload & {
        id: string;
        roles: string[];
        name: string;
      };
      req.nextUrl.searchParams.set("userId", payload.id);
      req.nextUrl.searchParams.set("name", payload.name);
      const pathname = req.nextUrl.pathname;
      // Route-based role checks
      if (pathname.startsWith("/VolunteerProfile/create-organization")) {
        return NextResponse.next();
      }
      if (pathname.startsWith("/VolunteerProfile/organization")) {
        return NextResponse.next();
      }
      if (
        pathname.startsWith("/VolunteerProfile/organization") &&
        !payload.roles?.includes("ORGANIZATION_ADMIN")
      ) {
        return NextResponse.redirect(new URL("/unauthorized", req.url));
      }

      // Refresh token logic if close to expiration
      const currentTime = Math.floor(Date.now() / 1000);
      const timeLeft = payload.exp ? payload.exp - currentTime : null;
      if (timeLeft !== null && timeLeft < 3600) {
        if (refreshToken) {
          const newToken = await refreshAuthToken(payload, refreshToken);
          const response = NextResponse.next();
          response.cookies.set({
            name: "token",
            value: newToken.token,
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            path: "/",
          });
          response.cookies.set({
            name: "refreshToken",
            value: newToken.refreshToken,
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            path: "/",
          });
          return response;
        } else {
          console.error("Refresh token is missing");
        }
      }

      return NextResponse.next();
    } catch (err: any) {
      if (err.code === "ERR_JWT_EXPIRED") {
        // Token expired, refresh it
        if (refreshToken) {
          const newToken = await refreshAuthToken(
            {
              id: req.nextUrl.searchParams.get("userId"),
              roles: [],
              name: req.nextUrl.searchParams.get("name"),
            },
            refreshToken
          );
          const response = NextResponse.next();
          response.cookies.set({
            name: "token",
            value: newToken.token,
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            path: "/",
          });
          response.cookies.set({
            name: "refreshToken",
            value: newToken.refreshToken,
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            path: "/",
          });
          return response;
        } else {
          console.error("Refresh token is missing");
        }
      } else {
        console.error("Token verification failed", err);
      }
    }
  }
  return NextResponse.redirect(new URL("/sign-in", req.url));
}

async function refreshAuthToken(payload: JWTPayload, refreshToken: string) {
  try {
    const newToken = await new SignJWT(payload)
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime(Math.floor(Date.now() / 1000) + 120 * 60 * 60) // Set expiration time to 5 days from now
      .sign(new TextEncoder().encode(JWT_SECRET));
    const newRefreshToken = await new SignJWT(payload)
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime(Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60) // Set expiration time to 30 days from now
      .sign(new TextEncoder().encode(REFRESH_TOKEN_SECRET));
    return { token: newToken, refreshToken: newRefreshToken };
  } catch (err: any) {
    console.error("Refresh token generation failed", err);
    throw err;
  }
}

export const config = {
  matcher: [
    "/VolunteerProfile/:path*",
    "/VolunteerProfile/organization/:path*",
  ],
};
