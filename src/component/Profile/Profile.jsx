import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("teachers")) || [];
    if (data.length > 0) {
      setUser(data[data.length - 1]);
    }
  }, []);

  if (!user) {
    return (
      <div className="w-[300px] mx-auto mt-[100px] p-4 bg-gray-200 rounded-md text-center">
        <p>No Profile Found</p>
      </div>
    );
  }

  return (
    <div className="w-[350px] mx-auto mt-[80px] bg-blue-100 p-5 rounded-lg">
      <h2 className="text-center text-[22px] font-bold mb-4">My Profile</h2>

      <div className="bg-white p-4 rounded-md shadow">
        <p className="mb-3"><b>Name:</b> {user.teachername}</p>
        <p className="mb-3"><b>Email:</b> {user.email}</p>
        <p className="mb-3"><b>Age:</b> {user.age}</p>
        <p className="mb-3"><b>Subject:</b> {user.sub}</p>
      </div>

      <div className="mt-5 flex justify-center">
        <Link
          to="/upload"
          className="bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-all shadow-md"
        >
          Upload CV
        </Link>
      </div>
    </div>
  );
};

export default Profile;
