import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HospitalCareHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef();

  // Close profile dropdown on outside click
  useEffect(() => {
    function handleClick(e) {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    }
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <header className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white text-lg font-bold shadow">
                HC
              </div>
              <div>
                <div className="text-lg font-semibold text-slate-800">HospitalCare</div>
                <div className="text-xs text-slate-500 -mt-0.5">Patient & Clinician Portal</div>
              </div>
            </Link>
          </div>

          {/* Center: Search (hidden on very small screens) */}
          <div className="flex-1 px-4 hidden sm:flex justify-center">
            <div className="w-full max-w-2xl">
              <label htmlFor="site-search" className="sr-only">Search</label>
              <div className="relative">
                <svg className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                </svg>
                <input
                  id="site-search"
                  type="search"
                  placeholder="Search patients, doctors, reports..."
                  className="w-full border rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-4 text-sm text-slate-700">
              <Link to="/dashboard" className="px-3 py-2 rounded hover:bg-slate-50">Dashboard</Link>
              <Link to="/doctors" className="px-3 py-2 rounded hover:bg-slate-50">Doctors</Link>
              <Link to="/patients" className="px-3 py-2 rounded hover:bg-slate-50">Patients</Link>
              <Link to="/appointments" className="px-3 py-2 rounded hover:bg-slate-50">Appointments</Link>
            </nav>

            {/* Icons */}
            <div className="flex items-center gap-3">
              <button
                aria-label="Notifications"
                className="relative p-2 rounded hover:bg-slate-50"
                title="Notifications"
              >
                <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs px-1 rounded-full">3</span>
              </button>

              <button
                aria-label="Messages"
                className="relative p-2 rounded hover:bg-slate-50"
                title="Messages"
              >
                <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4-.84L3 20l1.16-4.84A9.863 9.863 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs px-1 rounded-full">2</span>
              </button>
            </div>

            {/* Profile */}
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setProfileOpen((s) => !s)}
                className="flex items-center gap-2 px-3 py-1 rounded hover:bg-slate-50"
                aria-expanded={profileOpen}
                aria-haspopup="true"
              >
                <img src="/default-user.png" alt="avatar" className="w-8 h-8 rounded-full border" />
                <div className="text-left">
                  <div className="text-sm font-medium text-slate-800">Anuj</div>
                  <div className="text-xs text-slate-500">Doctor</div>
                </div>
                <svg className="w-4 h-4 text-slate-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.12 1L10.56 13.5a.75.75 0 01-1.12 0L5.21 8.27a.75.75 0 01.02-1.06z" />
                </svg>
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-20">
                  <Link to="/profile" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">Profile</Link>
                  <Link to="/settings" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">Settings</Link>
                  <div className="border-t" />
                  <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-slate-50">Logout</button>
                </div>
              )}
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2 rounded hover:bg-slate-50"
              aria-label="Open menu"
            >
              <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile slide-in menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-30">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <aside className="absolute right-0 top-0 h-full w-72 bg-white shadow-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-md bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold">HC</div>
                <div>
                  <div className="font-semibold text-slate-800">HospitalCare</div>
                  <div className="text-xs text-slate-500">Portal</div>
                </div>
              </div>
              <button onClick={() => setMobileOpen(false)} className="p-2 rounded hover:bg-slate-100">
                ✕
              </button>
            </div>

            <nav className="flex flex-col gap-2">
              <Link to="/dashboard" className="px-3 py-2 rounded hover:bg-slate-50">Dashboard</Link>
              <Link to="/doctors" className="px-3 py-2 rounded hover:bg-slate-50">Doctors</Link>
              <Link to="/patients" className="px-3 py-2 rounded hover:bg-slate-50">Patients</Link>
              <Link to="/appointments" className="px-3 py-2 rounded hover:bg-slate-50">Appointments</Link>
              <Link to="/reports" className="px-3 py-2 rounded hover:bg-slate-50">Reports</Link>
              <Link to="/billing" className="px-3 py-2 rounded hover:bg-slate-50">Billing</Link>
            </nav>

            <div className="mt-6 border-t pt-4">
              <Link to="/profile" className="block px-3 py-2 rounded hover:bg-slate-50">Profile</Link>
              <Link to="/settings" className="block px-3 py-2 rounded hover:bg-slate-50">Settings</Link>
              <button className="w-full text-left px-3 py-2 text-red-600 rounded hover:bg-slate-50">Logout</button>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}
