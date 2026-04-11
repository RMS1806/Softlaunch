import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname } = req.nextUrl;
  const isLoggedIn = req.cookies.get("isLoggedIn")?.value === "true";
  const isAdmin = req.cookies.get("isAdmin")?.value === "true";
  if (pathname.startsWith("/dashboard") && !isLoggedIn) return NextResponse.redirect(new URL("/login", req.url));
  if (pathname.startsWith("/admin") && !isAdmin) return NextResponse.redirect(new URL("/login", req.url));
  if ((pathname === "/login" || pathname === "/register") && isLoggedIn) return NextResponse.redirect(new URL("/dashboard", req.url));
  return NextResponse.next();
}

export const config = { matcher: ["/dashboard/:path*", "/admin/:path*", "/login", "/register"] };
