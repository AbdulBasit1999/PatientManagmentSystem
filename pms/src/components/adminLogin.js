import React, { Component } from "react";
import "./adminLogin.css";
import {useNavigate} from "react-router-dom";
import bgPic from "../images/adminLogin.jpg";

export default class AdminLogin extends Component{
    constructor(){
        super();
        this.state = {
            username : "",
            password : "",
        }
    }

    getValue =(e) => {
        const { name , value} = e.target;
        this.setState({[name]:value});
    }
    

    handleSubmit = (e) => {
        if(this.state.password !== "" && this.state.username!== ""){
            if(this.state.password === "1234" && this.state.username === "hamza"){
                const navigate = useNavigate();
                navigate("/home");
            }else{
                alert("incorrect data");
            }
        }else{
            alert("Input fields are empty");
        }
    }

    render(){
        console.log("state: ",this.state)
        return (
            <div className="container">
                <div className="formContainer">
                    <form>
                        <input name="username" type="text" placeholder="Username" value={this.state.username} onChange={this.getValue}  />
                        <input name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.getValue} />
                        <input type="submit" id="login" value="Login" onClick={this.handleSubmit}/>
                    </form>
                </div>
                <img src={bgPic} alt ="background" />
            </div>
        );
    }
}