import React from "react";
import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Home from "./Home";

const Layout = () => {
  return (
    <div>
      <Home />
      <div className="pt-[20px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
