import React from 'react'
import Navbar from './Navbar/Navbar'
import { motion } from "framer-motion";
const Home = () => {
  return (
    <div className="w-full min-h-screen relative">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1600&q=80')",
        }}
      ></div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center min-h-screen px-5">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Build Something Amazing Today
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-gray-200 max-w-2xl mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Every great project starts with a simple idea.  
          Let your imagination shape the future.
        </motion.p>

        {/* Button */}
        <motion.button
          className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-xl shadow-xl transition-all"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Get Started
        </motion.button>
      </div>
    </div>
  );
}

export default Home
