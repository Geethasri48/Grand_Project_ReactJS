import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Log from './images/user_1.png'
import { hover } from "@testing-library/user-event/dist/hover";
import { Link } from "react-router-dom";
import Bundles from './Bundles'
import Dashboard from "./Dashboard";
import Reapair from "./Reapair";
import User from './User';
import Machine from "./Machine";
import { BarChartLineFill } from "react-bootstrap-icons";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaTh} from "react-icons/fa";
import {FaUserAlt} from "react-icons/fa";
import {FaRegChartBar} from "react-icons/fa";
import {FaCommentAlt} from "react-icons/fa";
import {FaShoppingBag} from "react-icons/fa";
import {FaThList} from "react-icons/fa";


function Nav(){
    
    return(
        <div className="Nav">
                <div className="row" style={{height:"82.4vh"}}>
                <div className="col-md-12" style={{background:"#004d40",borderRadius:"10px"}}>
                    
                    <p><img src={Log} style={{width:"90px",marginLeft:"25px",marginTop:"10px"}} /></p>
                    <ul style={{listStyleType:"none"}}>
                        <b>
                        <li style={{paddingTop:"20px",fontSize:"15px"}}><span style={{color:"silver"}}><FaTh/></span><span style={{marginLeft:"5px"}}><Link className="list" to="/">Dashboard</Link></span></li>
                        <li style={{paddingTop:"20px",fontSize:"15px"}}><span style={{color:"silver"}}><FaCommentAlt/></span><span style={{marginLeft:"5px"}}><Link className="list" to="/Bundles">Bundles Info</Link></span></li>
                        <li style={{paddingTop:"20px",fontSize:"15px"}}><span style={{color:"silver"}}><FaRegChartBar/></span><span style={{marginLeft:"5px"}}><Link className="list" to="/Machine">Machine Usage Entry</Link></span></li>
                        <li style={{paddingTop:"20px",fontSize:"15px"}}><span style={{color:"silver"}}><FaThList/></span><span style={{marginLeft:"5px"}}><Link  className="list"to="/Reapair">Repairs & Maintenance</Link></span></li>
                        <li style={{paddingTop:"20px",fontSize:"15px"}}><span style={{color:"silver"}}><FaUserAlt/></span><span style={{marginLeft:"5px"}}><Link  className="list" to="/User">User Reports</Link></span></li></b>
                    </ul>

                </div>
                
            </div>
            </div>
    )
}
export default Nav;
