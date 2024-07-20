import React from "react";
import Navbar from "../../components/navbar/Navbar";
import HeroSection from "../../components/heroSection/HeroSection";
import MoviesSection from "../../components/moviesSection/MoviesSection";

const HomeScreen = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <MoviesSection />
    </div>
  );
};

export default HomeScreen;
