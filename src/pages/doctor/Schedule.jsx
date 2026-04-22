import React from "react";

export default function DoctorSchedule() {
  const schedule = [
    { patient: "Anuj Kumar", day: "Tuesday", date: "22 Apr 2026", time: "10:00 AM", status: "Upcoming" },
    { patient: "Riya Sharma", day: "Tuesday", date: "22 Apr 2026", time: "12:00 PM", status: "Completed" },
    { patient: "Amit Verma", day: "Tuesday", date: "22 Apr 2026", time: "03:00 PM", status: "Cancelled" },
    { patient: "Neha Gupta", day: "Wednesday", date: "23 Apr 2026", time: "11:00 AM", status: "Upcoming" },
  ];

  const statusBadge = (status) => {
    switch (status) {
      case "Upcoming":
        return <span className="bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 px-2 py-1 rounded">Upcoming</span>;
      case "Completed":
        return <span className="bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300 px-2 py-1 rounded">Completed</span>;
      case "Cancelled":
        return <span className="bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300 px-2 py-1 rounded">Cancelled</span>;
      default:
        return <span className="bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 px-2 py-1 rounded">{status}</span>;
    }
  };

  return (
    <div className="p-8 flex-1 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">Doctor Schedule</h2>

      {/* Schedule Table */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="p-3 text-gray-700 dark:text-gray-200">Patient</th>
              <th className="p-3 text-gray-700 dark:text-gray-200">Day</th>
              <th className="p-3 text-gray-700 dark:text-gray-200">Date</th>
              <th className="p-3 text-gray-700 dark:text-gray-200">Time</th>
              <th className="p-3 text-gray-700 dark:text-gray-200">Status</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <td className="p-3 text-gray-800 dark:text-gray-100">{item.patient}</td>
                <td className="p-3 text-gray-800 dark:text-gray-100">{item.day}</td>
                <td className="p-3 text-gray-800 dark:text-gray-100">{item.date}</td>
                <td className="p-3 text-gray-800 dark:text-gray-100">{item.time}</td>
                <td className="p-3">{statusBadge(item.status)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

