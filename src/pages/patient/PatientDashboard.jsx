import React from "react";
import { PatientSidebar } from "../../components/index.js";

export default function PatientDashboard() {
  return (
    <div>

      <h2 className="text-3xl font-semibold mb-6">
        Patients Dashboard 👥
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <h3>Total Patients</h3>
          <p className="text-2xl font-bold text-green-600">120</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3>New This Week</h3>
          <p className="text-2xl font-bold text-blue-600">12</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3>Critical Cases</h3>
          <p className="text-2xl font-bold text-red-600">3</p>
        </div>

      </div>

      {/* Table */}
      <div className="mt-6 bg-white p-4 rounded-xl shadow">
        <h3 className="font-semibold mb-3">Recent Patients</h3>

        <table className="w-full text-left">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Disease</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Rahul</td>
              <td>25</td>
              <td>Fever</td>
              <td>Active</td>
            </tr>
          </tbody>

        </table>
      </div>

    </div>
  );
}
