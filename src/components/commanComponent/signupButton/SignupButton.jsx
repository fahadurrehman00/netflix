import React, { useState } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { RiErrorWarningLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const SignupButton = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSignupClick = () => {
    // Email validation
    if (!email) {
      setEmailError("Please enter your email address.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    // Clear error and navigate if validation passes
    setEmailError("");
    navigate("/login", { state: { isSignup: true, email } });
  };

  return (
    <div className="text-center">
      <h6 className="text-base sm:text-2xl mb-3">
        Ready to watch? Enter your email to create or restart your membership.
      </h6>
      <div className="flex justify-center gap-2 flex-col sm:flex-row items-center sm:items-start">
        <div className="w-full sm:w-[52%] relative items-start">
          <input
            className={`p-4 rounded-md bg-opacity-70 bg-zinc-900 border w-full ${
              emailError ? "border-red-500" : "border-gray-300"
            }`}
            type="text"
            placeholder="Email address"
            value={email}
            onChange={handleInputChange}
            aria-invalid={emailError ? "true" : "false"}
          />
          {emailError && (
            <div className="text-sm text-red-500 flex items-center mt-2">
              <RiErrorWarningLine className="mr-1" /> {emailError}
            </div>
          )}
        </div>
        <button
          onClick={handleSignupClick}
          className="px-6 py-4 bg-red-600 rounded-md md:text-xl font-bold flex items-center gap-2 sm:w-max">
          Get Started
          <MdOutlineArrowForwardIos />
        </button>
      </div>
    </div>
  );
};

export default SignupButton;
