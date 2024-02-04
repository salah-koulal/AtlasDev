import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
// import webDevelopmentImage from "../../assets/images/WebCategory.png";
// import GameDevelopmentImage from "../../assets/images/GameCategory.png";
// import mobileAppDevelopmentImage from "../../assets/images/AppCategory.png";
import BackendDevelopmentImage from "../../assets/images/BackendCategory.png";
import FrontendDevelopmentImage from "../../assets/images/FrontendCategory.png";
import uiuxdesign from "../../assets/images/uiuxCategory.png";

const categoryImages = {
  // "Web Development": webDevelopmentImage,
  // "Game Development": GameDevelopmentImage,
  // "Mobile App Development": mobileAppDevelopmentImage,
  "UI/UX Design": uiuxdesign,
  "Backend Development": BackendDevelopmentImage,
  "Frontend Development": FrontendDevelopmentImage,

  // ... heey i will map other images to category names
};

const CategoriesCard = ({ item, index }) => {
  const { name, desc, bgColor, textColor } = item;
  const categoryImage = categoryImages[name];

  return (
    <div className="py-[30px] px-3 lg:px-5 shadow-xl  hover:shadow-2xl  hover:scale-105  duration-300">
      <div className="mb-3">
        <img src={categoryImage} alt={name} className="w-full h-auto" />
      </div>
      <h2 className="text-[26px] leading-9 text-headingColor font-[700]">
        {name}
      </h2>
      <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
        {desc}
      </p>

      <div className="flex items-center justify-between mt-[30px]">
        <Link
          to="/categories"
          className="w-[44px] h-[44px] rounded-full border border-solid border-[#1a1b1f]
								 flex items-center justify-center group hover:bg-primaryColor hover:border-none"
        >
          <BsArrowRight className="group-hover:text-white w-6 h-5" />
        </Link>

        <span
          className="w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px]
		font-[600]"
          style={{
            background: `${bgColor}`,
            color: `${textColor}`,
            borderRadius: `6px 0 0 6px`,
          }}
          
        >

          {index + 1}
        </span>
      </div>
    </div>

    
  );
};

export default CategoriesCard;
