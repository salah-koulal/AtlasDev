import React from "react";
import aboutImg from "../../assets/images/AboutUsSe.png";
import AboutCard from "../../assets/images/CardAbout.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/* ============== About Img ==================== */}
          
          <div className="relative q-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
              <img
                className="absolute rounded-2xl  float-left ml-[10%] animate-fade-left animate-delay-[400ms] shadow-lg shadow-indigo-500/80"
                src={AboutCard}
                alt=""
                width="200px"
              />
            <img
              className="animate-fade-right  animate-once animate-delay-[600ms]"
              src={aboutImg}
              alt=""
              width="600px"
            />

          </div>

          {/* =========== About Content ========= */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">Exited to start learning with us</h2>
            <p className="text__para">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora consequuntur,
                 laborum tenetur laudantium, maiores eius at rem nesciunt quaerat nisi, 
                vero sint mollitia quisquam iste amet provident debitis numquam cupiditate.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, modi!
            </p>
            <p className="text__para mt-[30px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora consequuntur,
                 laborum tenetur laudantium, maiores eius at rem nesciunt quaerat nisi, 
                vero sint mollitia quisquam iste amet provident debitis numquam cupiditate.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, modi!
            </p>
            <Link to='/'><button className="btn">Learn More</button></Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
