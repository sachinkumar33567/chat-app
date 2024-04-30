import { useState } from "react"
import useSignin from "../hooks/useSignin"

export default function Signin() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const {loading, signin} = useSignin()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signin(formData)
  }

  const handleChange = (e) => {
    const {id, value} = e.target
    setFormData({
      ...formData,
      [id]: value
    })
  }

  return (
    <div className="flex flex-col justify-center items-center min-w-96 mx-auto">
      <div className="p-6 w-full rounded-lg shadow-md bg-gray-400 bg-clip-padding
      backdrop-filter backdrop-blur-lg bg-opacity-0 ">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign In
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input type="text" placeholder="Enter Username"
            className="w-full input input-bordered h-10"
            id="username"
            value={formData.username}
            onChange={handleChange}
            required={true} />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input type="password" placeholder="Enter Password"
            className="w-full input input-bordered h-10"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required={true} />
          </div>
          <div className="my-3">
            <button type="submit" className="btn btn-block btn-sm mt-2">
              {loading ? <span className="loading loading-spinner"/> : 'Sign In'}
            </button>
          </div>
          <p className="text-sm">Don't have an account?
            <a href="/signup" className="text-blue-400"> Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  )
}
