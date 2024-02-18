import CategoriesCard from "../components/Categories/CategoriesCard";
import { categories } from "../assets/data/categories";
import Testimonial from "../components/Testimonial/Testimonial";
const Categories = () => {
  return (
    <section>
      <div className="container">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] 
    lg:mt-[55px] "
        >
          {categories.map((item, index) => (
            <CategoriesCard item={item} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>


  );
};

export default Categories;
