import React from "react";
import { Link } from "react-router-dom";

const HomeAnalytics = () => {
  return (
    <div className="w-full bg-[#E2E2E2] py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[500px] mx-auto my-4 rounded-lg"
          src="./one.jpg"
          alt="/"
        />

        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] md:text-3xl sm:text-2xl text-xl font-bold ">
            VIT's Own Marketplace
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold mt-2 mb-4 text-black">
            Shop Smart, Connect Locally - VIT's Exclusive Marketplace
          </h1>
          <p className="text-black">
            Discover Vcommerce, the dynamic hub for VITians! Seamlessly trade class notes and gadgets in a vibrant digital space. Dive into campus commerce, where every click tells a story, building a connected VIT community. Redefine how VITians engage in commerce – it's about lasting connections. Welcome to your personalized marketplace, where the spirit of VIT thrives through every deal!
          </p>
          <Link to="/products">
            <button className="bg-black text-white hover:shadow-md hover:-translate-y-0.5 transition-all w-[175px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
              View Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeAnalytics;
