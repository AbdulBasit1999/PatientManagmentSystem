import React, { Component } from "react";

export default class Doctors extends Component{
    
    constructor(){
        super();
        this.state = {
            id : "",
            name : "",
        }
    }

    getValue = (e) =>{
        const {name , value} = e.target;
        this.setState({[name]:value});
    }

    handleSubmit = (e) =>{

    }

    render(){
        return(
            <div className="container">
                <div className="search">
                    <div className="form-container">
                        <form>
                            <div className="row">
                                <div className="col1">
                                    <label>Doctors's Id</label>
                                </div>
                                <div className="col2">
                                    <input name="id" type="text" value={this.state.id} onChange={this.getValue} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col1">
                                    <label>Name</label>
                                </div>
                                <div className="col2">
                                    <input name="name" type="text" value={this.state.name} onChange={this.getValue} />
                                </div>
                            </div>
                            <div className="row">
                                <input id="save" type="submit" value="Search" onClick={this.handleSubmit} />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="patient-data">
                    <div className="row">
                        <div className="col1">
                            <label>Id</label>
                        </div>
                        <div className="col2">
                            <label>012323</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col1">
                            <label>Name</label>
                        </div>
                        <div className="col2">
                            <label>Hamza</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col1">
                            <label>Gender</label>
                        </div>
                        <div className="col2">
                            <label>Male</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col1">
                            <label>Cnic</label>
                        </div>
                        <div className="col2">
                            <label>234234-342342322-1</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col1">
                            <label>Email</label>
                        </div>
                        <div className="col2">
                            <label>dasdas@gmail.com</label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}