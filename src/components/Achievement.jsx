import React from "react";
import { achievement } from "../assets";
import { SlGraduation, SlPeople } from "react-icons/sl";
import { FiVideo } from "react-icons/fi";
const Achievement = () => {
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
            justify-center
        "
        >
          <h1
            className="
            md:leading-[72px]
          text-3xl 
          font-bold
          "
          >
            Our<span className="text-[#208486]">Achievements</span>
          </h1>
          <p
            className="
            text-lg
            text-gray-600
          "
          >
            Various versions have evolved over the years, sometime by
            accidentally
          </p>

          <div className="grid grid-cols-2 py-16">
            <div className="py-6 flex">
              <div className="p-4 border bg-[#E9F8F3] rounded-xl">
                <SlGraduation size={30} style={{ color: "#1A906B" }} />
              </div>
              <div className="px-3">
                <h3 className="text-2xl font-semibold">300</h3>
                <p className="text-[#6D737A]">Instructor</p>
              </div>
            </div>

            <div className="py-6 flex">
              <div className="p-4 rounded-xl">
                <FiVideo size={30} style={{ color: "#ddda0b" }} />
              </div>
              <div className="px-3">
                <h3 className="text-2xl font-semibold">10,000+</h3>
                <p className="text-[#6D737A]">Video</p>
              </div>
            </div>

            <div className="py-6 flex">
              <div className="p-4 border bg-[#FFEEF0] rounded-xl">
                <SlGraduation size={30} style={{ color: "#ED4459" }} />
              </div>
              <div className="px-3">
                <h3 className="text-2xl font-semibold">300</h3>
                <p className="text-[#6D737A]">Instructor</p>
              </div>
            </div>

            <div className="py-6 flex">
              <div className="p-4 border bg-[#F0F7FF] rounded-xl">
                <SlPeople size={30} style={{ color: "#0075FD" }} />
              </div>
              <div className="px-3">
                <h3 className="text-2xl font-semibold">20,000+</h3>
                <p className="text-[#6D737A]">User's</p>
              </div>
            </div>
          </div>
        </div>

        <img
          className="
            m-auto
            md:order-last
            order-first
        "
          src={achievement}
        />
      </div>
    </div>
  );
};

export default Achievement;
