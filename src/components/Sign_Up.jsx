import React from 'react'
import { Link } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import { useForm } from "react-hook-form";
v
function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("")
  const dispatch = useDispatch()
  const {register, handleSubmit} = useForm()
}

return (
   <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        
        <h2 className="text-2xl text-blue-600 text-center font-bold mb-6">
         Create Account
          </h2>

          <h2 className="mt-4 text-center">
          Already have an account?</h2>
          <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
          {error && (
          <p className="text-red-600 mt-4 text-center">{error}</p>
        )}
         
          <form onSubmit={handleSubmit(create)} className="mt-6">
          <div className="space-y-5">

            <Input
              label="Full Name"
              type="text"
              placeholder="full name"
              {...register("name", { required: true })}
            />

            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                  required: true,
                  validate: {
                      matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
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

            <Button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Create Account
            </Button>

          </div>
        </form>
    </div>
</div>
)

export default Sign_Up