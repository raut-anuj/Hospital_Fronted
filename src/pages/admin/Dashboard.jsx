import React from "react";
import Sidebar from "../../components/admin/Sidebar";

const stats = [
  {
    title: "Total Doctors",
    value: "45",
    change: "+5 this week",
    color: "text-green-600",
  },
  {
    title: "Total Patients",
    value: "120",
    change: "+12 this week",
    color: "text-blue-600",
  },
  {
    title: "Appointments",
    value: "30",
    change: "Next: 3 today",
    color: "text-purple-600",
  },
];

export default function Dashboard() {
  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800">
          Dashboard <span className="ml-1"></span>
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          Welcome back, Admin. Here’s your overview.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <h3 className="text-lg font-medium text-gray-700">
              {item.title}
            </h3>

            <p className={`text-4xl font-bold mt-2 ${item.color}`}>
              {item.value}
            </p>

            <span className="text-sm text-gray-500 mt-1 block">
              {item.change}
            </span>
          </div>
        ))}
      </div>
    </>
  );
} 