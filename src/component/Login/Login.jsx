import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [formdata, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formdata, [name]: value });
  };

  const handleForm = (e) => {
    e.preventDefault();

    const savedUsers = JSON.parse(localStorage.getItem("teachers")) || [];

    const current_user = savedUsers.find(
      (u) => u.email === formdata.email
    );

    if (!current_user) {
      toast.warning("User not registered!");
      return;
    }

    if (current_user.password === formdata.password) {
      toast.success("Login Successful!");
      localStorage.setItem("current_user", JSON.stringify(current_user));
      navigate("/profile");
    } else {
      toast.error("Incorrect Password!");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* LEFT IMAGE PANEL */}
      <div
        className="w-1/2 relative bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=60')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>

        <div className="relative z-10 flex flex-col justify-center h-full px-16 text-white">
          <h1 className="text-4xl font-bold">Welcome Back</h1>
          <p className="text-lg mt-4 opacity-90">
            We're happy to see you again! Login to continue managing your
            teacher profile.
          </p>
        </div>
      </div>

      {/* RIGHT FORM PANEL */}
      <div className="w-1/2 flex justify-center items-center">
        <form
          onSubmit={handleForm}
          className="bg-white w-[400px] p-10 rounded-3xl shadow-xl"
        >
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">
            Login
          </h2>

          <div className="space-y-4">
            <input
              type="text"
              name="email"
              placeholder="Enter Email"
              className="w-full py-3 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700"
              value={formdata.email}
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="w-full py-3 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700"
              value={formdata.password}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full mt-6 py-3 bg-blue-900 text-white font-bold rounded-xl hover:bg-blue-800 transition"
          >
            Login
          </button>

          <p className="text-center mt-4">
            Don't have an account?
            <Link to="/signup" className="text-blue-700 font-semibold ml-2">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;