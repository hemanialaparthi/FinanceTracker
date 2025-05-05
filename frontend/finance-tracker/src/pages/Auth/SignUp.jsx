import React from 'react'
import { useState } from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import { useNavigate } from 'react-router-dom'
import Input from '../../components/inputs/Input'
import { ValidateEmail } from '../../utils/helper'
import ProfilePhotoSelector from '../../components/inputs/ProfilePhotoSelector'
import { FiAlertCircle } from 'react-icons/fi'

const Signup = () => {
  const [profilePic, setProfilePic] = useState(null)
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [error, setError] = useState(null)

  const navigate = useNavigate()

  // handle signup form submit
  const handleSignUp = async (e) => {
    e.preventDefault()

    let profilePicUrl = ""

    if (!fullName) {
      setError("Please enter your full name")
      return
    }

    if (!ValidateEmail(email)) {
      setError("Please enter a valid email")
      return
    }

    if (!email || !password || !fullName) {
      setError("Please fill in all fields")
      return
    }
    setError(null)

    if (!password) {
      setError("Please enter the password")
      return
    }

    setError("")

    //signup api call

  }


  return (
    <AuthLayout>
      <div className=''>
        <h3 className='text-xl font-semibold text-black'>
          Create an Account
        </h3>
        <p className='text-xs text-slate-700 mt-[5px] mb-6'>
          Please fill in the details to create an account
        </p>

        <form onSubmit={handleSignUp}>

          <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Input
              value={fullName}
              onChange={({ target }) => setFullName(target.value)}
              label="Full Name"
              placeholder="Enter your full name"
              type="text"
            />

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
          </div>
          {error && (
            <div className="mt-2 flex items-center text-red-500 text-sm">
              <FiAlertCircle className="mr-2" />
              <p>{error}</p>
            </div>
          )}

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md mt-4 hover:bg-blue-700 transition duration-200">
            SIGN UP
          </button>

          <p className="text-xs text-slate-700 mt-4">
            Already have an account? <span className="text-blue-600 cursor-pointer" onClick={() => navigate('/login')}>Login</span>
          </p>

        </form>
      </div>
    </AuthLayout>
  )
}

export default Signup