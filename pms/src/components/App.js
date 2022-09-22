import React from "react";
import {Route} from "react-router-dom"; 
import './App.css';
import AdminLogin from "./adminLogin";
import Home from "./home";

function App() {
  return (
    <div className="App">
      <AdminLogin />
    </div>
  );
}

export default App;
