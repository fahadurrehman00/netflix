import React from "react";

const BackgroundImage = () => {
  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden">
      <img
        className="object-cover h-full w-full opacity-30"
        src="/images/bgImage.jpg"
        alt="BackgroundImage"
      />
    </div>
  );
};

export default BackgroundImage;
