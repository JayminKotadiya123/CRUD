import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { addProfileImage } from "./Profile_Images";




export default function Crreate() {
  const [previewImg, setPreviewImg] = useState(
    "https://lh3.googleusercontent.com/a-/AFdZucpC_6WFBIfaAbPHBwGM9z8SxyM1oV4wB4Ngwp_UyQ=s96-c"
  );

  const loadFile = (event) => {
    const input = event.target;
    const file = input.files[0];

    setPreviewImg(URL.createObjectURL(file));

    URL.revokeObjectURL(previewImg);
  };

  const navigation = useNavigate();
  const [inputUser, setInputUser] = useState({
    profile: "",
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setInputUser({
      ...inputUser,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const res = await axios.post("http://localhost:5000/createuser", inputUser);

    setInputUser({
      profile: "",
      name: "",
      email: "",
      password: "",
    });

    navigation("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} class="max-w-lg mx-auto">
        <h1 class="text-4xl" style={{ fontWeight: "bold" }}>
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
              value={inputUser.profile}
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

        <div className="">
          <label
            className="text-xl text-gray-400"
            style={{ fontWeight: "bolder" }}
          >
            Name:-
          </label>
          <input
            type="text"
            name="name"
            className="w-full  border p-4 focus:outline-none focus:border-red-500 hover:border-green-500 transition-colors duration-300 border-transparent shadow-md"
            placeholder="Enter Your Name"
            required
            maxLength={20}
            minLength={3}
            value={inputUser.name}
            onChange={handleChange}
          />
        </div>

        <div className="">
          <label
            className=" text-xl text-gray-400"
            style={{ fontWeight: "bolder" }}
          >
            Email:-
          </label>
          <input
            type="email"
            name="email"
            className="w-full  border p-4 focus:outline-none focus:border-red-500 hover:border-green-500 transition-colors duration-300 border-transparent shadow-md"
            placeholder="Enter Your Email"
            required
            value={inputUser.email}
            onChange={handleChange}
          />
        </div>

        <div className="">
          <label
            className="text-xl text-gray-400"
            style={{ fontWeight: "bolder" }}
          >
            Password:-
          </label>
          <input
            type="password"
            name="password"
            className=" w-full  border p-4 focus:outline-none focus:border-red-500 hover:border-green-500 transition-colors duration-300 border-transparent shadow-md"
            placeholder="Enter Password"
            required
            maxLength={15}
            minLength={8}
            value={inputUser.password}
            onChange={handleChange}
          />
        </div>

        <div className=" flex justify-center my-4">
          <button
            type="submit"
            className=" px-8 py-2 bg-yellow-400 rounded-lg m-5"
          >
            Submit{" "}
          </button>
          <Link to="/" className="px-8 py-10 bg-red-500 rounded-lg m-5">
            Back
          </Link>
        </div>
      </form>
    </div>
  );
}
