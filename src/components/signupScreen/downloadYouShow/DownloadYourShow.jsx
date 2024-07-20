import React from "react";
import DownloadSection from "./downloadSection/DownloadSection";

const DownloadYourShow = () => {
  return (
    <div className="flex items-center text-center flex-col-reverse justify-center bg-black mt-2 px-6 py-16  lg:p-16 md:flex-row md:text-left">
      <DownloadSection />
      <div className="w-full md:w-[42%]">
        <h2 className="text-3xl sm:text-5xl font-black leading-tight">
          Download your shows to watch offline
        </h2>
        <h4 className="text-base sm:text-2xl font-normal mt-4">
          Save your favorites easily and always have something to watch.
        </h4>
      </div>
    </div>
  );
};

export default DownloadYourShow;
