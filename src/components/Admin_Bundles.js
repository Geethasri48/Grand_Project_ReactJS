import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Table } from "react-bootstrap";
import Table from 'react-bootstrap/Table'


//npm i --save @fortawesome/fontawesome-svg-core
function Admin_Bundles() {
    return (
        <div>
            <div className="row">
                <div className="col-md-12"><h2 style={{textAlign:"center"}}>Bundles Info</h2></div>
            </div>
            <div className="row">
                
                    
                        <div className="col-md-1"></div>
                        <div className="col-md-10" style={{background:"#e4f6e9",borderRadius:"10px",boxShadow:"2px 2px 2px 2px"}}>
                            
                                <div className="row">
                                    <div className="col-md-3" style={{ float: "left" }}>
                                        <span style={{ fontSize: "25px" }}>Bundles</span>
                                    </div>
                                    <div className="col-md-6"></div>
                                    <div className="col-md-3" style={{ float: "right" }}><button style={{ fontSize: "15px", borderRadius: "5px", background: "green", color: "white", borderBlockColor: "white" }}>ADD</button></div>
                                </div>
                                <div className="row">
                                    <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-3">
                                        <button style={{ fontSize: "15px", borderRadius: "5px" }}>PDF</button>
                                        <button style={{ fontSize: "15px", borderRadius: "5px" }}>EXCEL</button>
                                    </div>
                                    <div className="col-md-6"></div>
                                    <div className="col-md-3">
                                        <div><span style={{ fontSize: "15px", borderRadius: "5px" }}>SEARCH</span>
                                            <span><input type="textarea"></input></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                    <div className="row">
                <div className="container">
                    <div className="row">
                        {/* <div className="col-md-2"></div> */}
                        <div className="col-md-12">
                            <div style={{ backgroundColor: " #2b7340", width: "100%", height: 3 }}><hr></hr></div>
                        </div>
                        {/* <div className="col-md-2"></div> */}
                    </div>
                </div>
            </div>
                            
                        
                        {/* <div className="col-md-2"></div> */}
                        <div className="row">
                {/* <div className="container"> */}
                    <div className="row" style={{ justifyContent: "centre",marginTop:"20px" }}>
                        {/* <div className="col-md-2"></div> */}
                        <div className="col-md-12" style={{ background: "", borderRadius: "10px" ,}}  >
                            <Table striped style={{borderRadius:"10px"}}>
                                <thead>
                                    <tr>
                                        <th>SNo</th>
                                        <th>UserId</th>
                                        
                                        <th>College</th>
                                        <th>Location</th>
                                        <th>No.of Bundles</th>
                                        <th>Bundles Received</th>
                                        <th>Remarks</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>2364</td>                                        
                                        <td>AEC</td>
                                        <td>AdminCell</td>
                                        <td>288</td>                                                                               
                                        <td>2023-03-11</td>
                                        <td>NO</td>
                                    </tr>
                                    <tr>
                                    <td>2</td>
                                        <td>2364</td>                                        
                                        <td>AEC</td>
                                        <td>AdminCell</td>
                                        <td>288</td>                                                                               
                                        <td>2023-03-11</td>
                                        <td>NO</td>
                                    </tr>
                                    <tr>
                                    <td>3</td>
                                        <td>2364</td>                                        
                                        <td>AEC</td>
                                        <td>AdminCell</td>
                                        <td>288</td>                                                                               
                                        <td>2023-03-11</td>
                                        <td>NO</td>
                                    </tr>
                                    <tr>
                                    <td>4</td>
                                        <td>2364</td>                                        
                                        <td>AEC</td>
                                        <td>AdminCell</td>
                                        <td>288</td>                                                                               
                                        <td>2023-03-11</td>
                                        <td>NO</td>
                                    </tr>
                                    <tr>
                                    <td>5</td>
                                        <td>2364</td>                                        
                                        <td>AEC</td>
                                        <td>AdminCell</td>
                                        <td>288</td>                                                                               
                                        <td>2023-03-11</td>
                                        <td>NO</td>
                                    </tr>
                                    <tr>
                                    <td>6</td>
                                        <td>2364</td>                                        
                                        <td>AEC</td>
                                        <td>AdminCell</td>
                                        <td>288</td>                                                                               
                                        <td>2023-03-11</td>
                                        <td>NO</td>
                                    </tr>
                                    
                                </tbody>
                            </Table>
                        </div>
                        
                    </div>
                {/* </div> */}
            </div>
                    </div>
                    
                    <div className="col-md-2"></div>
                
            </div>
            
            
        </div>
    )
}

export default Admin_Bundles;