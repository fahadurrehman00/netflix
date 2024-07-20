import React, { useState } from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SigninSection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isSignup = location.state?.isSignup || false;
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState(location.state?.email || "");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [fullNameError, setFullNameError] = useState("");

  const API_END_POINT = "http://localhost:3001/user";
  axios.defaults.withCredentials = true;

  const handleSignIn = async (event) => {
    event.preventDefault();
    // Validate email
    if (!email) {
      setEmailError("Please enter your email address.");
      return;
    } else {
      setEmailError("");
    }
    // Validate password
    if (!password) {
      setPasswordError("Please enter your password.");
      return;
    } else {
      setPasswordError("");
    }
    // Validate full name if signing up
    if (isSignup && !fullName) {
      setFullNameError("Please enter your full name.");
      return;
    } else {
      setFullNameError("");
    }

    if (isSignup) {
      const user = { fullName, email, password };
      try {
        const res = await axios.post(`${API_END_POINT}/register`, user);
        console.log(res.data);
      } catch (error) {
        console.error("Registration Error:", error.response.data);
      }
    } else {
      const user = { email, password };
      try {
        const res = await axios.post(`${API_END_POINT}/login`, user);
        console.log(res.data);
      } catch (error) {
        console.error("Login Error:", error.response.data);
      }
    }
  };

  const handleSignupClick = () => {
    navigate("/browse", { state: { isSignup: true, email } });
  };

  return (
    <div className="flex justify-center items-center px-2 absolute inset-0 h-full w-full overflow-hidden cursor-pointer">
      <div className="w-full max-w-md py-12 px-2 md:px-16 bg-black bg-opacity-60 rounded-lg shadow-lg">
        <header className="mb-7">
          <h2 className="text-3xl font-bold">
            {isSignup ? "Sign Up" : "Sign In"}
          </h2>
        </header>
        <form onSubmit={handleSignIn}>
          {isSignup && (
            <div className="mb-6">
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className={`w-full px-3 py-4 border ${
                  fullNameError ? "border-red-500" : "border-gray-300"
                } bg-inherit rounded-md focus:outline-none focus:border-red-500`}
                placeholder="Full Name"
                aria-invalid={fullNameError ? "true" : "false"}
              />
              {fullNameError && (
                <div className="text-sm text-red-500 flex items-center">
                  <RiErrorWarningLine className="mr-1" /> {fullNameError}
                </div>
              )}
            </div>
          )}
          <div className="mb-6">
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-3 py-4 border ${
                emailError ? "border-red-500" : "border-gray-300"
              } bg-inherit rounded-md focus:outline-none focus:border-red-500`}
              placeholder="Email or mobile number"
              aria-invalid={emailError ? "true" : "false"}
            />
            {emailError && (
              <div className="text-sm text-red-500 flex items-center">
                <RiErrorWarningLine className="mr-1" /> {emailError}
              </div>
            )}
          </div>
          <div className="mb-6">
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-3 py-4 border ${
                passwordError ? "border-red-500" : "border-gray-300"
              } bg-inherit rounded-md focus:outline-none focus:border-red-500`}
              placeholder="Password"
              autoComplete="current-password"
              aria-invalid={passwordError ? "true" : "false"}
            />
            {passwordError && (
              <div className="text-sm text-red-500 flex items-center">
                <RiErrorWarningLine className="mr-1" /> {passwordError}
              </div>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white font-semibold bg-red-600 rounded-md hover:bg-red-700 focus:outline-none">
            {isSignup ? "Sign Up" : "Sign In"}
          </button>
          <p className="my-4 text-center text-sm text-zinc-200">OR</p>
          <button
            type="button"
            className="w-full py-3 text-zinc-100 rounded-md bg-zinc-500 bg-opacity-50 hover:bg-opacity-40 focus:outline-none">
            Use a Sign In Code
          </button>
          <a
            href="#"
            className="block mt-4 text-sm text-center text-zinc-100 hover:text-zinc-400 hover:underline">
            Forgot password?
          </a>
        </form>
        <footer className="mt-8 text-zinc-100">
          <div className="mb-4">
            <input id="remember" type="checkbox" className="mr-2" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <p className="text-zinc-500 font-medium">
            New to Netflix?
            <a
              href="#"
              className="ml-1 text-white hover:underline"
              onClick={handleSignupClick}>
              Sign Up Now
            </a>
          </p>
          <p className="mt-2 text-sm">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
            <a href="#" className="text-blue-500 hover:underline">
              Learn more.
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default SigninSection;
