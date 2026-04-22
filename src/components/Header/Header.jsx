import React, { useState, useRef, useEffect } from "react";

export default function HospitalCareHeader() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const [darkMode, setDarkMode] = useState(false);

  // Close popup on outside click
  useEffect(() => {
    function handleClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
 }, [darkMode]); 

  return (
    <header className="bg-white border-b shadow-sm px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <span className="text-2xl"></span>
        <h1 className="text-3xl font-bold text-blue-500 tracking-wide">
          HospitalCare
        </h1>
      </div>
      
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700"
      >
        {darkMode ? "🌙" : "☀️"}
      </button>

      {/* Right: Hamburger + Popup */}
      {/* <div className="relative" ref={menuRef}>
        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded hover:bg-gray-100"
          aria-label="Theme menu"
        > */}
          {/* 3-line icon */}
          {/* <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg> */}
        {/* </button> */}

        {/* Small Popup */}
        {/* {open && (
          <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg z-20">
            <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
               Light Mode
            </button>
            <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
               Dark Mode
            </button>
          </div>
        )} */}
      {/* </div> */}
    </header>
  );
}

// Hamburger icon (3 lines) on the right.
