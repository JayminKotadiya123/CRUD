import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function Readuser() {
 const{id}=  useParams()


 const [userData, setUserData] = useState([]);
 const fetchSingleUser = async () => {
   const res = await axios.get(`http://localhost:5000/read/${id}`);
   console.log(res);
   setUserData(res.data);
 };
 useEffect(() => {
   fetchSingleUser();
 }, []);




  return (
    <div>
         <div className="w-2/3 mx-auto mt-5 flex  md:block">
    

      <div className=" relative overflow-x-auto shadow-md">
        <table className=" w-full text-lg text-center text-gray-500">
          <thead className="text-[17px] text-gray-700 uppercase bg-gray-500">
            <tr>
              <th scope="col" className="px-6 py-3">
                No.
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Password
              </th>
              
            </tr>
          </thead>
          <tbody>
            
              <tr className="border-b bg-gray-50 dark:bg-gray-700 dark:border-gray-300">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >1
                
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                 {userData.name}
                </th>
                <td className="px-6 py-4 font-medium text-gray-900">
                {userData.email}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900">
                 {userData.password}
                </td>
         
              </tr>
          
          </tbody>
        </table>
      </div>
    </div>r</div>
  )
}
