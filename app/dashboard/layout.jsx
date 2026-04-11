import DashboardSidebar from "@/components/DashboardSidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-surface text-on-surface">
      <DashboardSidebar />
      <main className="flex-1 overflow-y-auto p-4 md:p-8 pt-8 md:pt-10 w-full overflow-x-hidden">
        {children}
      </main>
    </div>
  );
}
