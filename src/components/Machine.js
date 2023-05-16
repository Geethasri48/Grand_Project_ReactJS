import React, { useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { Form } from "react-router-dom";
import { color } from "@mui/system";
import axios from 'axios';
const Machine  = () => {  
    const [send,setSend] = useState({
        frm:"",
        id1:"",
        clg:"",
        dro:"",
        cop:"",
        app:"",
        rem:"",
        sub:""
    })  
    const handleChange = (e) => {
        setSend((prevState)=>({
            ...prevState,

            [e.target.name]:e.target.value
            
        }))
        console.log(send)
    }
    const postSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:5000/postdata1',{send})
        .then((res)=>{
            setSend(res.data)
            console.log(res.data)
            alert('success')
        })
    }
    // const [houses,sethouses]=useState([])
    //     var bu=0;
    //     useEffect(()=>{
    //       axios.get('http://localhost:5000/getData1')
    //       .then((res)=>sethouses(res.data))
    //     })
    //     {
    //         houses.map((val,key) => {
    //           bu+=val.cop;
    //         })
    //        }
    return (
        <div>
            <div className="row" style={{marginTop:"20px"}}>
                <div  className="container">
                <div className="row">
                        <div className="col-md-12" style={{textAlign:"center",color:"#004d40"}}><h2>Machine Usage Entry</h2></div>
                    </div>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6" style={{border:"solid #00695c 2px",boxShadow:"2px 2px 2px 2px",borderRadius:"10px",borderRadius:"10px",padding:"20px",backgroundColor:"#b9f6ca"}}>
                            <div><center><h2>Machine Entry Log</h2></center></div>
                            <div style={{backgroundColor:"#00897b",width:"100%",height:3}}><hr></hr></div>
                            <div>
                            <form style={{width:"70%",marginLeft:"18%"}} onSubmit={postSubmit}>
                        <div className="input-container">
                        <label for="id1">Date</label>
                        <input type="date" name="frm" id="id4" onChange={handleChange} required/>
                        </div>
                        <div className="input-container">
                        <label for="id2">Machine Id's</label>
                        {/* <input type="" name="to" id="id5"required /> */}
                        <select onChange={handleChange} name="id1">
                            <option></option>
                            <option>AEC/A.CELL/PCMKO1</option>
                            <option>AEC/A.CELL/PCMK05</option>
                        </select>
                        </div>
                        <div className="input-container">
                        <label for="id3">Purpose of Work</label>
                        <input type="textarea" name="clg" id="id6" onChange={handleChange} required />
                        </div>
                        
                        <div className="input-container">
                        <label for="id3">No.of One Side Copies</label>
                        <input type="number" name="dro" id="id6"  onChange={handleChange} required/>
                        </div>
                        <div className="input-container">
                        <label for="id3">No.of Both Side Copies</label>
                        <input type="number" name="cop" id="id6"  onChange={handleChange} required/>
                        </div>
                        <div className="input-container">
                        <label for="id3">Approved Authority</label>
                        <input type="textarea" name="app" id="id6" onChange={handleChange} required />
                        </div>
                        <div className="input-container">
                        <label for="id3">Remarks</label>
                        <input type="textarea" name="rem" id="id6" onChange={handleChange} required />
                        </div>
                        <div className="button-container">
                        <input type="submit" value={"Insert"}  />
                        </div>
                    </form>
                            </div>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                    
                </div>
            </div>
            
                
            
        </div>
    )
}



export default Machine;