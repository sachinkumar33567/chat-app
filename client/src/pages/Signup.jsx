import { useState } from "react"
import useSignup from "../hooks/useSignup"

export default function Signup() {
  const [formData, setFormData] = useState({
    fullName: '',
    password: '',
    confirmPassword: '',
    gender: ''
  })

  const {loading, signup} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup(formData)
  }

  const handleChange = (e) => {
    const {id, value} = e.target
    setFormData({
      ...formData,
      [id] : value
    })

    if (id === 'male' || id === 'female') {
      setFormData({
        ...formData,
        gender: id
      })
    }
  }

  return (
    <div className="flex flex-col justify-center items-center min-w-96 mx-auto">
      <div className="p-6 w-full rounded-lg shadow-md bg-gray-400 bg-clip-padding
      backdrop-filter backdrop-blur-lg bg-opacity-0 ">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input type="text" placeholder="Enter Full Name"
            className="w-full input input-bordered h-10"
            id='fullName'
            value={formData.fullName}
            onChange={handleChange}
            required={true} />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input type="password" placeholder="Enter Password"
            className="w-full input input-bordered h-10"
            id='password'
            value={formData.password}
            onChange={handleChange}
            required={true} />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input type="password" placeholder="Enter Confirm Password"
            className="w-full input input-bordered h-10"
            id='confirmPassword'
            value={formData.confirmPassword}
            onChange={handleChange}
            required={true} />
          </div>
          <div className="flex gap-6 mt-2 px-2">
            <div className="flex gap-2 items-center">
              <input
              id='male'
              checked={formData.gender === 'male'}
              onChange={handleChange}
              type="checkbox" className="h-4 w-4"/>
              <p>Male</p>
            </div>
            <div className="flex gap-2 items-center">
              <input
              id='female'
              checked={formData.gender === 'female'}
              onChange={handleChange}
              type="checkbox" className="h-4 w-4"/>
              <p>Female</p>
            </div>
          </div>
          <div className="my-3">
            <button className="btn btn-block btn-sm mt-2" disabled={loading}>
              {loading ? <span className="loading loading-spinner"/> : 'Sign Up'}
            </button>
          </div>
          <p className="text-sm">Already have an account?
            <a href="/signin" className="text-blue-400"> Sign In</a>
          </p>
        </form>
      </div>
    </div>
  )
}
