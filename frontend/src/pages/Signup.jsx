// React Signup Component (Signup.js)
import React, { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import signupIllus from "../../src/assets/images/sign-up-animate.svg";
// import iconAvatar from "../../src/assets/images/avatarLearner03.png"
import RotateLoader from 'react-spinners/HashLoader'
import {toast} from "react-toastify"

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    // gender: "",
  });

  const [loading , setLoading] = useState(false)
  const navigate = useNavigate()
  const [error, setError] = useState(""); // New state for storing error messages

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Reset error message on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)

    try {
      const response = await fetch('http://127.0.0.1:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "An error occurred during signup.");
      }
      setLoading(false)
      toast.success(response)
      navigate('/login')
      console.log(data); // Process successful response
      // Redirect user or clear form here
    } catch (error) {
      console.error('Error:', error);
      setError(error.message); // Set the error message to display to the user
      setLoading(false)
    }
  };

  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Sign Up illustration */}
          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src={signupIllus} alt="" className="w-full rounded-l-lg" />
            </figure>
          </div>

          {/* SignUp Form */}
          <div className="rounded-r-lg lg:pl-16 py-10">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
              Create Your <span className="text-primaryColor">Account</span>
            </h3>

            {/* Error message display */}
            {/* {error && <div className="text-red-500 text-sm mb-4">{error}</div>} */}

            <form onSubmit={handleSubmit}>
              {/* Username Input */}
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

              {/* Email Input */}
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

              {/* Password Input */}
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
              {error && <div className="text-red-500 text-sm mb-4 ">{error}</div>}

              <div className="mt-7">
                <button
                disabled={loading && true }
                  type="submit"
                  className="w-full bg-primaryColor text-white text-[20px] leading-[30px]
                  rounded-lg px-4 py-3"
                >
                  {loading ? <RotateLoader color="#ffffff" /> : 'Sign Up'}
                </button>
              </div>

              <p className="mt-5 text-textColor text-center">
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
