import { NextResponse } from "next/server";

/**
 * Simple cookie-based session check.
 * No Supabase Auth — just checks for our custom "session_email" cookie.
 */
export async function updateSession(request) {
  const { pathname } = request.nextUrl;
  const sessionEmail = request.cookies.get("session_email")?.value;

  // Protect Dashboard routes — redirect to login if no session
  if (pathname.startsWith("/dashboard") && !sessionEmail) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Protect Admin routes — redirect to login if no session
  if (pathname.startsWith("/admin") && !sessionEmail) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Prevent logged-in users from seeing Auth pages
  if ((pathname === "/login" || pathname === "/register") && sessionEmail) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}
