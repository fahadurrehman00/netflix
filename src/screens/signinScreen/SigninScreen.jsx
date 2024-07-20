import React from "react";
import Header from "../../components/commanComponent/header/Header";
import BackgroundImage from "../../components/commanComponent/backgroundImage/BackgroundImage";
import SigninSection from "../../components/signinSection/SigninSection";

const SigninScreen = () => {
  return (
    <div>
      <Header showSignInButton={false} />
      <BackgroundImage />
      <SigninSection />
    </div>
  );
};

export default SigninScreen;
