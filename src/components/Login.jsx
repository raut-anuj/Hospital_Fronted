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
 const { register, handleSubmit, formState: { errors } } = useForm();
  const loggedUser = JSON.parse(localStorage.getItem("user"));
    
  // 🔥 Login function
const login = async (data) => {
  try {
    const res = await fetch("http://localhost:8000/api/v1/patient/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });

    const text = await res.text();

    let result;
    try {
      result = JSON.parse(text);
    } catch {
      result = {
        message: "Backend returned invalid response",
      };
    }

    console.log("STATUS:", res.status);
    console.log("RESULT:", result);

    if (res.ok && result?.data?.user && result?.data?.token) {
      console.log("USER:", result?.data?.user);
      console.log("TOKEN:", result?.data?.token);
      console.log("OK:", res.ok);
      localStorage.setItem("user", JSON.stringify(result.data.user));
      localStorage.setItem("token", result.data.token);

    navigate("/patient");
  }
 else {
      setError(result?.message || "Login Failed");
    }
  } catch (err) {
    console.error(err);
    setError("Server Error");
  }
};

return (
  <div className="flex justify-center items-center h-screen bg-gray-100">
    <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
      <h2 className="text-2xl text-blue-600 text-center font-bold mb-6">
        Log In
      </h2>

      {error && <p className="text-red-600 mt-4 text-center">{error}</p>}

      <form onSubmit={handleSubmit(login)} className="mt-6">
        <div className="space-y-5">
          <Input
            label="Email"
            type="text"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
            })}
          />

          {errors.email && (
            <p className="text-red-500 text-sm -mt-3">
              {errors.email.message}
            </p>
          )}

          <Input
          label="Password"
          type="password"
          placeholder="Enter password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 3,
              message: "Password must be at least 3 characters",
            },
          })}
        />

        {errors.password && (
          <p className="text-red-500 text-sm -mt-3">
            {errors.password.message}
          </p>
        )}

          <Button
            type="submit"
            className="w-full bg-blue-300 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Log In
          </Button>

          <div className="text-center">
            <p className="mt-6 mb-3 font-medium">Or login with</p>

            <button
              type="button"
              onClick={() =>
                loginWithRedirect({
                  appState: {
                    returnTo: "/patient",
                  },
                })
              }
              className="w-full flex items-center justify-center gap-2 bg-indigo-500 text-white py-2 rounded-lg shadow hover:bg-indigo-700 transition"
            >
              Login with Google
            </button>

            {loggedUser && (
              <div className="text-center mt-6">
                <p className="font-semibold text-lg">
                  Welcome {loggedUser.name}
                </p>

                {loggedUser.profile && (
                  <img
                    src={loggedUser.profile}
                    alt="profile"
                    className="w-14 h-14 rounded-full mx-auto mt-2 object-cover"
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </form>

      <div className="mt-4 text-center">
        Don&apos;t have any account?&nbsp;
        <Link
          to="/signUp"
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