import React from "react";
import {Router, Routes, Route} from "react-router-dom"; 
import './App.css';
import AdminLogin from "./adminLogin";
import Home from "./home";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route  path="/" element={<AdminLogin />}></Route>
          <Route  path="/home" element={<Home />}></Route>
        </Routes>
    </div>
  );
}

export default App;
