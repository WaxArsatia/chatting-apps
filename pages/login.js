function Login() {
  return (
    <div className="flex h-screen bg-blue-500">
      <div className="w-1/4 mx-auto my-auto bg-white rounded-md shadow-xl h-2/3">
        <form className="flex flex-col justify-center h-full px-16 py-16">
          <div className="my-4">
            <span className="text-2xl text-gray-700">
              Sign In
            </span>
          </div>
          <div>
            <input type="username" placeholder="Username" className="px-2 py-2 my-4 border border-gray-700 outline-none" />
          </div>
          <div>
            <input type="password" placeholder="Password" className="px-2 py-2 my-4 border border-gray-700 outline-none" />
          </div>
          <div>
            <button type="submit" className="px-6 py-2 my-4 text-white bg-blue-500 rounded-sm">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
