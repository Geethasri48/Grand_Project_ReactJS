//import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Chart from "react-apexcharts";
import React, {useState,useEffect} from "react";
import CountUp from 'react-countup';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
const User  = () => {
    const [houses,sethouses]=useState([])
    var ind=0;
    var z=0;
    var n=0;
        useEffect(()=>{
          axios.get('http://localhost:5000/getData')
          .then((res)=>sethouses(res.data))
        })
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
            data: [30000, 40, 45, 50, 49, 60, 70, 91,45,30,20,50],
          }
        ],
      }); 
      houses.map((val,key) => {
        ind++;
        z+=val.num1
        // console.log(z);
        
      }) 
      const [house,sethouse]=useState([])
        var sem=0;
        var bo=0;
        var s=0;
        useEffect(()=>{
          axios.get('http://localhost:5000/getData2')
          .then((res)=>sethouse(res.data))
        })
        {
            house.map((val,key) => {
                sem+=val.dro;
                bo+=val.cop
                s=z*500-sem-bo;
            })
           }
    return (
        <div className="container">
            <div className="row">
                
                    <div className="container">
                        <div className="row" style={{textAlign:"center",marginTop:"20px"}}>
                            <div className="col-md-12"><div><center><h2 style={{color:"#004d40"}}>Dashboard</h2></center></div></div>
                        </div>
                    </div>
                
            </div>
            <div className="row" style={{textAlign:"center",paddingTop:"10px"}}>
                
                    <div className="container">
                        <div className="row"> 
                            <div className="col-md-3" style={{borderRadius:"10px"}}>
                                <div className="car">
                                    <div className="cartop"><h4>No of bundles</h4></div>
                                    <div className="carbottom"><h3><CountUp start={0} end={z} /></h3></div>
                                </div>
                            </div>
                            <div className="col-md-3">
                            <div className="car">
                                    <div className="cartop"><h4>One Side</h4></div>
                                    <div className="carbottom"><h3><CountUp start={0} end={sem} /></h3></div>
                                </div>
                            </div>
                            <div className="col-md-3">
                            <div className="car">
                                    <div className="cartop"><h4>Both Sides</h4></div>
                                    <div className="carbottom"><h3><CountUp start={0} end={bo} /></h3></div>
                                </div>
                            </div>
                            <div className="col-md-3">
                            <div className="car">
                                    <div className="cartop"><h4>Remaining papers</h4></div>
                                    <div className="carbottom"><h3><CountUp start={0} end={s} /></h3></div>
                                </div>
                            </div>
                        </div>
                    </div>
                
            </div>
            <div className="row" style={{marginTop:"20px"}}>
                
                    <div className="container">
                        <div className="row"> 
                        <div className="col-md-1"></div>
                        <div className="col-md-10"><Chart
                            options={state.options}
                            series={state.series}
                            type="line"
                            width="100%"
                        /></div>
                        <div className="col-md-1"></div>
                        </div>
                    </div>
                
            </div>
        </div>
             
    )
}



export default User;