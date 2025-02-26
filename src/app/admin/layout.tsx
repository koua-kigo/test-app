"use client";

import { redirect } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { isAdmin } from "@/lib/auth";
import Sidebar from "@/components/admin/Sidebar";
import { SidebarProvider, useSidebar } from "@/components/admin/SidebarContext";

// Main content component
function AdminContent({ children }: { children: React.ReactNode }) {
  const { collapsed } = useSidebar();
  
  return (
    <>
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div 
        className={`transition-all duration-300 min-h-screen ${
          collapsed ? 'md:ml-20' : 'md:ml-64'
        }`}
      >
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <h1 className="text-lg font-semibold text-gray-900">Admin Dashboard</h1>
          </div>
        </header>

        {/* Main content */}
        <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </>
  );
}

// Main layout wrapper
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useUser();

  if (!user || !isAdmin(user)) {
    // Redirect non-admin users
    redirect("/");
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-gray-100">
        <AdminContent>{children}</AdminContent>
      </div>
    </SidebarProvider>
  );
}
