// React Signup Component (Signup.js)
import React, { useState } from "react";
import { Link } from "react-router-dom";
import signupIllus from "../../src/assets/images/sign-up-animate.svg";
// import iconAvatar from "../../src/assets/images/avatarLearner03.png"

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    // photo:"",
    password: "",
    // gender: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data); // Handle the response data accordingly (e.g., show a success message to the user)
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* ------------------- Sign Up illustration ----------------*/}
          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src={signupIllus} alt="" className="w-full rounded-l-lg" />
            </figure>
          </div>

          {/* ------------------ SignUp Form ------------------*/}
          <div className="rounded-r-lg lg:pl-16 py-10">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
              Create Your <span className="text-primaryColor">Account</span>
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full pr-4 px-4 py-3 border-b border-solid border-[#b300ff61] focus:outline-none
                focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor 
                rounded-md cursor-pointer"
                  required
                />
                
              </div>

              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pr-4 px-4 py-3 border-b border-solid border-[#b300ff61] focus:outline-none
                focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor 
                rounded-md cursor-pointer"
                  required
                />
              </div>

              <div className="mb-5">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pr-4 px-4 py-3 border-b border-solid border-[#b300ff61] focus:outline-none
                focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor 
                rounded-md cursor-pointer"
                  required
                />
              </div>

              {/* <div className="mb-5 flex items-center justify-between">
                <label className="text-headingColor font-bold text-[16px] leading-7">
                  Gender:
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="text-textColor font-semibold text-[15px]
                        leading-7 px-4 py-3 focus:outline-none"
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div> */}
              {/* <div className="mb-5 flex items-center gap-3">
                <figure
                  className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor
                    flex items-center justify-center "
                >
                  <img
                    src={iconAvatar}
                    alt=""
                    className="w-full rounded-full"
                  />
                </figure>
                <div className="relative w-[130px] h-[50px]">
                  <input
                    type="file"
                    name="photo"
                    id="customFile"
                    accept=".jpg , .png"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <label
                    htmlFor="customFile"
                    className="absolute top-0 left-0 w-full h-full flex items-center 
                  px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#c2b0ffc0]
                  text-textColor font-semibold rounded-2xl truncate cursor-pointer "
                  >
                    Upload Photo
                  </label>
                </div>
              </div> */}
              <div className="mt-7">
                <button
                  type="submit"
                  className="w-full bg-primaryColor text-white text-[20px] leading-[30px]
                    rounded-lg px-4 py-3"
                >
                  Sign Up
                </button>
              </div>

              <p className="mt-5 text-textColor text-center ">
                Already have an account? 
                <Link to={'/login'} className="text-primaryColor font-medium ml-1">Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
