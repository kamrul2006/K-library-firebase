
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const SignupPage = () => {


  const { createUser } = useContext(AuthContext);


  const handleSignup = (e) => {
    e.preventDefault();
    // const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;


    createUser(email, password)
      .then(res => {
        console.log(res.user)
        e.target.reset();
      })
      .catch(error => console.log(error))

    // console.log('Signing up with', name, email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 via-blue-500 to-purple-600">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Create an Account</h2>

        <form onSubmit={handleSignup} className="space-y-6">

          {/*------------------------------------ Name Field */}
          <div className="">
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Full Name"
              required
            />
          </div>

          {/*----------------------------- Email Field */}
          <div className="">
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 "
              placeholder="Email Address"
              required
            />
          </div>

          {/* ----------------------------Password Field */}
          <div className="">
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 "
              placeholder="Password"
              required
            />

          </div>

          {/* -----------------------------------Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-green-400 transition duration-300 shadow-md"
          >
            Sign Up
          </button>
        </form>

        {/* -------------------------------------------Footer Text */}
        <p className="text-center text-gray-600 mt-6">
          Already have an account?
          <Link to="/login" className="text-blue-500 font-semibold hover:underline">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
