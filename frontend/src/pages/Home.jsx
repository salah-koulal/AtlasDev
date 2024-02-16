import React from "react";
import Lottie from "lottie-react";
import animationFaq from "../assets/images/Search-bar.json";
import animationData from "../assets/images/Herosc.json";
// import heroimg from "../assets/images/heroSec.gif";
import { NavLink, Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import step01 from "../assets/images/select-animate.svg";
import step02 from "../assets/images/webinar-animate.svg";
import step03 from "../assets/images/notes-animate.svg";
import About from "../components/About/About";
import featureImg from "../assets/images/FeatureImage.gif";
import faqImg from "../assets/images/FaqImg.png";
import CategoriesList from "../components/Categories/CategoriesList";
import CourseList from "../components/Courses/CourseList";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";

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
                  Unlock the full potential of your coding journey with
                  AtlasDev's meticulously crafted courses. Embark on a
                  transformative experience of exploration, discovery, and
                  skill-building as you delve into the world of programming
                  excellence.
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
                    <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px] animate-fade-right animate-once animate-ease-in-out animate-delay-500"></span>
                    <p className="text__para">Courses Offered</p>
                  </div>

                  {/* Counter 2 */}
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor animate-fade-down animate-delay-[400ms]">
                      10+
                    </h2>
                    <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px] animate-fade-right animate-once animate-ease-in-out animate-delay-500"></span>
                    <p className="text__para">Coding Categories</p>
                  </div>

                  {/* Counter 3 */}
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor animate-fade-down animate-delay-[400ms]">
                      20+
                    </h2>
                    <span className="w-[100px] h-2 bg-blueColor rounded-full block mt-[-14px] animate-fade-right animate-once animate-ease-in-out animate-delay-500"></span>
                    <p className="text__para">Blogs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= Hero content ============= */}
            <div className="flex gap-[30px] justify-end ">
              <div>
                {/* <img className="w-[650px]" src={heroimg} alt="Animate" /> */}
                <Lottie animationData={animationData} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of Hero Section */}

      {/* ================ How It works Section ================ */}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Make your Coding space better
            </h2>
            <p className="text__para text-center">
             
        
          Elevate your coding space with AtlasDev for a better learning experience.
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
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Find what you love! Pick a category and explore courses that
                  match your interests. It's easy to start your learning
                  adventure with us.
                </p>
                <br />

                <Link
                  to="/categories"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#1a1b1f]
								mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
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
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Dive into learning with our easy-to-watch courses. Enhance
                  your skills effortlessly, one video at a time. Start watching
                  and empower your knowledge journey today!
                </p>

                <Link
                  to="/categories"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#1a1b1f]
								mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
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
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Maximize your learning by taking notes. Jot down key points,
                  ideas, and insights as you go through our courses. It's a
                  simple yet effective way to reinforce your understanding.
                  Ready to get started?
                </p>

                <Link
                  to="/categories"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#1a1b1f]
								mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ============= End How It works Section =================*/}

      {/* About Section */}

      <About />
      {/* End About Section */}

      {/* ================== Category Section ========================= */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Categories</h2>
            <p className="text__para text-center">
              Discover coding at AtlasDev. Start your journey with web and App
              development... Join Us!
            </p>
          </div>

          <CategoriesList />
        </div>
      </section>
      {/* ================== Category Section End ========================= */}

      {/*  Feature section  */}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/* ================== Feature Content ====================*/}
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Note Anywhere, Anytime,
                <br /> Effortlessly.
              </h2>

              <ul className="pl-4">
                <li className="text__para">
                  1. Choose Your Course, select the course you want to delve
                  into.
                </li>
                <li className="text__para">
                  2. Effortless Note-Taking, seamlessly jot down key points.
                </li>
                <li className="text__para">
                  3. Track Your Progress, monitor your learning journey by
                  tracking your note-taking progress.
                </li>
              </ul>
              <Link to="/">
                <button className="btn">Learn more</button>
              </Link>
            </div>
            {/* Img For Feature */}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} className="w-[600px] " alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* ============= Feature section End ===================*/}

      {/* ============= Popular Courses =============*/}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Popular Courses</h2>
            <p className="text__para text-center">
              Discover coding at AtlasDev. Start your journey with web and App
              development... Join Us!
            </p>
          </div>

          <CourseList />
        </div>
      </section>

      {/* = = = = = = = = = = = = = = Popular Courses END = = = = = = = = = = = = = = = = = = = = */}

      {/*= = = = = = = = = = = = = = = = = = Faq Section = = = = = = = = = = = = = = = = = = = = = */}
      <section>
        <div className="container">
          <div className="flex justufiy-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <Lottie className="mr-[20%]" animationData={animationFaq} />
              <img src={faqImg} alt="" />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="heading">Swift Answers to Community Inquiries.</h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/*= = = = = = = = = = = = = = = = = = Faq Section End = = = = = = = = = = = = = = = = = = = = = */}

      {/*= = = = = = = = = = = = = = = = = = Testimonial= = = = = = = = = = = = = = = = = = = = = */}
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
      {/*= = = = = = = = = = = = = = = = = = Testimonial End = = = = = = = = = = = = = = = = = = = = = */}
    </>
  );
};

export default Home;
