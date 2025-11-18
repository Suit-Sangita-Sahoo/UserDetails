import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UploadCV = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadCV = () => {
    if (!file) {
      toast.error("Please select a file");
      return;
    }

   
    let user = JSON.parse(localStorage.getItem("current_user"));
    user.cvName = file.name;

    localStorage.setItem("current_user", JSON.stringify(user));
    localStorage.setItem("cvFile", file.name);


    toast.success("CV uploaded!");
    navigate("/profile");
  };

  return (
    <div className="flex flex-col items-center mt-20 p-6 bg-gray-100 rounded-lg w-[350px] mx-auto shadow-md">
      <h2 className="text-xl font-bold mb-4 text-blue-700">Upload Your CV</h2>

      <input type="file" onChange={handleFile} className="mb-4" />

      {file && <p>Selected File: <b>{file.name}</b></p>}

      <button
        onClick={uploadCV}
        className="bg-blue-700 text-white px-4 py-2 rounded-lg w-full mt-3"
      >
        Upload
      </button>
    </div>
  );
};

export default UploadCV;