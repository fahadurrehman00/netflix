import React from "react";

const Tv = () => {
  return (
    <div className="relative">
      <img className="relative z-10" src="/images/tv.png" alt="" />
      <div className="absolute top-[21%] left-[14%] h-auto ">
        <video className="w-[95%]" src="/video/tvVideo.mp4" loop autoPlay muted></video>
      </div>
    </div>
  );
};

export default Tv;
