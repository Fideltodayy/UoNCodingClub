import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 md:p-16 lg:p-24 text-center">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
        Fostering The Next Generation Of Developers
      </h1>
      <p className="mt-4 text-lg md:text-xl">
        Empowering individuals to build and create a better future with
        technology.
      </p>
      <button className="mt-6 px-6 py-3 bg-white text-purple-700 font-semibold rounded-lg hover:bg-gray-100">
        Join Us
      </button>
    </section>
  );
};

export default Hero;
