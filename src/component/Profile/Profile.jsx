import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [cvName, setCvName] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("current_user"));
     const storedCv = localStorage.getItem("cvFile");


    setUser(data);
    setCvName(storedCv);
  }, []);

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-200 to-blue-400">
        <div className="bg-white/70 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg">
          <p className="text-lg font-semibold text-gray-700">No Profile Found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex justify-center items-center px-4">
      <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl w-full max-w-4xl p-10 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT SIDE: DETAILS */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-5">Profile Details</h2>

          <div className="space-y-4 text-lg text-gray-700">
            <p><b className="text-blue-900">Name:</b> {user.teachername}</p>
            <p><b className="text-blue-900">Email:</b> {user.email}</p>
            <p><b className="text-blue-900">Age:</b> {user.age}</p>
            <p><b className="text-blue-900">Subject:</b> {user.sub}</p>
          </div>

          {/* Show CV name if uploaded */}
          <div className="mt-6">
            <p className="text-lg text-gray-700">
              <b className="text-blue-900">Uploaded CV:</b>{" "}
              {cvName ? (
                <span className="text-green-700 font-semibold">{cvName}</span>
              ) : (
                <span className="text-red-600">No CV Uploaded Yet</span>
              )}
            </p>
          </div>

          {/* Upload CV Button */}
          <div className="mt-8">
            <Link
              to="/upload"
              className="px-8 py-3 bg-blue-700 text-white font-semibold rounded-xl shadow-md hover:bg-blue-800 transition-all"
            >
              Upload CV
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE: IMAGE */}
        <div className="flex flex-col items-center">
          <img
            src={user.image || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
            alt="Profile"
            className="w-52 h-52 rounded-full shadow-xl border-4 border-white object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default Profile;