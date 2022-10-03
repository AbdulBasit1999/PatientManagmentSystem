import {Component, React} from "react";
import "./patients.css"

export default class Patients extends Component{
    constructor(){
        super();
        this.state = {
            id : "",
            name : "",
            cnic : "",
        }
    }
    
    getValue = (e) =>{
        const { name , value } = e.target;
        this.setState({[name]:value});
    }
    handleSubmit = (e) => {
        alert("data is fetched");
    }

    render(){
        return(
            <div className="container">
                <div className="search">
                    <div className="form-container">
                        <form>
                            <div className="row">
                                <div className="col1">
                                    <label>Patient's Id</label>
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
                                <div className="col1">
                                    <label>Cnic</label>
                                </div>
                                <div className="col2">
                                    <input name="cnic" type="text" value={this.state.cnic} onChange={this.getValue} />
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
                <div className="patient-history">
                    <table>
                        <tr>
                            <th>Sr#</th>
                            <th>Date</th>
                            <th>Disease</th>
                            <th>Doctor Id</th>
                            <th>Doctor Name</th>
                            <th>Medicines</th>
                            <th>Bill</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>12-4-22</td>
                            <td>Cough</td>
                            <td>123</td>
                            <td>Ahmed</td>
                            <td>dasfas</td>
                            <td>2000</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>12-4-22</td>
                            <td>Cough</td>
                            <td>123</td>
                            <td>Ahmed</td>
                            <td>dasfas</td>
                            <td>2000</td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}