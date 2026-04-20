import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./pages/admin/Dashboard";
import AdminLayout from "./layout/AdminLayout";
import Doctors from "./pages/admin/Doctor";
import Patients from "./pages/admin/Patient";
import Appointments from "./pages/admin/Apointment"

export default function App() {
  return (
    <Routes>

      {/* Auth routes */}
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Admin routes */}
      <Route path="/admin" element={<AdminLayout />}>

        {/* default page → /admin */}
        <Route index element={<Dashboard />} />

        <Route path="doctors" element={<Doctors />} />
        <Route path="patients" element={<Patients />} />
        <Route path="appointments" element={<Appointments />} />

      </Route>

    </Routes>
  );
}
