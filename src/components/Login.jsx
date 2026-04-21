import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "./index.js"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { loginWithRedirect, isAuthenticated, user, isLoading } = useAuth0();

  // 🔥 IMPORTANT
  const { register, handleSubmit } = useForm();

   useEffect(() => {
    if (isAuthenticated) {
      navigate("/admin"); // 🔥 direct admin
    }
  }, [isAuthenticated]);

  if (isLoading) return <p>Loading...</p>;

  // 🔥 Login function
  const login = async (data) => {
    console.log("LOGIN CALLED", data);

    try {
      const res = await fetch("http://localhost:8000/patient/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        console.log("Login Success", result);
      } else {
        setError(result.message || "Login Failed");
      }
    } catch (err) {
      console.log(err);
      setError("Server Error");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        
        <h2 className="text-2xl text-blue-600 text-center font-bold mb-6">
          Log In
        </h2>

        {/* 🔥 Error show */}
        {error && (
          <p className="text-red-600 mt-4 text-center">{error}</p>
        )}

        <form onSubmit={handleSubmit(login)} className="mt-6">
          <div className="space-y-5">

            <Input
              label="Name"
              type="text"
              placeholder="Enter name"
              {...register("name", { required: true })}
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter password"
              {...register("password", { required: true })}
            />

            <Button
              type="submit"
              className="w-full bg-blue-300 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Sign In
            </Button>

            {!isAuthenticated ? (
          <button
            onClick={() => loginWithRedirect()}
            className="w-full bg-red-500 text-white py-2 rounded-lg shadow hover:bg-red-700 transition"
          >
            Login with Google
          </button>

      ) : (
        <div className="text-center">
          <h3 className="text-lg font-semibold">
            Welcome {user.name}
          </h3>
          <img
          src={user.picture || "/default-user.png"}
          alt="profile"
        />
        </div>
      )}

          </div>
        </form>

        <div className="mt-4 text-center">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-blue-500 hover:underline"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;

// //form Validation ku jaurii ha....
// 🧠 Full Flow (step-by-step)
// 1️⃣ User form fill karta hai
// email + password dalta hai
// 2️⃣ handleSubmit(login) trigger hota hai

// 👉 React Hook Form kya karta hai:

// pehle validation check karta hai (jo tumne register me likha)
// agar error hai → login() call hi nahi hota
// agar sab sahi → login(data) call hota hai

// 👉 Frontend validation ka role
// empty input roke
// invalid email roke
// unnecessary API calls bachaye
// 👉 Backend ka role (MOST IMPORTANT)
// actual authentication
// security
// database check