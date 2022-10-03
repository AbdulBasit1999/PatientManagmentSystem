import React from "react";
import { Routes, Route} from "react-router-dom"; 
import './App.css';
//import AdminLogin from "./adminLogin";
import Home from "./home";
import Token from "./token";
import Patients from "./patients";
import Navbar from "./navbar";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route  index  element={<Home />}/>
            <Route path="token" element={<Token />}/>
            <Route path="patients" element={<Patients />}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
