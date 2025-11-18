import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const [formData, setFormData] = useState({
    teachername: "",
    email: "",
    password: "",
    age: "",
    sub: "",
    image: null,   
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      const file = files[0];
      setFormData({ ...formData, image: file });

      const imgURL = URL.createObjectURL(file);
      setPreview(imgURL);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.teachername ||
      !formData.email ||
      !formData.password ||
      !formData.age ||
      !formData.sub ||
      !formData.image
    ) {
      alert("Please fill in all fields including your photo.");
      return;
    }

   
    const reader = new FileReader();
    reader.onloadend = () => {
      const imageBase64 = reader.result;

      const newUser = {
        ...formData,
        image: imageBase64,
      };

      const savedTeachers = JSON.parse(localStorage.getItem("teachers")) || [];
      localStorage.setItem("teachers", JSON.stringify([...savedTeachers, newUser]));

      toast.success("Registration Successful!");
      alert("Registration Completed!");

      navigate("/login");
    };

    reader.readAsDataURL(formData.image);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
     
      <div className="w-1/2 bg-blue-900 text-white flex flex-col justify-center px-16 relative">
        <div className="absolute top-10 right-10 w-48 h-48 rounded-full bg-blue-700 opacity-40"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-blue-700 opacity-40"></div>

        <h1 className="text-4xl font-bold z-10">Create Your Account</h1>
        <p className="text-lg mt-4 opacity-90 z-10">
          Register as a teacher and manage your subjects easily.
        </p>
      </div>

      {/* RIGHT FORM PANEL */}
      <div className="w-1/2 flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white w-[420px] p-10 rounded-3xl shadow-xl"
        >
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">
            Sign Up
          </h2>

          <div className="space-y-4">

           
            <div>
              <label className="font-semibold text-gray-700">Upload Your Photo</label>
              <div className="mt-2">
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                  className="w-full py-2 px-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700"
                />
              </div>
            </div>

            <input
              type="text"
              name="teachername"
              placeholder="User Name"
              value={formData.teachername}
              onChange={handleChange}
              className="w-full py-3 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full py-3 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full py-3 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700"
            />

            <input
              type="text"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              className="w-full py-3 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700"
            />

            <input
              type="text"
              name="sub"
              placeholder="Subject"
              value={formData.sub}
              onChange={handleChange}
              className="w-full py-3 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-6 py-3 bg-blue-900 text-white font-bold rounded-xl hover:bg-blue-800 transition"
          >
            Register
          </button>

          <p className="text-center mt-4">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-blue-700 font-semibold cursor-pointer"
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;