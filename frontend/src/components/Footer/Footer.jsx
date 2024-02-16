import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { RiLinkedinFill } from "react-icons/ri";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
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
      path: "/",
      display: "Blog",
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
  return <div>Footer </div>;
};

export default Footer;
