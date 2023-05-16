import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from "react-bootstrap";
//import Table from 'react-bootstrap/Table'
// import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';

//npm i --save @fortawesome/fontawesome-svg-core
function Admin_Mac_Usage() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12"><h2 style={{textAlign:"center"}}>Usage Entry</h2></div>
            </div>
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                    <div className="row">
                        <div className="col-md-6" style={{float:"left"}}><h3>Machine Usage Entry</h3></div>
                        <div className="col-md-6" style={{justifyContent:"right"}}><button className="btn btn-success" style={{float:"right"}}>Add</button></div>
                    </div>
                    <div className="row">
                        <div className="col-md-12" style={{width:"100%",height:"3px",background:"#00897b"}}></div>
                    </div>
                    <div className="row" style={{marginTop:"10px"}}>
                        <div className="col-md-6"><span><button className="" variant="success" style={{float:"left"}}>EXCEL</button></span>
                        <span><button className="" variant="success" style={{marginLeft:"5px"}}>PDF</button></span></div>
                        <div className="col-md-6" >
                        <span style={{float:"right"}}>
                                <input type="textarea"></input>
                            </span>
                            <span  style={{float:"right"}}>Search:</span>
                            
                        </div>
                    </div>
                    <div className="row" style={{marginTop:"10px"}} >
                        <div className="col-md-12" style={{ borderRadius: "10px",overflowX:"scroll" }}>
                        <Table striped  style={{borderRadius:"10px",boxShadow:"2px 2px 5px 6px"}}>
                                <thead>
                                    <tr>
                                        <th>SNo</th>
                                        <th>UserId</th>
                                        <th>MachineId</th>
                                        <th>College</th>
                                        <th>Location</th>
                                        <th>Purpose of Work</th>
                                        <th>Type</th>
                                        <th>No.of Copies</th>
                                        <th>Approved Authority</th>
                                        <th>Remarks</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>2364</td>
                                        <td>AEC/A.CELL/PCMKO1</td>
                                        <td>AEC</td>
                                        <td>Admin cell</td>
                                        <td>ATTAINMENTS</td>
                                        <td>One side</td>
                                        <td>288</td>
                                        <td>H&BS</td>
                                        <td>NO</td>
                                        <td>2023-03-11</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>2364</td>
                                        <td>AEC/A.CELL/PCMKO1</td>
                                        <td>AEC</td>
                                        <td>Admin cell</td>
                                        <td>ATTAINMENTS</td>
                                        <td>One side</td>
                                        <td>288</td>
                                        <td>H&BS</td>
                                        <td>NO</td>
                                        <td>2023-03-11</td>
                                    </tr>
                                    
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>

        </div>
    )
}

export default Admin_Mac_Usage;