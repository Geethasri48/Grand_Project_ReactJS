// import React from "react";


// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Row, Col } from 'react-bootstrap';
import React, { useState } from "react";
import Chart from "react-apexcharts";
import './Admin_dash.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';



function Admin_Dash() {
    const [state,setState] = useState({
        options: {
          colors: ["#00695c"],
          chart: {
            id: "basic-bar",
          },
          xaxis: {
            
            categories: ["JAN", "FEB","MAR","APR","MAY","JUNE","JULY","AUG","SEPT","OCT","NOV","DEC"],
          },
        },
        series: [
          {
            name: "No.of Bundles",
            data: [30, 40, 45, 50, 49, 60, 70, 91,45,30,20,50],
          }
        ],
      });

    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <div className="container">
                        <div className="row" style={{textAlign:"center"}}>
                            <div className="col-md-12"><h2>Dashboard</h2></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={{textAlign:"center",paddingTop:"10px"}}>
                <div className="col-md-12">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="car">
                                    <div className="cartop"><h4>No of Bundles</h4></div>
                                    <div className="carbottom"><h4>123456</h4></div>
                                </div>
                            </div>
                            <div className="col-md-3">
                            <div className="car">
                                    <div className="cartop"><h4>One Side</h4></div>
                                    <div className="carbottom"><h4>123456</h4></div>
                                </div>
                            </div>
                            <div className="col-md-3">
                            <div className="car">
                                    <div className="cartop"><h4>Both Sides</h4></div>
                                    <div className="carbottom"><h4>123456</h4></div>
                                </div>
                            </div>
                            <div className="col-md-3">
                            <div className="car">
                                    <div className="cartop"><h4>Remaining Papers</h4></div>
                                    <div className="carbottom"><h4>123456</h4></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="container">
                        <div className="row" style={{marginTop:"20px"}}> 
                        <div className="col-md-3">
                                <div className="car">
                                    <div className="cartop"><h4>No of Copies</h4></div>
                                    <div className="carbottom"><h4>123456</h4></div>
                                </div>
                            </div>
                            <div className="col-md-3">
                            <div className="car">
                                    <div className="cartop"><h4>No of Papers(print)</h4></div>
                                    <div className="carbottom"><h4>123456</h4></div>
                                </div>
                            </div>
                            <div className="col-md-3">
                            <div className="car">
                                    <div className="cartop"><h4>No of Papers</h4></div>
                                    <div className="carbottom"><h4>123456</h4></div>
                                </div>
                            </div>
                            <div className="col-md-3">
                            <div className="car">
                                    <div className="cartop"><h4>Wastage</h4></div>
                                    <div className="carbottom"><h4>123456</h4></div>
                                </div>
                            </div>
                            </div>
                        
                    </div>
                </div>
            </div>
            <div className="row" style={{marginTop:"20px"}}>
                    
                    <div className="container">
                        <div className="row"> 
                        
                        <div className="col-md-10"><Chart
                            options={state.options}
                            series={state.series}
                            type="line"
                            width="900"
                        /></div>
                        <div className="col-md-2"></div>
                        </div>
                    </div>
                
            </div>
        </div>
    )
}
export default Admin_Dash;