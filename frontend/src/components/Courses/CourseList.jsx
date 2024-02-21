import { courses } from "../../assets/data/courses";
import CourseCard from "./CourseCard";

const CourseList = () => {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px]
        lg:mt-[55px]">
      {courses.map((course, index) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseList;
