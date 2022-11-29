import cookie from 'cookie-cutter';

function Login() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const endpoint = '/api/login';

    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(endpoint, options);

    if (response.ok) {
      const result = await response.json();
      cookie.set('jwt', result?.token);
    }
  };
  return (
    <div className="flex h-screen bg-blue-500">
      <div className="container w-full mx-auto my-auto bg-white rounded-md shadow-xl sm:w-3/5 md:w-1/2 lg:w-2/5 xl:w-4/12">
        <form className="flex flex-col justify-center h-full px-16 py-16" onSubmit={handleSubmit}>
          <div className="my-4">
            <span className="text-2xl text-gray-700">
              Sign In
            </span>
          </div>
          <input type="text" name="username" required placeholder="Username" className="px-2 py-2 my-4 border border-gray-700 outline-none" />
          <input type="password" name="password" required placeholder="Password" className="px-2 py-2 my-4 border border-gray-700 outline-none" />
          <button type="submit" className="block px-6 py-2 my-4 text-white bg-blue-500 rounded-sm">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;
