import React, { useState } from "react";
import PatientSidebar from "../../components/paient/PatientSidebar";

export default function PatientAppointments() {
  const [appointments] = useState([
    {
      id: 1,
      doctor: "Dr. Sharma",
      date: "2026-04-22",
      time: "10:00 AM",
      status: "Confirmed",
    },
    {
      id: 2,
      doctor: "Dr. Khan",
      date: "2026-04-25",
      time: "12:30 PM",
      status: "Pending",
    },
  ]);

  return (
    <div className="p-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Header */}
      <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
        My Appointments
      </h2>

      <p className="text-gray-500 dark:text-gray-400 mb-6">
        View your upcoming and past appointments
      </p>

      {/* Table */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-xl overflow-hidden">
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
            {appointments.map((a) => (
              <tr
                key={a.id}
                className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <td className="p-3 text-gray-800 dark:text-gray-100">{a.id}</td>
                <td className="text-gray-800 dark:text-gray-100">{a.doctor}</td>
                <td className="text-gray-800 dark:text-gray-100">{a.date}</td>
                <td className="text-gray-800 dark:text-gray-100">{a.time}</td>
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      a.status === "Confirmed"
                        ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                        : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
                    }`}
                  >
                    {a.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
