import React, { Component } from "react";

export default class Appointments extends Component{
    
    constructor(){
        super();
        this.state = {
            token : "",
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
                                    <label>Token #</label>
                                </div>
                                <div className="col2">
                                    <input name="token" type="text" value={this.state.token} onChange={this.getValue} />
                                </div>
                            </div>
                            <div className="row">
                                <input id="save" type="submit" value="Search" onClick={this.handleSubmit} />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="appointmnets">
                    <table>
                        <tr>
                            <th>Sr#</th>
                            <th>Date</th>
                            <th>Patient Id</th>
                            <th>Patient Name</th>
                            <th>Doctor Id</th>
                            <th>Doctor Name</th>
                            <th>Time</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>12-4-22</td>
                            <td>123</td>
                            <td>Ali</td>
                            <td>123</td>
                            <td>Ahmed</td>
                            <td>12:30:00</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>12-4-22</td>
                            <td>123</td>
                            <td>Ali</td>
                            <td>123</td>
                            <td>Ahmed</td>
                            <td>12:30:00</td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}