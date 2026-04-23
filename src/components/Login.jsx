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
  const { register, handleSubmit } = useForm();

  //  useEffect(() => {
  //   if (isAuthenticated) {
  //     navigate("/admin"); // 🔥 direct admin
  //   }
  // }, [isAuthenticated]);

  // if (isLoading) return <p>Loading...</p>;

  // 🔥 Login function
  const login = async (data) => {
  console.log("LOGIN CALLED", data);

  try {
    const res = await fetch("http://localhost:8000/api/v1/auth/login", {
      
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        password: data.password,
      }),
    });

    console.log("STATUS:", res.status);

    const result = await res.json();

    console.log("RESULT:", result);

    if (res.ok) {
      console.log("Login Success", result);

      // 🔥 token save
      localStorage.setItem("token", result.token);

      // 🔥 role backend se aayega
      const role = result.user.role;

      // 🔥 redirect based on role
      if (role === "admin") {
        navigate("/admin");
      } else if (role === "doctor") {
        navigate("/doctor");
      } else {
        navigate("/patient");
      }

    } else {
      setError(result.message || "Login Failed");
    }

  } catch (err) {
    console.log(err);
    setError("Server Error");
  }
    }

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
              Log In
            </Button>

          <p className="font-semibold text-center">
            Or login with</p>

            {!isAuthenticated ? (

              //google button
          <button
  onClick={() => loginWithRedirect()}
  className="w-full flex items-center justify-center gap-2 bg-indigo-500 text-white py-2 rounded-lg shadow hover:bg-indigo-700 transition"
>
  {/* Google Icon (SVG) */}
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#EA4335"
      d="M12 11.8v2.9h6.6c-.3 1.7-2 5-6.6 5-4 0-7.3-3.3-7.3-7.3s3.3-7.3 7.3-7.3c2.3 0 3.8.9 4.7 1.7l2.3-2.3C17.3 3.6 14.9 2.5 12 2.5 6.8 2.5 2.5 6.8 2.5 12s4.3 9.5 9.5 9.5c5.5 0 9.1-3.9 9.1-9.4 0-.6-.1-1.1-.2-1.6H12z"
    />
  </svg>
  <span className="font-medium">Login with Google</span>
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
};


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