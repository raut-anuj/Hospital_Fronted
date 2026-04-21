import React from "react";
import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", icon: "🏠", path: "/doctor", exact: true },
  { name: "My Patient", icon: "🧑‍⚕️", path: "/doctor/MyPatient" },
  { name: "Schedule", icon: "📅", path: "/doctor/Schedule" },
  { name: "Appointments", icon: "📅", path: "/doctor/appointments" },
  { name: "Reports", icon: "📊", path: "/doctor/reports" },
];

export default function DoctorSidebar() {
  return (
     <aside className="w-64 h-screen bg-linear-to-b from-blue-950 via-blue-900 to-blue-800 text-white shadow-2xl flex flex-col">
       {/* Header */}
       <NavLink
         to="/doctor"
         end
         className="p-5 border-b border-white/10 block hover:bg-white/10 transition"
       >
         <h2 className="text-xl font-bold tracking-wide">🏥 Doctor </h2>
         <p className="text-xs text-white/60 mt-1">Hospital Care</p>
       </NavLink>
 
       {/* Navigation */}
       <nav className="flex-1 p-4 space-y-2">
         {menuItems.map((item, index) => (
           <NavLink
             key={index}
             to={item.path}
             end={item.exact || false}  
             className={({ isActive }) =>
               `w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                 isActive ? "bg-white/20" : "hover:bg-white/10"
               }`
             }
           >
             <span className="text-lg">{item.icon}</span>
             <span className="font-medium">{item.name}</span>
           </NavLink>
         ))}
       </nav>
 
       {/* Footer */}
       <div className="p-4 border-t border-white/10 text-xs text-white/50">
         © 2026 Hospital Admin
       </div>
     </aside>
   );
}