import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { RiLinkedinFill } from "react-icons/ri";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";

const socialLinks = [
  {
    path: "https://www.instagram.com/",
    icon: <AiOutlineInstagram className="group-hover:text-#ddd w-4 h-4" />,
  },
  {
    path: "https://www.github.com/",
    icon: <AiFillGithub className="group-hover:text-#ddd w-4 h-4" />,
  },
  {
    path: "https://www.linkedin.com/",
    icon: <RiLinkedinFill className="group-hover:text-#ddd w-4 h-4" />,
  },
];

const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/",
    display: "About Us",
  },
  {
    path: "/categories",
    display: "Categories",
  },
  {
    path: "/",
    display: "Blog",
  },
];
const quickLinks02 = [
  {
    path: "/find-a-course",
    display: "Find a Course",
  },
  {
    path: "/",
    display: "About Us",
  },
  {
    path: "/categories",
    display: "Find Your Category",
  },
];
const quickLinks03 = [
  {
    path: "/find-a-course",
    display: "Find a Course",
  },
  {
    path: "/",
    display: "Donate",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
];
const Footer = () => {
  const ThisYear = new Date().getFullYear();
  return (
    <footer className="pb-16 pt-10">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div>
            <img src={logo} className="w-[130px] " alt="" />
            <p className="text-[16px] leading-6 font-400 text-textColor mt-3">
              Copyright © {ThisYear} developed by Salah Eddine Koulal. All right
              reserved.
            </p>
            <div className="flex items-center gap-5 mt-4">
              {socialLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="w-9 h-9 border border-solid border-[#181a1e] rounded-full flex items-center
                justify-center groupe hover:bg-primaryColor hover:border-none "
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor ">
              Quick Links
            </h2>
            
            <ul>
                {quickLinks01.map((item,index) => (
                <li key={index} className="mb-4 ">
                    <Link to={item.path} className="text-[16px] leading-7 font-400 text-textColor">{item.display}</Link> 
                </li>
                ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor ">
                    I want to:
            </h2>
            
            <ul>
                {quickLinks02.map((item,index) => (
                <li key={index} className="mb-4 ">
                    <Link to={item.path} className="text-[16px] leading-7 font-400 text-textColor">{item.display}</Link> 
                </li>
                ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor ">
                    Support ❤️ :
            </h2>
            
            <ul>
                {quickLinks03.map((item,index) => (
                <li key={index} className="mb-4 ">
                    <Link to={item.path} className="text-[16px] leading-7 font-400 text-textColor">{item.display}</Link> 
                </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
