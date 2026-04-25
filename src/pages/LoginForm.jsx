import React, { useState } from 'react'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [toggle, setToggle] = useState(false)
  const [hide, setHide] = useState(false)

  return (
    <div className={`min-h-screen ${toggle ? `bg-gray-900` : 'bg-gray-100'}`}>
      <button
        className='w-32 h-4 p-4 bg-green-500 text-white flex rounded-3xl justify-center items-center'
        onClick={() => { setToggle(!toggle) }}
      >
        Dark Mode
      </button>

      <div className="bg-white p-8 rounded-2xl mx-auto shadow-lg w-full max-w-md">

        <p>{!hide && 'enter your correct email and password'}</p>
        <button className='text-black' onClick={() => { setHide(!hide) }}>
          {hide ? "show" : "Hide"} Text
        </button>

        <h2 className="text-2xl font-bold text-center mb-6">
          Login
        </h2>

        <form className="space-y-4">

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Remember + Forgot */}
          <div className="flex justify-between items-center text-sm">
            <label>
              <input type="checkbox" className="mr-1" />
              Remember me
            </label>

            <a href="#" className="text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Button */}
          <button
            type="submit"
            onClick={() => { alert(`email : ${email} password: ${password}`) }}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>

        </form>

        {/* Signup Link */}
        <p className="text-center text-sm mt-4">
          Don't have an account?{" "}
          <span className="text-blue-500 cursor-pointer">
            Sign up
          </span>
        </p>

      </div>

    </div>
  );
}

export default LoginForm
