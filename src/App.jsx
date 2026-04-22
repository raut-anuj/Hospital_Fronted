import { Routes, Route } from "react-router-dom";
import { Login, Signup } from "./components/index.js";

import { AdminLayout, DoctorLayout, PatientLayout } from "./components/index.js";

//admin
import { Dashboard, AdminAppointments, Patients, Doctors } from "./components/index.js";

//doctor
import { DocotrDashboard, MyPatient, Schedule } from "./components/index.js";

//patient
import { PatientAppointments, PatientDashboard } from "./components/index.js"

import { ProtectedRoute } from "./components/index.js";

export default function App() {
  return (
    <Routes>

      {/* Auth routes */}
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Admin routes */}
      <Route path="/admin" element={
      // <ProtectedRoute>
        <AdminLayout />
      /* </ProtectedRoute> */
        }>

        {/* default page → /admin */}
        <Route index element={<Dashboard />} />

        <Route path="doctors" element={<Doctors />} />
        <Route path="patients" element={<Patients />} />
        <Route path="appointments" element={<AdminAppointments />} />

      </Route>

      {/* Doctor routes */}
      <Route path="/doctor" element={<DoctorLayout />}>
      
        {/* default page → /admin */}
        <Route index element={<DocotrDashboard />} />
        <Route path="MyPatient" element={<MyPatient />} />
        <Route path="Schedule" element={<Schedule />} />
        {/* <Route path="appointments" element={<DoctorAppointments />} /> */}

      </Route>
      
      {/* Patient routes */}
      <Route path="/patient" element={<PatientLayout />}>
      <Route index element={<PatientDashboard />} />
      <Route path="Appoinment" element={<PatientAppointments />} />
    </Route>

    </Routes>
  );
}

//       <Route path="patients" element={<Patients />} />
//         <Route path="appointments" element={<Appointments />} />