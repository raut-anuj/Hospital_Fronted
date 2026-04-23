import { Routes, Route } from "react-router-dom";
import { Login, Signup } from "./components/index.js";

import { AdminLayout, DoctorLayout, PatientLayout } from "./components/index.js";

//admin
import { Dashboard, AdminAppointments, Patients, Doctors } from "./components/index.js";

//doctor
import { DoctorDashboard, MyPatient, Schedule } from "./components/index.js";

//patient
import { PatientDashboard } from "./components/index.js"
import { PatientAppointment }from "./components/index.js";
import { ProtectedRoute } from "./components/index.js";

import { Unauthorized, Home } from "./components/index.js";

export default function App() {
  return (
    <Routes>
      
      <Route path="/" element={<Home />} />
      
      {/* Auth routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Admin routes */}
      <Route path="/admin" element={
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute> 
      }>

        {/* default page → /admin */}
        <Route index element={<Dashboard />} />

        <Route path="doctors" element={<Doctors />} />
        <Route path="patients" element={<Patients />} />
        <Route path="appointments" element={<AdminAppointments />} />

      </Route>

      {/* Doctor routes */}
      <Route path="/doctor" element={
         <ProtectedRoute>
        <DoctorLayout />
          </ProtectedRoute> 
      }>
      
      {/* yha  ph DoctorDashboard  yh name ho gh*/}
        {/* default page → /admin */}
        <Route index element={<DoctorDashboard  />} />
        <Route path="MyPatient" element={<MyPatient />} />
        <Route path="Schedule" element={<Schedule />} />
        {/* <Route path="appointments" element={<DoctorAppointments />} /> */}

      </Route>
      
      {/* Patient routes */}
      <Route path="/patient" element={
          <ProtectedRoute>
        <PatientLayout />
          </ProtectedRoute> 
        }>
      <Route index element={<PatientDashboard />} />
      <Route path="appointment" element={<PatientAppointment/>} />
    </Route>

      <Route path="/unauthorized" element={<Unauthorized />} />
      
    </Routes>
  );
}

//       <Route path="patients" element={<Patients />} />
//         <Route path="appointments" element={<Appointments />} />