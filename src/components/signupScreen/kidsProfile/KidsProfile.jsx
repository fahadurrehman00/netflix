import React from "react";

const KidsProfile = () => {
  return (
    <div className="bg-black mt-2 p-6 xl:p-16">
      <div className="flex items-center text-center flex-col-reverse justify-center md:flex-row md:text-left w-full lg:w-4/5 lg:m-auto">
        <div className="lg:w-1/2">
          <img src="/images/kids.png" alt="Kids" />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-3xl sm:text-5xl font-black">Create profiles for kids</h2>
          <h4 className="text-base sm:text-2xl font-normal mt-4">
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default KidsProfile;
