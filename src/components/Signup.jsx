import React, {useState} from 'react'
import {Button, Input} from './index.js'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("")
  // const dispatch = useDispatch()
  const {register, handleSubmit} = useForm()

  const create = (data) => {
  console.log("SIGNUP DATA", data);
};

return (
   <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="mt-5 mb-5 bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        
        <h2 className="text-2xl text-blue-600 text-center font-bold mb-6">
         Create Account
          </h2>
         
          <form onSubmit={handleSubmit(create)} className="mt-6">
          <div className="space-y-5">

            <Input
              label="Full Name"
              type="text"
              placeholder="Enter your full name"
              {...register("name", { required: true })}
            />

            <Input
              label="Phone Number"
              type="text"
              placeholder="Enter your phone number"
              {...register("phone number", { required: true })}
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
              {...register("confirm password", {
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

          <p className="mt-2 text-center text-base text-black/60">
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