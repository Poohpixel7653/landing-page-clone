import React from "react";
import Card from "./Card";
import Slider from "react-slick";
import { courses } from "../data/Courses";

const Courses = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };

  return (
    <div
      className="
        w-full
        bg-[#E9FBF382]
        py-[50px]
        my-[24px]
    "
    >
      <div
        className="
            md:max-w-[1480px] 
            m-auto
            max-w-[600px]
        "
      >
        <h1 className="py-3 text-3xl font-bold">
          Most Popular <span className="text-[#20B486]">Courses</span>
        </h1>
        <p className="text-[#6D737A]">
          Varoius versions have evolved over the years, sometimes by accident.
        </p>
        <Slider {...settings}>
          {courses.map((course, index) => (
            <Card key={index} course={course} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Courses;
