import { DoctorSidebar } from "../components/index.js";
import { Outlet } from "react-router-dom";

export default function PatientLayout() {
  return (
    <div className="flex h-screen">
      <DoctorSidebar />

      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
