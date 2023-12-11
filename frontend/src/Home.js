import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";


export default function Home() {
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
     const [userData, setUserData] = useState([]);
  const fetchAllUser = async () => {
    const res = await axios.get("http://localhost:5000/readalluser");
    console.log(res);
    setUserData(res.data);
  };
  useEffect(() => {
    fetchAllUser();
  }, []);


   const handleDelete=async(id)=>{
    const res=await axios.delete(`http://localhost:5000/deleteuser/${id}`);
    if(res.status===200){
        fetchAllUser();
    }

   }


  
  return (
    <div className="w-2/3 mx-auto mt-5 flex  md:block rounded-2xl ">
     
      <div className=" mb-8">
      <Link to="/createuser" className="p-28 px-4 py-2 text-center bg-yellow-400 rounded-2xl">
              ADD NEW (+)
            </Link>

      </div>
      <div className=" relative overflow-x-auto shadow-md mb-20 rounded-md">
        <table className=" w-full text-lg text-center text-gray-500 rounded-2xl">
          <thead className="text-[17px] text-gray-700 uppercase bg-gray-500">
            <tr>
              <th scope="col" className="px-6 py-3">
                No.
              </th>

              <th scope="col" className="px-6 py-3">
                Profile
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className=" -6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Password
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {userData.map((item,i) => (
              <tr tr className="border-b bg-gray-50 dark:bg-gray-700 dark:border-gray-300">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {i + 1}
                </th>
                <th scope="row"
                className=" px-6 py-4 font-medium text-gray-900">
                  {item?.profile}
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 "
                >
                  {item?.name}
                </th>
                <td className="px-6 py-4 font-medium text-gray-900">
                  {item?.email}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900">
                  {item?.password}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900">
                  <div className=" flex gap-x-4 justify-center">
                    <NavLink
                    to={`/readuser/${item._id}`}
                    className="font-medium text-green-500 dark:text-blue-500 hover:text-orange-500 hover:underline">
                      Read
                    </NavLink>
                  
                    <NavLink 
                     to={`/updateuser/${item._id}`} 
                    className="font-medium text-green-500 dark:text-blue-500 hover:text-orange-500 hover:underline">
                      Edit
                    </NavLink>
                    <button
                    onClick={()=>handleDelete(item._id)}
                    className="font-medium text-green-500  hover:text-orange-500 hover:underline">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
