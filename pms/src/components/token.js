import {Component, React} from "react";
import "./token.css";

export default class Token extends Component{

    constructor(){
        super();
        this.state = {
            name : "",
            gender : "",
            age : "",
            cnic : "",
            phone : "",
            email : "",
            address : "",
            disease : "",
        }
    }

    getValue =(e) => {
        const { name , value} = e.target;
        this.setState({[name]:value});
    }

    handleSubmit = (e) => {
        alert("data is fetched");
    }

    render(){
        return(
            <div className="container">
                <div className="form-container">
                    <div className="header">
                        <h1>PATIENT'S INFORMATION</h1>
                    </div>
                    <form>
                        <div className="row">
                            <div className="col1">
                                <label>Name</label>
                            </div>
                            <div className="col2">
                                <input name="name" type="text" value={this.state.name} onChange={this.getValue} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col1">
                                <label>Gender</label>
                            </div>
                            <div className="col2">
                                <input name="gender" type="radio" value="male" onChange={this.getValue} />
                                <label>Male</label>
                                <input name="gender" type="radio" value="female" onChange={this.getValue} />
                                <label>Female</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col1">
                                <label>Age</label>
                            </div>
                            <div className="col2">
                                <input name="age" type="numeric" value={this.state.age} onChange={this.getValue} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col1">
                                <label>Cnic</label>
                            </div>
                            <div className="col2">
                                <input name="cnic" type="text" value={this.state.cnic} onChange={this.getValue} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col1">
                                <label>Phone #</label>
                            </div>
                            <div className="col2">
                                <input name="phone" type="numeric" value={this.state.phone} onChange={this.getValue} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col1">
                                <label>Email</label>
                            </div>
                            <div className="col2">
                                <input name="email" type="email" value={this.state.email} onChange={this.getValue} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col1">
                                <label>Address</label>
                            </div>
                            <div className="col2">
                                <textarea name="address" value={this.state.address} onChange={this.getValue} ></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col1">
                                <label>Disease</label>
                            </div>
                            <div className="col2">
                                <input name="disease" type="text" value={this.state.disease} onChange={this.getValue} />
                            </div>
                        </div>
                        <div className="row">
                            <input id="save" type="submit" value="Save" onClick={this.handleSubmit} />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}