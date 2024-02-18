import React, { useState } from "react";
import CategoriesCard from "./CategoriesCard";
import { categories } from "../../assets/data/categories";

const CategoriesList = () => {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const displayedCategories = showAllCategories ? categories : categories.slice(0, 3);

  const handleExploreMore = () => {
    setShowAllCategories(true);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
      {displayedCategories.map((item, index) => (
        <CategoriesCard item={item} index={index} key={index} />
      ))}

    </div>
  );
};

export default CategoriesList;
