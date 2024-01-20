import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/images/Herosc.json"
// import heroimg from "../assets/images/heroSec.gif";
import { NavLink, Link } from "react-router-dom";
import { BsArrowRight } from 'react-icons/bs'
import step01 from "../assets/images/select-animate.svg";
import step02 from "../assets/images/webinar-animate.svg";
import step03 from "../assets/images/notes-animate.svg";

const Home = () => {
  return (
    <>
      {/* ============== Hero Section ============= */}
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* ================= Hero content ============= */}
            <div>
              <div className="lg:w-[570px] ml-10">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px] animate-fade-right animate-delay-[400ms]">
                  Coding Mastery, Simplified with AtlasDev.
                </h1>
                <p className="text__para animate-fade-right animate-delay-[400ms]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  harum assumenda laboriosam cupiditate! Adipisci itaque aperiam
                  sapiente impedit soluta vel doloremque ab corporis
                </p>

                <Link to="/categories">
                  <button className="btn animate-fade animate-delay-300">
                    Find your Category
                  </button>
                </Link>
                {/* ============== Hero counter =============== */}
                <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                  {/* Counter1 */}
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor animate-fade-down animate-delay-[400ms]">
                      25+
                    </h2>
                    <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px] animate-fade-up animate-delay-[400ms]"></span>
                    <p className="text__para">Courses Offered</p>
                  </div>

                  {/* Counter 2 */}
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor animate-fade-down animate-delay-[400ms]">
                      10+
                    </h2>
                    <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px] animate-fade-up animate-delay-[400ms]"></span>
                    <p className="text__para">Coding Categories</p>
                  </div>

                  {/* Counter 3 */}
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor animate-fade-down animate-delay-[400ms]">
                      30+
                    </h2>
                    <span className="w-[100px] h-2 bg-blueColor rounded-full block mt-[-14px] animate-fade-up animate-delay-[400ms]"></span>
                    <p className="text__para">Interactive Challenges</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= Hero content ============= */}
            <div className="flex gap-[30px] justify-end ">
              <div>
                {/* <img className="w-[650px]" src={heroimg} alt="Animate" /> */}
                <Lottie animationData={animationData}/>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of Hero Section */}

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Make your Coding space better
            </h2>
            <p className="text__para text-center">
              Lorem ipsum dolor sit amet consectetur voluptates ut, Voluptatum
              maxime quam
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">

            {/* Make Step 1 */}
            <div className="py-[30px] px-5 ">
              <div className="flex items-center justify-center">
                <img src={step01} alt="" width="200px" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Choose your Category
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">Find what you love! Pick a category and explore courses that match your interests.
                 It's easy to start your learning adventure with us.
                </p>
                <br />

                <Link to='/categories' className="w-[44px] h-[44px] rounded-full border border-solid border-[#1a1b1f]
                mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            


            {/* Make step 2 */}
            <div className="py-[30px] px-5 ">
              <div className="flex items-center justify-center">
                <img src={step02} alt="" width="200px" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Watch Courses
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">Dive into learning with our easy-to-watch courses. Enhance your skills effortlessly, one video at a time.
                 Start watching and empower your knowledge journey today!
                </p>

                <Link to='/categories' className="w-[44px] h-[44px] rounded-full border border-solid border-[#1a1b1f]
                mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            



            {/* Make step 3 */}
            <div className="py-[30px] px-5 ">
              <div className="flex items-center justify-center">
                <img src={step03} alt="" width="200px" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Take your Notes
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">Maximize your learning by taking notes. Jot down key points, ideas, and insights as you go through our courses. It's a simple yet effective way to reinforce your understanding.
                 Ready to get started?
                </p>

                <Link to='/categories' className="w-[44px] h-[44px] rounded-full border border-solid border-[#1a1b1f]
                mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>


          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
