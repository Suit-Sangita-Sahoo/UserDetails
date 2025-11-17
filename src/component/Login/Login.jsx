import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

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
    <form onSubmit={handleForm}>
      <div className="w-[350px] bg-blue-400 mx-auto mt-[130px] text-white rounded-2xl p-6 shadow-lg">
        <h1 className="text-[24px] text-center font-bold mb-6">
          Welcome Back ⭐
        </h1>

       
        <label className="block mb-4">
          <p className="mb-1">Email Address</p>
          <input
            type="text"
            name="email"
            placeholder="Enter Your Email"
            className="rounded-md w-full h-[40px] text-black px-3 outline-none"
            value={formdata.email}
            onChange={handleChange}
          />
        </label>

       
        <label className="block mb-6">
          <p className="mb-1">Password</p>
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            className="rounded-md w-full h-[40px] text-black px-3 outline-none"
            value={formdata.password}
            onChange={handleChange}
          />
        </label>

       
        <button
          type="submit"
          className="w-full h-[42px] bg-blue-800 rounded-lg font-bold hover:bg-blue-700 transition"
        >
          Login
        </button>

        
        <div className="flex justify-center mt-[25px]">
          <p>Don't have an account?</p>
          <Link to="/signup" className="text-white font-bold ml-2">
            Sign up
          </Link>
        </div>
      </div>
    </form>
  );
}

export default Login
