import { Outlet } from "react-router-dom";
import { Header, Footer, Sidebar } from "../components/index.js";

export default function AdminLayout() {
  return (
    <div className="h-screen flex overflow-hidden">
      <Sidebar />

      <main className="flex-1 p-8 overflow-y-auto">
        <Header />
        <Outlet />
      </main>
    </div>
  );
}