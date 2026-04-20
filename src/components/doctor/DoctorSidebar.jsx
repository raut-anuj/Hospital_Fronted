
import React from "react";

const menuItems = [
  { name: "Doctors", icon: "👨‍⚕️" },
  { name: "Patients", icon: "🧑‍🤝‍🧑" },
  { name: "Appointments", icon: "📅" },
];

export default function Sidebar() {
  return (
   <aside className="w-64 h-screen bg-linear-to-b from-blue-950 via-blue-900 to-blue-800 text-white shadow-2xl flex flex-col">
      
      {/* Header */}
      <div className="p-5 border-b border-white/10">
        <h2 className="text-xl font-bold tracking-wide">
          🏥 Admin Panel
        </h2>
        <p className="text-xs text-white/60 mt-1">
          Hospital Management System
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left 
                       hover:bg-white/10 active:scale-[0.98] transition-all duration-200"
          >
            <span className="text-lg">{item.icon}</span>
            <span className="font-medium">{item.name}</span>
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-white/10 text-xs text-white/50">
        © 2026 Hospital Admin
      </div>
    </aside>
  );
}