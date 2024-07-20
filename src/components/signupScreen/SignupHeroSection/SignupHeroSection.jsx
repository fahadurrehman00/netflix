import React from "react";
import BackgroundImage from "../../commanComponent/backgroundImage/BackgroundImage";
import Header from "../../commanComponent/header/Header";
import SignupButton from "../../commanComponent/signupButton/SignupButton";
const LoginHeroSection = () => {
  return (
    <div className="relative h-screen w-full">
      <BackgroundImage />
      <Header />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-zinc-100 px-6 xl:px-9">
        <div className="mb-2">
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-6">
            Unlimited movies, TV shows, and more
          </h2>
          <h4 className="text-base sm:text-2xl mb-4">
            Watch anywhere. Cancel anytime.
          </h4>
        </div>
        <SignupButton />
      </div>
    </div>
  );
};

export default LoginHeroSection;
