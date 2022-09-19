import React from "react";
import "./adminLogin.css";
//import {Link} from "react-router-dom";
import bgPic from "../images/adminLogin.jpg";

const AdminLogin = () => {
    return (
        <div className="header">
            hello world
            <div className="container">
                <div className="formContainer">
                    <form action="#">
                        <input type="text" placeholder="Username"/>
                        <input type="password" placeholder="Password"/>
                        <input type="submit" id="login" value="Login"/>
                    </form>
                </div>
                <img src={bgPic} />
            </div>
        </div>
    );
};
export default AdminLogin;