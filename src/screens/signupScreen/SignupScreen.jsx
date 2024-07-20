import React from "react";
import LoginHeroSection from "../../components/signupScreen/SignupHeroSection/SignupHeroSection";
import EnjoyYourTv from "../../components/signupScreen/enjoyYourTv/EnjoyYourTv";
import DownloadYourShow from "../../components/signupScreen/downloadYouShow/DownloadYourShow";
import WatchEverywhere from "../../components/signupScreen/watchEverywhere/WatchEverywhere";
import KidsProfile from "../../components/signupScreen/kidsProfile/KidsProfile";
import Faq from "../../components/signupScreen/faq/Faq";

const SignupScreen = () => {
  return (
    <div>
      <LoginHeroSection />
      <EnjoyYourTv />
      <DownloadYourShow />
      <WatchEverywhere />
      <KidsProfile />
      <Faq />
    </div>
  );
};

export default SignupScreen;
