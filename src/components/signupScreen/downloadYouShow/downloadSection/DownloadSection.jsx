import React from "react";

const DownloadSection = () => {
  return (
    <div className="relative">
      <img className="relative" src="/images/mobileImage.jpg" alt="" />
      <div className="flex items-center justify-between border border-gray-500 bg-black rounded-lg p-3 w-full h-min left-0 md:w-3/5 md:left-[20%] top-[76%] absolute" >
        <div className="flex items-center gap-3">
          <div className="w-10 md:w-14">
            <img src="/images/boxshot.png" alt="" />
          </div>
          <div>
            <h5 className="font-medium">Stranger Things</h5>
            <p className="text-blue-500 text-sm">Downloading...</p>
          </div>
        </div>
        <div>
          <img className="w-16" src="/images/download-icon.gif" alt="" />
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
