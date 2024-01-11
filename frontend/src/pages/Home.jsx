import React from "react";
import heroimg from "../assets/images/hero01.svg";
import { NavLink, Link } from 'react-router-dom';


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
                <button className="btn animate-fade animate-delay-300">Find your Category</button>
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
                    <img className="w-[650px]" src={heroimg} alt="Animate"/>
                </div>
            </div>

            </div>
          </div>
        </section>
      </>
    );
  };
  
  

export default Home;
