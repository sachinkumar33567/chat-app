export default function Signin() {
  return (
    <div className="flex flex-col justify-center items-center min-w-96 mx-auto">
      <div className="p-6 w-full rounded-lg shadow-md bg-gray-400 bg-clip-padding
      backdrop-filter backdrop-blur-lg bg-opacity-0 ">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign In
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input type="text" placeholder="Enter Username"
            className="w-full input input-bordered h-10"
            id="username"
            required={true} />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input type="password" placeholder="Enter Password"
            className="w-full input input-bordered h-10"
            id="password"
            required={true} />
          </div>
          <div className="my-3">
            <button type="submit" className="btn btn-block btn-sm mt-2">
              Sign In
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
