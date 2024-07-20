import React from "react";
import BrowseProfile from "./profile/BrowseProfile";
const profiles = [
  {
    name: "Fahad",
    image: "/images/profile.png",
  },
  {
    name: "Ali",
    image: "/images/profile1.png",
  },
  {
    name: "Carla",
    image: "/images/profile1.png",
  },
  {
    name: "Jennifer",
    image: "/images/profile.png",
  },
  {
    name: "Tom",
    image: "/images/profile1.png",
  },
];

const Browse = () => {
  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <h2 className="text-7xl">Who's watching</h2>
      <div className="flex gap-3 mt-10 mb-20">
        {profiles.map((profile, index) => (
          <BrowseProfile key={index} profile={profile} />
        ))}
      </div>
      <button className="border border-gray-500 py-2 px-8 text-zinc-500 text-2xl hover:text-white hover:border-white -tracking-tighter">
        Manage Profiles
      </button>
    </div>
  );
};

export default Browse;
