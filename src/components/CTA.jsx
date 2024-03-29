import React from "react";
import { cta, hero } from "../assets";
import { AiOutlineSearch } from "react-icons/ai";

const CTA = () => {
  return (
    <div
      className="
        w-full
        bg-[#E9F8F3]
        py-24
    "
    >
      <div
        className="
            md:max-w-[1480px]
            m-auto
            grid
            md:grid-cols-2
            gap-8
            max-w-[600px]
            items-center
        "
      >
        <img src={cta} className="w-[650px] m-auto" />
        <div>
          <h1
            className="
          py-2
          text-3xl 
          font-semibold
          "
          >
            Join <span className="text-[#208486]">World's largest</span>{" "}
            Learning platform today
          </h1>
          <p
            className="
            py-2
            text-lg
            text-gray-600
          "
          >
            Start learning by registering to learn
          </p>
          <button
            className="
            max-[780px]:w-full
            my-4
            px-8
          py-5
          rounded-md
          bg-[#20B486]
          text-white
          font-bold
          "
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
