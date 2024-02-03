import React from "react";
import { categories } from "../../assets/data/categories";
import CategoriesCard from "./CategoriesCard";

const CategoriesList = () => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] 
    lg:mt-[55px] "
    >
      {categories.map((item, index) => (
        <CategoriesCard item={item} index={index} key={index} />
      ))}
    </div>
  );
};

export default CategoriesList;
