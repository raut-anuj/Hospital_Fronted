import React, { useState, useEffect } from "react";
import PatientSidebar from "../../components/paient/PatientSidebar";

export default function PatientAppointment() {

const [appointments, setAppointments] = useState([]);

useEffect(() => {
  const fetchAppointments = async () => {
    try {
      const res = await fetch(
        "http://localhost:8000/api/v1/patient/getAppointments?name=Anuj Kumar"
      );

      const data = await res.json();

      // ✅ Date wise sort (nearest first)
      const sortedAppointments = (data?.data || []).sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );

      console.log("APPOINTMENTS:", sortedAppointments);

      setAppointments(sortedAppointments);
    } catch (err) {
      console.log("ERROR:", err);
    }
  };

  fetchAppointments();
  }, []);
  
return (
    <div className="p-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
  {/* Header */}
  <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
    My Appointment
  </h2>

  <p className="text-gray-500 dark:text-gray-400 mb-6">
    View your upcoming and past appointments
  </p>

  {/* Table */}
  <div className="bg-white dark:bg-gray-800 shadow rounded-xl overflow-hidden mb-8">
    <table className="w-full text-left">
      <thead className="bg-gray-100 dark:bg-gray-700">
        <tr>
          <th className="p-3 text-gray-700 dark:text-gray-200">ID</th>
          <th className="text-gray-700 dark:text-gray-200">Doctor</th>
          <th className="text-gray-700 dark:text-gray-200">Date</th>
          <th className="text-gray-700 dark:text-gray-200">Time</th>
          <th className="text-gray-700 dark:text-gray-200">Status</th>
        </tr>
      </thead>

     <tbody>
  {Array.isArray(appointments) &&
    appointments.map((a, index) => (
      <tr
        key={a._id || a.id} // React ke liye unique key
        className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
      >
        {/* Display ke liye sequential number */}
        <td className="p-3 text-gray-800 dark:text-gray-100">{index + 1}</td>
        <td className="text-gray-800 dark:text-gray-100">
          {a.doctorId?.drname}</td>

        <td className="text-gray-800 dark:text-gray-100">
          {new Date(a.date).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </td>

        <td className="text-gray-800 dark:text-gray-100">
          {new Date(a.date).toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </td>

        <td>
          <span
            className={`px-3 py-1 rounded-full text-sm ${
              a.status === "completed"
                ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                : a.status === "scheduled"
                ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
            }`}
          >
            {a.status.toUpperCase()}
          </span>
        </td>
      </tr>
       ))}
      </tbody>
    </table>
  </div>

  {/* List View */}
  <div className="space-y-4">
    {Array.isArray(appointments) &&
      appointments.map((item) => (
        <div
          key={item._id || item.id}
          className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow"
        >
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            Patient: {item.patientId?.name || "Not Assigned"}
          </h3>
          <p className="text-gray-700 dark:text-gray-200">
            Doctor: {item.doctorId?.drname || "Not Assigned"}
          </p>
          <p className="text-gray-700 dark:text-gray-200">
            Status: {item.status}</p>
          <p className="text-gray-700 dark:text-gray-200">
            Amount: ₹{item.amount}</p>
        </div>
      ))}
  </div>
</div>

  );
}
