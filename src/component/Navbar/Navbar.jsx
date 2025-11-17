import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [Name, setName] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("teachers")) || [];
    if (data.length > 0) {
      setName(data[data.length - 1].teachername);
    }
  }, []);

  return (
    <nav className="w-full h-[60px] bg-gray-100 flex items-center justify-between px-6 shadow-md">

      <div className="flex items-center gap-3">
        <img
          src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"
          alt="Logo"
          className="w-[45px] h-[45px]"
        />

        <h2 className="text-xl font-bold text-blue-700">
          {Name ? Name : "UserDetails"}
        </h2>
      </div>

      <ul className="flex gap-10 font-semibold text-blue-950">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/reference">References</Link></li>
      </ul>

      <div>
        <Link
          to="/login"
          className="px-4 py-2 rounded-lg bg-blue-900 text-white font-bold hover:bg-blue-700"
        >
          Login
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;
