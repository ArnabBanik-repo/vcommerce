import React from "react";
import ReactTyped from "react-typed";
import { Link } from "react-router-dom";

<script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>;

const HomeHero = () => {
  return (
    <div className="bg-[url('./backhero.jpg')] bg-no-repeat bg-cover">
      <div className="max-w-[650px] mx-16 h-screen flex flex-col justify-center">
        <p className="text-black font-bold p-2 md:text-4xl sm:text-3xl text-xl pl-20">
          Your Unique VIT Market
        </p>

        <ReactTyped
          strings={["VCOMMERCE"]}
          typeSpeed={170}
          backDelay={1000}
          smartBackspace={true}
          loop
          className="text-[#69CC55] font-bold p-2 md:text-5xl sm:text-4xl text-2xl pl-20"
        />

        <div className="md:text-5xl sm:text-4xl text-xl font-bold py-4 pl-5 pt-20">
          From Books to Gadgets
        </div>
        <p className="md:text-xl text-2xl text-gray-700 pt-30 pl-5">
          Beyond Classes, Connect through Commerce - VIT, Let's Vcommerce
        </p>
        <Link to="/login">
          <button className="bg-black rounded-md font-medium my-6 mx-10 py-3 px-8 text-[#B6FFA2] font-bold">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeHero;
