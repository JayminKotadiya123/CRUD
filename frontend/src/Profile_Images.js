import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addProfileImage } from "./Crreate";




const profileImages = [];
 function addProfileImages(previewImg) {
  profileImages.push({ previewImg });
}


export default function Create() {
  const [previewImg, setPreviewImg] = useState(
    "https://lh3.googleusercontent.com/a-/AFdZucpC_6WFBIfaAbPHBwGM9z8SxyM1oV4wB4Ngwp_UyQ=s96-c"
  );

  const loadFile = (event) => {
    const input = event.target;
    const file = input.files[0];

    setPreviewImg(URL.createObjectURL(file));
  };

  const navigation = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Add profile image details to profile_images.js
    addProfileImages(previewImg);

    // Reset inputUser state
    setPreviewImg(
      "https://lh3.googleusercontent.com/a-/AFdZucpC_6WFBIfaAbPHBwGM9z8SxyM1oV4wB4Ngwp_UyQ=s96-c"
    );

    navigation("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <h1 className="text-4xl" style={{ fontWeight: "bold" }}>
          Create User
        </h1>

        <div className="flex items-center space-x-6 mb-5">
          <div className="shrink-0">
            <img
              id="preview_img"
              className="h-16 w-16 object-cover rounded-full"
              src={previewImg}
              alt="Current profile photo"
            />
          </div>
          <label className="block">
            <span className="sr-only">Choose profile photo</span>
            <input
              type="file"
              onChange={loadFile}
              className="block w-full text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-violet-50 file:text-violet-700
              hover:file:bg-violet-100"
            />
          </label>
        </div>

        <div className="flex justify-center my-4">
          <button
            type="submit"
            className="px-8 py-2 bg-yellow-400 rounded-lg m-5"
          >
            Submit
          </button>
          <Link to="/" className="px-8 py-10 bg-red-500 rounded-lg m-5">
            Back
          </Link>
        </div>
      </form>
    </div>
  );
}
