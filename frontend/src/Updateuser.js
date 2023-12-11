import React from 'react';
import {useState,useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


export default function Updateuser() {

    const [inputUser, setInputUser] = useState({
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
        console.log(inputUser);
        const res = await axios.put(`http://localhost:5000/update/${id}`,inputUser);
        console.log(res);

        if(res.status===200){
            window.location='/'
        }
        // fetchAllUser();
      };

      // data fatching update
      const{id}=useParams();
      const fetchSingleUser = async () => {
        const res = await axios.get(`http://localhost:5000/read/${id}`);
        console.log(res);
        setInputUser({
             name: res.data.name,
            email: res.data.email,
             password: res.data.password
        });
      };
      useEffect(() => {
        fetchSingleUser();
      }, []);
    


  return (
    <div className='w-2/3 mx-auto mt-5'>


<form onSubmit={handleSubmit} >
   

   <h1 class="text-4xl" style={{fontWeight:"bold"}}>Update User</h1>



   <div className="">
     <label className="text-xl text-gray-400"  style={{fontWeight:"bolder"}}>Name:-</label>
     <input
       type="text"
       name="name"
       className="w-full  border p-4 focus:outline-none focus:border-red-500 hover:border-green-500 transition-colors duration-300 border-transparent shadow-md"
       placeholder="Enter Your Name"
       required
       value={inputUser.name}
       onChange={handleChange}
     />
   </div>

   <div className="">
     <label className=" text-xl text-gray-400" style={{fontWeight:"bolder"}}>Email:-</label>
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
     <label className="text-xl text-gray-400 " style={{fontWeight:"bolder"}}>Password:-</label>
     <input
       type="password"
       name="password"
       className=" w-full  border p-4 focus:outline-none focus:border-red-500 hover:border-green-500 transition-colors duration-300 border-transparent shadow-md"
       placeholder="Enter Password"
       required
       value={inputUser.password}
       onChange={handleChange}
     />
   </div>
   <div className=" flex justify-center my-4">
     <button type="submit" className=" px-4 py-2 bg-yellow-400 rounded-lg">
       Update
     </button>
   </div>
 </form>
         
    </div>
  )
}
