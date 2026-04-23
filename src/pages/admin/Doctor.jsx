import React, { useState } from "react";

export default function Doctors() {
  const [doctors, setDoctors] = useState([
    { id: 1, name: "Dr. Sharma", specialization: "Cardiologist" },
    { id: 2, name: "Dr. Mehta", specialization: "Neurologist" },
  ]);

  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    specialization: "",
  });

  const filteredDoctors = doctors.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      setDoctors(
        doctors.map((doc) =>
          doc.id === editId ? { ...doc, ...form } : doc
        )
      );
    } else {
      setDoctors([...doctors, { id: Date.now(), ...form }]);
    }

    setForm({ name: "", specialization: "" });
    setShowModal(false);
    setEditId(null);
  };

  const handleEdit = (doc) => {
    setForm({ name: doc.name, specialization: doc.specialization });
    setEditId(doc.id);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    setDoctors(doctors.filter((doc) => doc.id !== id));
  };

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Doctors Management 👨‍⚕️
        </h2>

        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          + Add Doctor
        </button>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search doctor..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-4 p-2 border rounded-lg 
        bg-white text-black border-gray-300
        dark:bg-gray-800 dark:text-white dark:border-gray-600"
      />

      {/* Table */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-xl overflow-hidden">
        <table className="w-full text-gray-700 dark:text-gray-300">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="p-3">ID</th>
              <th>Name</th>
              <th>Specialization</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredDoctors.map((doc) => (
              <tr
                key={doc.id}
                className="border-t border-gray-200 dark:border-gray-700"
              >
                <td className="p-3">{doc.id}</td>
                <td>{doc.name}</td>
                <td>{doc.specialization}</td>

                <td className="space-x-2">
                  <button
                    onClick={() => handleEdit(doc)}
                    className="px-3 py-1 bg-yellow-400 rounded hover:bg-yellow-500"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(doc.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 🔥 Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl w-96 shadow-lg">
            
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              {editId ? "Edit Doctor" : "Add Doctor"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Doctor Name"
                className="w-full p-2 border rounded 
                bg-white text-black border-gray-300
                dark:bg-gray-700 dark:text-white dark:border-gray-600"
                required
              />

              <input
                name="specialization"
                value={form.specialization}
                onChange={handleChange}
                placeholder="Specialization"
                className="w-full p-2 border rounded 
                bg-white text-black border-gray-300
                dark:bg-gray-700 dark:text-white dark:border-gray-600"
                required
              />

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 dark:bg-gray-600 dark:text-white rounded"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  {editId ? "Update" : "Add"}
                </button>
              </div>
            </form>

          </div>
        </div>
      )}
    </div>
  );
}