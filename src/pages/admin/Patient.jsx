import React, { useState } from "react";

export default function Patients() {
  const [patients, setPatients] = useState([
    { id: 1, name: "Rahul Sharma", age: 25, disease: "Fever" },
    { id: 2, name: "Ankit Verma", age: 32, disease: "Diabetes" },
  ]);

  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    age: "",
    disease: "",
  });

  // 🔍 filter
  const filtered = patients.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  // ✍️ input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ➕ Add / Update
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      setPatients(
        patients.map((p) =>
          p.id === editId ? { ...p, ...form } : p
        )
      );
    } else {
      setPatients([
        ...patients,
        { id: Date.now(), ...form },
      ]);
    }

    setForm({ name: "", age: "", disease: "" });
    setShowModal(false);
    setEditId(null);
  };

  // ✏️ edit
  const handleEdit = (p) => {
    setForm({ name: p.name, age: p.age, disease: p.disease });
    setEditId(p.id);
    setShowModal(true);
  };

  // ❌ delete
  const handleDelete = (id) => {
    setPatients(patients.filter((p) => p.id !== id));
  };

  return (
    <div>

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">
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
        className="w-full mb-4 p-2 border rounded"
        placeholder="Search patient..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Table */}
      <div className="bg-white shadow rounded-xl overflow-hidden">
        <table className="w-full">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Disease</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((p) => (
              <tr key={p.id} className="border-t">

                <td className="p-3">{p.id}</td>
                <td>{p.name}</td>
                <td>{p.age}</td>
                <td>{p.disease}</td>

                <td className="space-x-2">
                  <button
                    onClick={() => handleEdit(p)}
                    className="px-3 py-1 bg-yellow-400 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(p.id)}
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

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
          
          <div className="bg-white p-6 rounded-xl w-96">

            <h2 className="text-xl font-semibold mb-4">
              {editId ? "Edit Patient" : "Add Patient"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3">

              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Patient Name"
                className="w-full p-2 border rounded"
                required
              />

              <input
                name="age"
                value={form.age}
                onChange={handleChange}
                placeholder="Age"
                className="w-full p-2 border rounded"
                required
              />

              <input
                name="disease"
                value={form.disease}
                onChange={handleChange}
                placeholder="Disease"
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