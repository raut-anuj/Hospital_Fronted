import React, { useState } from "react";

export default function Patients() {
  const [patients, setPatients] = useState([
    { id: 1, name: "Rahul Sharma", age: 25, disease: "Fever" },
    { id: 2, name: "Ankit Verma", age: 32, disease: "Diabetes" },
  ]);

  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({ name: "", age: "", disease: "" });

  const filtered = patients.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      setPatients(patients.map((p) => (p.id === editId ? { ...p, ...form } : p)));
    } else {
      setPatients([...patients, { id: Date.now(), ...form }]);
    }
    setForm({ name: "", age: "", disease: "" });
    setShowModal(false);
    setEditId(null);
  };

  const handleEdit = (p) => {
    setForm({ name: p.name, age: p.age, disease: p.disease });
    setEditId(p.id);
    setShowModal(true);
  };

  const handleDelete = (id) => setPatients(patients.filter((p) => p.id !== id));

  return (
    <div className="p-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Patients Management
        </h2>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          + Add Patient
        </button>
      </div>

      {/* Search */}
      <input
        className="w-full mb-4 p-2 border rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 dark:border-gray-700"
        placeholder="Search patient..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Table */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="p-3 text-gray-700 dark:text-gray-200">ID</th>
              <th className="text-gray-700 dark:text-gray-200">Name</th>
              <th className="text-gray-700 dark:text-gray-200">Age</th>
              <th className="text-gray-700 dark:text-gray-200">Disease</th>
              <th className="text-gray-700 dark:text-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p) => (
              <tr
                key={p.id}
                className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <td className="p-3 text-gray-800 dark:text-gray-100">{p.id}</td>
                <td className="text-gray-800 dark:text-gray-100">{p.name}</td>
                <td className="text-gray-800 dark:text-gray-100">{p.age}</td>
                <td className="text-gray-800 dark:text-gray-100">{p.disease}</td>
                <td className="space-x-2">
                  <button
                    onClick={() => handleEdit(p)}
                    className="px-3 py-1 bg-yellow-400 text-gray-900 rounded hover:bg-yellow-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(p.id)}
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

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl w-96">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
              {editId ? "Edit Patient" : "Add Patient"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Patient Name"
                className="w-full p-2 border rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 dark:border-gray-600"
                required
              />
              <input
                name="age"
                value={form.age}
                onChange={handleChange}
                placeholder="Age"
                className="w-full p-2 border rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 dark:border-gray-600"
                required
              />
              <input
                name="disease"
                value={form.disease}
                onChange={handleChange}
                placeholder="Disease"
                className="w-full p-2 border rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 dark:border-gray-600"
                required
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-100 rounded"
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
