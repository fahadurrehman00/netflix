import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ showSignInButton = true }) => {
  const navigate = useNavigate();

  const handleSigninClick = () => {
    navigate("/login");
  };
  const handleSignupClick = () => {
    navigate("/");
  }

  return (
    <nav className="flex justify-between items-center w-full py-4 px-8 xl:px-52 absolute top-0 left-0 z-10">
      <div className="cursor-pointer" onClick={handleSignupClick}>
        <img
          className="w-24 xl:w-36"
          src="/images/netflixLogo.png"
          alt="Netflix Logo"
          loading="lazy"
        />
      </div>
      {showSignInButton && (
        <div>
          <button
            onClick={handleSigninClick}
            className="px-5 py-2 bg-red-600 text-white rounded-md font-semibold hover:bg-red-700 transition duration-300"
            aria-label="Sign In"
          >
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
