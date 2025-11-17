import React, { useState } from "react";
import { toast } from "react-toastify";

const UploadCV = () => {
  const [file, setFile] = useState(null);

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadCV = () => {
    if (!file) {
      toast.error("Please select a file first");
      return;
    }

    localStorage.setItem("cvFile", file.name);

    toast.success("CV Uploaded Successfully!");
    setFile(null);
  };

  return (
    <div className="flex flex-col items-center mt-20 p-6 bg-gray-100 rounded-lg w-[350px] mx-auto shadow-md">

      <h2 className="text-xl font-bold mb-4 text-blue-700">Upload Your CV</h2>

      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleFile}
        className="mb-4"
      />

      {file && (
        <p className="text-gray-700 mb-3">
          Selected File: <b>{file.name}</b>
        </p>
      )}

      <button
        onClick={uploadCV}
        className="bg-blue-700 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-600"
      >
        Upload
      </button>

    </div>
  );
};

export default UploadCV;
