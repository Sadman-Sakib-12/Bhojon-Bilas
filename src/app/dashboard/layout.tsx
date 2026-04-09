import Sidebar from "@/components/layout/Sidebar";
import DashboardNavbar from "@/components/layout/DashboardNavbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* বাম পাশে ফিক্সড সাইডবার */}
      <Sidebar />

      {/* ডান পাশে মেইন এরিয়া */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* উপরে ফিক্সড নেভবার */}
        <DashboardNavbar />

        {/* নিচে স্ক্রলযোগ্য কন্টেন্ট */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}