import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState(""); // New state for storing error messages

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Reset error message on input change
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:5000/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "An error occurred during login.");
      }
      console.log(data); // Process successful response
      // Redirect user or clear form here
    } catch (error) {
      console.error('Error:', error);
      setError(error.message); // Set the error message to display to the user
    }
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <img
          className="absolute"
          src="./src/assets/images/avatar-icon.png"
          alt=""
          width="35px"
        />
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10 ml-[50px]">
          Hello! <span className="text-primaryColor">Welcome</span> Back
        </h3>

        <form onSubmit={handleLogin} className="py-4 md:py-0">
          {/* Display error message */}
          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

          <div className="mb-5">
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-b border-solid border-[#b300ff61] focus:outline-none
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
              className="w-full px-4 py-3 border-b border-solid border-[#b300ff61] focus:outline-none
                focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor 
                rounded-md cursor-pointer"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="mt-7">
            <button
              type="submit"
              className="w-full bg-primaryColor text-white text-[20px] leading-[30px]
                rounded-lg px-4 py-3"
            >
              Login
            </button>
          </div>

          <p className="mt-5 text-textColor text-center ">
            Don&apos;t have an account? <Link to={'/register'} className="text-primaryColor font-medium ml-1">Register</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
