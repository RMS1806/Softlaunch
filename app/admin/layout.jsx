import AdminSidebar from "@/components/AdminSidebar";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// Hardcoded admin emails — must match the list in actions.js
const ADMIN_EMAILS = [
  "admin@finova.com",
  // Add more admin emails here
];

export default function AdminLayout({ children }) {
  const cookieStore = cookies();
  const sessionEmail = cookieStore.get("session_email")?.value;

  // Redirect to login if not logged in
  if (!sessionEmail) {
    redirect("/login");
  }

  // Redirect to dashboard if not admin
  if (!ADMIN_EMAILS.includes(sessionEmail.toLowerCase())) {
    redirect("/dashboard");
  }

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-8 pt-24">{children}</main>
    </div>
  );
}
