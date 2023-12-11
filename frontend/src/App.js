import React from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Readuser from "./Readuser";
import Updateuser from "./Updateuser";
import Crreate from "./Crreate";

export default function App() {
  return (
    <div>

      
      <Routes>
   
        <Route path="/" element={<Home />} />
        <Route path="/readuser/:id" element={<Readuser />} />
        <Route path="/updateuser/:id" element={<Updateuser />} />
        <Route path="/createuser" element={<Crreate />} />
      </Routes>
    </div>
  );
}
