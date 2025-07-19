import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../redux/features/auth/authApi";
import { setUser } from "../redux/features/auth/authSlice";

const Login = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const [loginUser, { isLoading: loginLoading }] = useLoginUserMutation();
  const navigate = useNavigate();

  //handle login
  const handleLoginButton = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };

    try {
      const response = await loginUser(data).unwrap();

      const { token, user } = response;
      dispatch(setUser({ user }));

      //console.log(response);
      alert("Login successfully");
      navigate("/");
    } catch (error) {
      setMessage("Please provide a valid email and password");
    }
  };

  return (
    <section className="h-screen flex items-center justify-center">
      <div className="max-w-sm border shadow bg-white mx-auto p-8">
        <h2 className="text-2xl font-semibold pt-5">Please Login</h2>

        {/* Form element with an onSubmit handler and spacing between elements */}
        <form
          onSubmit={handleLoginButton}
          className="space-y-5 max-w-sm mx-auto pt-8"
        >
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
            Login
          </button>
        </form>

        {/* Section for users who don’t have an account */}
        <p className="my-5 italic text-sm text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-primary px-1 underline">
            Register
          </Link>{" "}
          here.
          {/* Link to the registration page for new users */}
        </p>
      </div>
    </section>
  );
};

export default Login;
