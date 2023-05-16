import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Admin_Mac_Info.css';


function Admin_Mac_Info(){
    return (
        <div className="container" id="m">
            <div className="row">
                <div className="col-md-12"><center><h2>MachineInfo</h2></center></div>
            </div>
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10" id="main">
                    <div className="container">
                        <div className="row" style={{paddingTop:"10px"}}>
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-3" style={{textAlign:"center",fontSize:"30px"}}><span>MachineInfo</span></div>
                                    <div className="col-md-6"></div>
                                    <div className="col-md-3" style={{textAlign:"center"}}><button >Add</button></div>
                                </div>
                                <div className="row"style={{background:"#00897b",height:"5px",marginTop:"10px"}}></div>
                                <div className="row" id="tabledata">
                                    
                                    <table >
                                        <thead >
                                            <tr >
                                                <td >S.No</td>
                                                <td>UserName</td>
                                                <td>Machine Id</td>
                                                <td>Actions</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>acet.examcell</td>
                                                <td>ACET/EXAMCELL</td>
                                                <td><button id="btnleft">Edit</button><button id="btnright">Delete</button></td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>acoe.examcell</td>
                                                <td>ACOE/EXAMCELL</td>
                                                <td><button id="btnleft">Edit</button> <button id="btnright">Delete</button></td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>admin.cell</td>
                                                <td>AEC/ADMINCELL</td>
                                                <td><button id="btnleft">Edit</button> <button id="btnright">Delete</button></td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>hod.cse</td>
                                                <td>ACET/HOD/CSE</td>
                                                <td><button id="btnleft">Edit</button> <button id="btnright">Delete</button></td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>hod.ece</td>
                                                <td>ACET/HOD/ECE</td>
                                                <td><button id="btnleft">Edit</button> <button id="btnright">Delete</button></td>
                                            </tr>
                                            <tr>
                                                <td>6</td>
                                                <td>aec.examcell</td>
                                                <td>AEC/EXAMCELL</td>
                                                <td><button id="btnleft">Edit</button> <button id="btnright">Delete</button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                  
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>
        </div>
    )
}
export default Admin_Mac_Info;