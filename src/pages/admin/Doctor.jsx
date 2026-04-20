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

  // 🔍 Search filter
  const filteredDoctors = doctors.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  // ✍️ Input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ➕ Add / Update Doctor
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      setDoctors(
        doctors.map((doc) =>
          doc.id === editId ? { ...doc, ...form } : doc
        )
      );
    } else {
      setDoctors([
        ...doctors,
        { id: Date.now(), ...form },
      ]);
    }

    setForm({ name: "", specialization: "" });
    setShowModal(false);
    setEditId(null);
  };

  // ✏️ Edit
  const handleEdit = (doc) => {
    setForm({ name: doc.name, specialization: doc.specialization });
    setEditId(doc.id);
    setShowModal(true);
  };

  // ❌ Delete
  const handleDelete = (id) => {
    setDoctors(doctors.filter((doc) => doc.id !== id));
  };

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Doctors Management 👨‍⚕️</h2>

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
        className="w-full mb-4 p-2 border rounded-lg"
      />

      {/* Table */}
      <div className="bg-white shadow rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">ID</th>
              <th>Name</th>
              <th>Specialization</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredDoctors.map((doc) => (
              <tr key={doc.id} className="border-t">
                <td className="p-3">{doc.id}</td>
                <td>{doc.name}</td>
                <td>{doc.specialization}</td>

                <td className="space-x-2">
                  <button
                    onClick={() => handleEdit(doc)}
                    className="px-3 py-1 bg-yellow-400 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(doc.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded"
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
          <div className="bg-white p-6 rounded-xl w-96">
            <h2 className="text-xl font-semibold mb-4">
              {editId ? "Edit Doctor" : "Add Doctor"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Doctor Name"
                className="w-full p-2 border rounded"
                required
              />

              <input
                name="specialization"
                value={form.specialization}
                onChange={handleChange}
                placeholder="Specialization"
                className="w-full p-2 border rounded"
                required
              />

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 rounded"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded"
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