import React from "react";
import { PatientSidebar } from "../../components/index.js";

export default function PatientDashboard() {
  return (
    <div className="p-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
        Patients Dashboard
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <h3 className="text-gray-700 dark:text-gray-200">Total Patients</h3>
          <p className="text-2xl font-bold text-green-600">120</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <h3 className="text-gray-700 dark:text-gray-200">New This Week</h3>
          <p className="text-2xl font-bold text-blue-600">12</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <h3 className="text-gray-700 dark:text-gray-200">Critical Cases</h3>
          <p className="text-2xl font-bold text-red-600">3</p>
        </div>
      </div>

      {/* Table */}
      <div className="mt-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
        <h3 className="font-semibold mb-3 text-gray-800 dark:text-gray-100">
          Recent Patients
        </h3>

        <table className="w-full text-left">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="text-gray-700 dark:text-gray-200">Name</th>
              <th className="text-gray-700 dark:text-gray-200">Age</th>
              <th className="text-gray-700 dark:text-gray-200">Disease</th>
              <th className="text-gray-700 dark:text-gray-200">Status</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
            <td className="p-1 text-gray-800 dark:text-gray-100">Rahul</td>
            <td className="p-1 text-gray-800 dark:text-gray-100">25</td>
            <td className="p-1 text-gray-800 dark:text-gray-100">Fever</td>
            <td>
          <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
        Active
      </span>
    </td>
           </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
