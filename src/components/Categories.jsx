import React from "react";
import CategoryCard from "./CategoryCard";
import { BsVectorPen } from "react-icons/bs";
import { PiFileHtmlLight } from "react-icons/pi";
import { PiMicrophoneStage } from "react-icons/pi";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { TiLightbulb } from "react-icons/ti";
import { IoCameraOutline } from "react-icons/io5";
import { IoMdMusicalNotes } from "react-icons/io";
import { CiDatabase } from "react-icons/ci";
import { IoFitnessOutline } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa";
import { RiSchoolLine } from "react-icons/ri";

const Categories = () => {
  return (
    <div className="w-full bg-[#F0FBF7] py-24">
      <div className="md:max-w-[1480px] m-auto max-w-[600px]">
        <h1 className="md:leading-[72px] text-3xl font-bold">
          Most<span className="text-[#208486]">Popular Categories</span>
        </h1>
        <p className="text-lg text-gray-600">
          Various versions have evolved over the years, sometime by accidentally
        </p>
        <div className="grid lg:grid-cols-4 grid-cols-2 py-12 gap-4">
          <CategoryCard icons={<BsVectorPen size={30} />} title="Design" />
          <CategoryCard
            icons={<PiFileHtmlLight size={30} />}
            title="Development"
          />
          <CategoryCard
            icons={<PiMicrophoneStage size={30} />}
            title="Marketing"
          />
          <CategoryCard
            icons={<MdOutlineBusinessCenter size={30} />}
            title="Business"
          />
          <CategoryCard
            icons={<TiLightbulb size={30} />}
            title="Lifestyle"
          />
          <CategoryCard
            icons={<IoCameraOutline size={30} />}
            title="Photography"
          />
          <CategoryCard
            icons={<IoMdMusicalNotes size={30} />}
            title="Music"
          />
          <CategoryCard
            icons={<CiDatabase size={30} />}
            title="Data Science"
          />
          <CategoryCard
            icons={<IoCameraOutline size={30} />}
            title="Personal Develop"
          />
          <CategoryCard
            icons={<IoFitnessOutline size={30} />}
            title="Health & Fitness"
          />
          <CategoryCard
            icons={<FaDollarSign size={30} />}
            title="Finance"
          />
          <CategoryCard
            icons={<RiSchoolLine size={30} />}
            title="Teaching"
          />
        </div>
      </div>
    </div>
  );
};

export default Categories;
