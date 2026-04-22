import React from "react";

export default function MyPatients() {

  const patients = [
    { id: 1, name: "Rahul Sharma", age: 25, disease: "Fever", status: "Recovering" },
    { id: 2, name: "Ankit Verma", age: 32, disease: "Diabetes", status: "Stable" },
    { id: 3, name: "Priya Singh", age: 28, disease: "Cold", status: "Critical" },
  ];

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">

      <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-white">
        My Patients
      </h2>

      <div className="bg-white dark:bg-gray-800 shadow rounded-xl overflow-hidden">

        <table className="w-full text-left text-gray-700 dark:text-gray-300">

          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="p-3">ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Disease</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {patients.map((p) => (
              <tr key={p.id} className="border-t border-gray-200 dark:border-gray-700">

                <td className="p-3">{p.id}</td>
                <td>{p.name}</td>
                <td>{p.age}</td>
                <td>{p.disease}</td>

                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      p.status === "Critical"
                        ? "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300"
                        : "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300"
                    }`}
                  >
                    {p.status}
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