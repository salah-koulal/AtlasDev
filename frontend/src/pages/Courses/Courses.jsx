import CourseCard from "../../components/Courses/CourseCard";
import { courses } from "../../assets/data/courses";
import Testimonial from "../../components/Testimonial/Testimonial";

const Courses = () => {
    return (
      <>
        <section className="bg-[#eafbff96]">
          <div className="container text-center">
            <h2 className="heading">Find a Course</h2>
            <div
              className="max-w-[570px] mt-[30px] mx-auto bg-[#4588ee2c] rounded-md  flex items-center 
            justify-between"
            >
              <input
                type="search"
                className="py-4 pl-4 pr-2 bg-transparent w-full focus-outline-none cursor-pointer
                placeholder:text-textColor "
                placeholder="Search course"
              />

              <button className="btn mt-0 rounded-[0px] rounded-r-md">
                Search
              </button>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 ">
              {courses.map((course, index) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </section>



        <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">
              What Our Learners Have to Say!
            </h2>
            <p className="text__para text-center">
              Discover Feedback from Our Enrollees!
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
      </>
    );
};

export default Courses

