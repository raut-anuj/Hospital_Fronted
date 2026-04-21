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
    <div>

      {/* Header */}
      <h2 className="text-3xl font-semibold mb-6">
        My Appointments 📅
      </h2>

      <p className="text-gray-500 mb-6">
        View your upcoming and past appointments
      </p>

      {/* Table */}
      <div className="bg-white shadow rounded-xl overflow-hidden">

        <table className="w-full text-left">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">ID</th>
              <th>Doctor</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {appointments.map((a) => (
              <tr key={a.id} className="border-t">

                <td className="p-3">{a.id}</td>
                <td>{a.doctor}</td>
                <td>{a.date}</td>
                <td>{a.time}</td>

                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      a.status === "Confirmed"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
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