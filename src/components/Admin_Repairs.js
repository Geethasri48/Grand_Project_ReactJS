import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Admin_Repairs.css';
function repairmaintain(){
    return(
        <div className="container">
            <div className="row">
                <div className="container" >
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4" style={{textAlign:"center"}}><h2>Repair Reports</h2></div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="container" id="tablerow">
                    <div className="row" style={{textAlign:"center",marginTop:"10px"}}>
                        <div className="col-md-6"><h4 style={{float:"left"}}>Repairs&Maintainance</h4></div>
                        <div className="col-md-6"><span style={{float:"right"}}><button>Add</button></span></div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div style={{height:"5px",background:"#004d40",marginTop:"10px"}}></div>
                        </div>
                    </div>
                    <div className="row" >
                        <div className="col-md-12" style={{textAlign:"center",marginTop:"10px"}}>
                            <label>Search</label>
                            <input type="text" id="msearch"></input>
                        </div>
                    </div>
                    <div className="row" id="tablerow1">
                        
                        <div className="col-md-12" >
                            
                            <table  striped style={{boxShadow: "2px 2px 2px 2px black"}}>
                                <thead>
                                    <tr>
                                        <td>S.No</td>
                                        <td>UserId</td>
                                        <td>MachineId</td>
                                        <td>College</td>
                                        <td>Location</td>
                                        <td>Type Of Work</td>
                                        <td>Type Of Material</td>
                                        <td>Machine Reading</td>
                                        <td>Amount</td>
                                        <td>Remarks</td>
                                        <td>Date</td>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                        <td>1</td>
                                        <td>ACET_EXAMCELL</td>
                                        <td>ACET/E_CELL/XM01</td>
                                        <td>ACET</td>
                                        <td>EXAMCELL</td>
                                        <td>Repair</td>
                                        <td>Spares</td>
                                        <td>358548</td>
                                        <td>600</td>
                                        <td>Fixing Unit Film</td>
                                        <td>13-02-2023</td>
                                    </tr>
                                </tbody>
                            </table>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default  repairmaintain;