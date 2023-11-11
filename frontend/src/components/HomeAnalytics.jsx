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
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-black">
            Shop Smart, Connect Locally - VIT's Exclusive Marketplace
          </h1>
          <p className="text-black">
            Welcome to Vcommerce, the beating heart of the vibrant VIT
            community! We've crafted a unique space where VITians trade and
            connect, shaping a dynamic marketplace that goes beyond the
            ordinary. A digital hub buzzing with energy, where
            students seamlessly buy, sell, and trade everything from class notes
            to cool gadgets. Vcommerce isn't just a platform; it's an
            experience, a campus lifeline that bridges the gap between students
            and their needs. Dive into the pulse of campus commerce, where every
            click tells a story, and every trade is a step towards building a
            stronger, more connected VIT community. Join us in this exciting
            journey as we redefine the way VITians engage in commerce—because at
            Vcommerce, it's not just about transactions; it's about fostering
            connections that last a lifetime. Welcome to your personalized
            marketplace, where the spirit of VIT thrives through every deal!
          </p>
          <Link to="/products"><button className="bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            View Products
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default HomeAnalytics;
