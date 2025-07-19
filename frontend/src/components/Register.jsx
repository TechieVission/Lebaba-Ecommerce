import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../redux/features/auth/authApi";

const Register = () => {
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [registerUser, { isLoading }] = useRegisterUserMutation();

  const navigate = useNavigate();

  const handleRegisterButton = async (e) => {
    e.preventDefault();
    const data = {
      username,
      email,
      password,
    };
    //console.log(data);

    try {
      await registerUser(data).unwrap();
      // alert("registration successful ");
      setMessage("registration successful ");
      navigate("/login");
    } catch (error) {
      setMessage("Registration failed");
    }
  };
  return (
    <section className="h-screen flex items-center justify-center">
      {/* Main container taking full height of the screen and centering content */}

      {/* Container for the login form with border, shadow, and padding */}
      <div className="max-w-sm border shadow bg-white mx-auto p-8">
        {/* Heading for the login form */}
        <h2 className="text-2xl font-semibold pt-5">Please Register</h2>

        {/* Form element with an onSubmit handler and spacing between elements */}
        <form
          onSubmit={handleRegisterButton}
          className="space-y-5 max-w-sm mx-auto pt-8"
        >
          {/* Username input field */}
          <input
            type="text"
            name="username"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="User Name"
            className="w-full bg-gray-100 focus:outline-none px-5 py-3"
            required // Ensures this field must be filled before submission
          />

          {/* Email input field */}
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="w-full bg-gray-100 focus:outline-none px-5 py-3"
            required // Ensures this field must be filled before submission
          />

          {/* Password input field */}
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-gray-100 focus:outline-none px-5 py-3"
            required // Ensures this field must be filled before submission
          />

          {/* Display an error message if there's an issue */}
          {message && <p className="text-red-500">{message}</p>}

          {/* Login button */}
          <button
            type="submit"
            className="w-full mt-5 bg-primary text-white hover:bg-indigo-500 font-medium py-3 rounded-md"
          >
            Register
          </button>
        </form>

        {/* Section for users who don’t have an account */}
        <p className="my-5 italic text-sm text-center">
          Have an account? Please
          <Link to="/login" className="text-primary px-1 underline">
            Login
          </Link>
          here.
          {/* Link to the registration page for new users */}
        </p>
      </div>
    </section>
  );
};

export default Register;
