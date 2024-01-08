import React from "react";
import { fedex, duolingo, lenovo, microsoft } from "../assets";

const Companies = () => {
  return (
    <div
      className="
        w-full
        bg-white
        py-[50px]
    "
    >
      <div
        className="
            md:max-w-[1480px] 
            m-auto  
            max-w-600
        "
      >
        <h1
          className="
        text-center 
        text-2xl 
        font-bold
        text-[#536E96]
        "
        >
          Trusted by over 25,000 teams around the world.
        </h1>
        <p
          className="
            text-center
            text-[#536E96]
        "
        >
          Leading companies use the same courses to help employees keep their
          skill
        </p>
        <div className="flex justify-center py-8 gap-8">
          <img src={fedex} />
          <img src={duolingo} />
          <img src={lenovo} />
          <img src={microsoft} />
        </div>
      </div>
    </div>
  );
};

export default Companies;
