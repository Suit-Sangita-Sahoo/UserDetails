import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Home from "../Home";

const Navbar = () => {
  const [Name, setName] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("teachers")) || [];
    if (data.length > 0) {
      setName(data[data.length - 1].teachername);
    }
  }, []);

  return (
    <nav className="w-full shadow-lg bg-white/80 backdrop-blur-md fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-[70px]">

       
        <div className="flex items-center gap-3">
          <img
            src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"
            alt="Logo"
            className="w-[
            50px] h-[50px] rounded-full shadow-md"
          />

          <h2 className="text-2xl font-bold text-blue-800 tracking-wide">
            {Name ? Name : "User Details"}
          </h2>
        </div>

       
        <ul className="hidden md:flex gap-10 font-semibold text-blue-900">
          <li className="hover:text-blue-600 transition"><Link to="/home">Home</Link></li>
          <li className="hover:text-blue-600 transition"><Link to="/about">About</Link></li>
          <li className="hover:text-blue-600 transition"><Link to="/contact">Contact</Link></li>
          <li className="hover:text-blue-600 transition"><Link to="/reference">References</Link></li>
        </ul>

        
        <div>
          <Link
            to="/login"
            className="px-5 py-2 rounded-xl bg-blue-700 text-white font-semibold shadow-md hover:bg-blue-800 transition-all"
          >
            Login
          </Link>
        </div>

      </div>
      
    </nav>
    
  );
};

export default Navbar;
