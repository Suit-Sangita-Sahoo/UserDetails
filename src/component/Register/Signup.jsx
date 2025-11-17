import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Signup = () => {
  const [formData, setFormData] = useState({
    teachername: "",
    email: "",
    password: "",
    age: "",
    sub: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (
      !formData.teachername ||
      !formData.email ||
      !formData.password ||
      !formData.age ||
      !formData.sub
    ) {
      alert("Please fill in all fields.");
      return;
    }

    
    const existingData = JSON.parse(localStorage.getItem("teachers")) || [];
    const updatedData = [...existingData, formData];
    localStorage.setItem("teachers", JSON.stringify(updatedData));

     toast.success("Registration Successful!");
    alert("Registration Completed!");

    
    setFormData({
      teachername: "",
      email: "",
      password: "",
      age: "",
      sub: "",
    });

    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-200">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-[350px] p-6 rounded-2xl shadow-lg"
      >
        <h2 className="text-2xl font-bold text-center text-blue-900 mb-4">
          Create Account
        </h2>

       
        <label className="block mb-3">
          <p className="font-semibold">Teacher Name</p>
          <input
            type="text"
            name="teachername"
            placeholder="Enter Name"
            value={formData.teachername}
            onChange={handleChange}
            className="w-full h-[40px] px-3 border rounded-md focus:outline-none"
          />
        </label>

       
        <label className="block mb-3">
          <p className="font-semibold">Email</p>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full h-[40px] px-3 border rounded-md focus:outline-none"
          />
        </label>

       
        <label className="block mb-3">
          <p className="font-semibold">Password</p>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full h-[40px] px-3 border rounded-md focus:outline-none"
          />
        </label>

       
        <label className="block mb-3">
          <p className="font-semibold">Age</p>
          <input
            type="text"
            name="age"
            placeholder="Enter Age"
            value={formData.age}
            onChange={handleChange}
            className="w-full h-[40px] px-3 border rounded-md focus:outline-none"
          />
        </label>

        
        <label className="block mb-4">
          <p className="font-semibold">Subject</p>
          <input
            type="text"
            name="sub"
            placeholder="Enter Subject"
            value={formData.sub}
            onChange={handleChange}
            className="w-full h-[40px] px-3 border rounded-md focus:outline-none"
          />
        </label>

        
        <button
          type="submit"
          className="w-full h-[45px] bg-blue-900 text-white rounded-md font-bold hover:bg-blue-800 transition"
        >
          Register
        </button>

        
        <div className="text-center mt-4 flex justify-center gap-2">
          <p>Already have an account?</p>
          <span
            onClick={() => navigate("/login")}
            className="text-blue-700 cursor-pointer font-semibold"
          >
            Login
          </span>
        </div>
      </form>
    </div>
  );
}

export default Signup
