import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState,useEffect} from "react";
import Table from 'react-bootstrap/Table';
import { Form } from "react-router-dom";
import { color } from "@mui/system";
import axios from 'axios';
import { useDownloadExcel } from 'react-export-table-to-excel'; 
import { useRef } from 'react';
import JsPDF from 'jspdf';
const Bundles  = () => {  
    const tableRef = useRef(null);

    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: 'Bundles info',
        sheet: 'Bundles info',
    })
const generatePDF = () => {

    const report = new JsPDF('portrait','pt','a4');
    report.html(document.querySelector('#report')).then(() => {
        report.save('report.pdf');
    })}
    const [send,setSend] = useState({
        num1:"",
        dat:"",
        rem:""
    })
    const handleChange = (e) => {
        setSend((prevState)=>({
            ...prevState,

            [e.target.name]:e.target.value
            
        }))
        console.log(send)
        // e.preventDefault();
        // // console.log(e.target.value);
        // alert("Data Submitted");
    }
    const postSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:5000/postdata',{send})
        .then((res)=>{
            // setSend(res.data)
            console.log(res.data)
            alert('success')
        })
        // alert('success')
    }
    const [houses,sethouses]=useState([])
        var ind=0;
        var bun=0;
        useEffect(()=>{
          axios.get('http://localhost:5000/getData')
          .then((res)=>sethouses(res.data))
        })
    return (
        <div className="adjust">
            <div className="row" style={{marginTop:"20px"}}>
                <div  className="container" >
                    <div className="row">
                        <div className="col-md-12" style={{textAlign:"center",color:"#004d40"}}><h2>Bundles Info</h2></div>
                    </div>
                    <div className="row" >
                        <div className="col-md-3"></div>
                        <div className="col-md-6" style={{border:"solid #00695c 2px",borderRadius:"10px",padding:"20px",background:"#b9f6ca",boxShadow:"2px 2px 2px 2px"}}>
                            <div><center><h2>Bundles Usage Entry Log</h2></center></div>
                            <div style={{backgroundColor:"#00695c",width:"100%",height:3}}><hr></hr></div>
                            <div>
                <form style={{width:"70%",marginLeft:"18%"}} onSubmit={postSubmit}>
                        <div className="input-container">
                        <label for="id1">No.of Bundles</label>
                        <input type="number" name="num1" id="id1" required onChange={handleChange} />
                        </div>
                        <div className="input-container">
                        <label for="id2">Date of Bundles Recieved </label>
                        <input type="date" name="dat" id="id2"required onChange={handleChange} />
                        </div>
                        <div className="input-container">
                        <label for="id3">Remarks</label>
                        <input type="textarea" name="rem" id="id3"required onChange={handleChange} />
                        </div>
                        <div className="button-container">
                        <input type="submit" />
                        </div>
                    </form></div>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                    
                </div>
            </div>
            <br></br>
            <br></br>
            <div className="row">
                <div  className="container">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8" style={{border:"solid #00695c 2px",borderRadius:"10px",padding:"20px",background:"#b9f6ca",boxShadow:"2px 2px 2px 2px"}}>
                            <div><center><h2>Bundles Usage Logs</h2></center></div>
                            <div style={{backgroundColor:"#00695c",width:"100%",height:3}}></div>
                            <br></br>
                            <center>
                            <span><button onClick={onDownload}>Excel</button></span>
                            <span style={{marginLeft:8}}><button onClick={generatePDF} type="button">PDF</button></span></center>
                            <br></br>
                            <div>
                            <Table responsive striped bordered hover style={{marginTop:"30px",background:"white"}} ref={tableRef} id='report'>
                                <thead>
                                    <tr>
                                    <th>S.No</th>
                                    <th>No.of Bundles</th>
                                    <th>Bundles Recieved</th>
                                    <th>Remarks</th>
                                    {/* <th>Action</th> */}
                                    </tr>
                                </thead>
                                {
              houses.map((val,key) => {
                ind++;
                bun+=val.num1;
                return(
                   <tr key={key}>
                        <td>{ind}</td>
                      <td>{val.num1}</td>
                      <td>{val.dat}</td>
                      <td>{val.rem}</td>
                      
                     
                   </tr>
                )
              })
             }
                            </Table>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                    
                   
                </div>
            </div>
            
        </div>
    )
}



export default Bundles;