import AdminSidebar from "@/components/AdminSidebar";

export default function AdminLayout({ children }) {
  return <div className="flex min-h-screen"><AdminSidebar /><main className="flex-1 p-8 pt-24">{children}</main></div>;
}
