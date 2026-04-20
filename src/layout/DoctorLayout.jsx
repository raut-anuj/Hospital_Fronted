import Sidebar from "../components/admin/Sidebar"

export default function AdminLayout({ children }) {
  return (
    <div className="h-screen flex overflow-hidden">
      <Sidebar />

      <main className="flex-1 p-8 overflow-y-auto bg-linear-to-br from-gray-50 to-gray-100">
        {children}
      </main>
    </div>
  );
}
