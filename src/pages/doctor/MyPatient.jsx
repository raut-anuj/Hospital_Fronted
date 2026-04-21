import React from "react";

export default function MyPatients() {

  const patients = [
    { id: 1, name: "Rahul Sharma", age: 25, disease: "Fever", status: "Recovering" },
    { id: 2, name: "Ankit Verma", age: 32, disease: "Diabetes", status: "Stable" },
    { id: 3, name: "Priya Singh", age: 28, disease: "Cold", status: "Critical" },
  ];

  return (
    <div>

      <h2 className="text-3xl font-semibold mb-6">
        My Patients 👨‍⚕️
      </h2>

      <div className="bg-white shadow rounded-xl overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-100">
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
              <tr key={p.id} className="border-t">

                <td className="p-3">{p.id}</td>
                <td>{p.name}</td>
                <td>{p.age}</td>
                <td>{p.disease}</td>

                <td>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    p.status === "Critical"
                      ? "bg-red-100 text-red-600"
                      : "bg-green-100 text-green-600"
                  }`}>
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