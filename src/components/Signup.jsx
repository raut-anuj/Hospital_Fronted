import React, {useState} from 'react'
import {Button, Input} from './index.js'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("")
  // const dispatch = useDispatch()
  const {register, handleSubmit} = useForm()

 const create = async (data) => {
  console.log("SIGNUP DATA:", data);

  try {
    const res = await fetch("http://localhost:8000/api/v1/patient/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log("STATUS:", res.status);
    
    const result = await res.json();
    console.log("BACKEND RESULT:", result);

    if (res.ok) {
      setError("");
      alert("Account created successfully");
      navigate("/login");
    } else {
      setError(result.message || "Signup failed");
    }
  } catch (err) {
    console.log(err);
    setError("Server error");
  }
};

return (
   <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 py-8">
      <div className="mt-5 mb-5 bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        
        <h2 className="text-2xl text-blue-600 text-center font-bold mb-6">
         Create Account
          </h2>
         
          <form onSubmit={handleSubmit(create)} className="mt-6">
          <div className="space-y-5">

            <Input
              label="Full Name"
              type="text"
              placeholder="Enter your full name"
              {...register("name",{ required: true })}
            />

            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                  required: true,
                  validate: {
                      matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                      "Email address must be a valid address",
                  }
              })}
              />
            
            <Input
              label="Password: "
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                  required: true,})}
              />

            <Input
              label="Confirm Password: "
              type="password"
              placeholder="Enter your password"
              {...register("confirmPassword", {
                  required: true,})}
              />
              

            <Button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Create Account
            </Button>

          </div>
        </form>

          <p className="mt-2 text-center text-base text-gray-600">
                    Already have an account?&nbsp;
                     <Link
                      to="/login"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      Log In
                     </Link>
                </p>
          {error && (
          <p className="text-red-600 mt-4 text-center">{error}</p>
        )}
    </div>
</div>
)}

export default Signup 