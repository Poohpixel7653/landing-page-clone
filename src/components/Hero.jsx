import React from "react";
import { hero } from "../assets";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div
      className="
        w-full
        bg-white
        py-24
    "
    >
      <div
        className="
            md:max-w-[1480px]
            m-auto
            grid
            md:grid-cols-2
            max-w-[600px]
        "
      >
        <div
          className="
            flex
            flex-col
            justify-start
            gap-4
        "
        >
          <p
            className="
            py-2
            text-2xl 
          text-[#208486]
          font-medium
          "
          >
            START TO SUCCESS
          </p>
          <h1
            className="
            md:leading-[72px]
          md:text-6xl 
          text-5xl 
          font-semibold
          "
          >
            Access To <span className="text-[#208486]">5000+</span> Courses from
            <span className="text-[#208486]">300</span> Instructors &
            Institutions
          </h1>
          <p
            className="
            py-2
            text-lg
            text-gray-600
          "
          >
            Various versions have evolved over the years
          </p>
          <form
            className="
            bg-white
            max-w-[700px]
            border
            p-4 
            input-box-shadow
            rounded-md
            flex
            justify-between
          "
          >
            <input
              className="
                    bg-white
                "
              type="text"
              placeholder="What do want to learn"
            />
            <button>
              <AiOutlineSearch
                size={20}
                className="icon"
                style={{ color: "#000" }}
              />
            </button>
          </form>
        </div>
        <img
          className="
            md:order-last
            order-first
        "
          src={hero}
        />
      </div>
    </div>
  );
};

export default Hero;
