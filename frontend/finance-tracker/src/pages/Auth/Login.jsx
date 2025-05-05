import React from 'react'
import { useState } from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import { useNavigate } from 'react-router-dom'
import Input from '../../components/inputs/Input'
import { ValidateEmail } from '../../utils/helper'
import { FiAlertCircle } from 'react-icons/fi'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  // handle login form submit
  const handleLogin = async (e) => {
    e.preventDefault()

    if (!ValidateEmail(email)) {
      setError("Please enter a valid email")
      return
    }

    if (!email || !password) {
      setError("Please fill in all fields")
      return
    }
    setError(null)

    if (!password) {
      setError("Please enter the password")
      return
    }

    setError("")

    //login api call

  }

  return (
    <AuthLayout>
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">
          Welcome Back!
        </h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Please login to your account
        </p>

        <form onSubmit={handleLogin}>
          <Input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            label="Email"
            placeholder="Enter your email"
            type="text"
          />

          <Input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            label="Password"
            placeholder="Enter your password"
            type="password"
          />

          {/* error message with red styling */}
          {error && (
            <div className="mt-2 flex items-center text-red-500 text-sm">
              <FiAlertCircle className="mr-2" />
              <p>{error}</p>
            </div>
          )}

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md mt-4 hover:bg-blue-700 transition duration-200">
            LOGIN
          </button>
        </form>

        <p className="text-xs text-slate-700 mt-4">
          Don't have an account? <span className="text-blue-600 cursor-pointer" onClick={() => navigate('/signup')}>Sign Up</span>
        </p>
      </div>
    </AuthLayout>
  )
}

export default Login