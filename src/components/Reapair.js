import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";

import axios from "axios";
import { useDownloadExcel } from "react-export-table-to-excel";
import { useRef } from "react";
import JsPDF from "jspdf";
const Reapair = () => {
  const tableRef = useRef(null);

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "Bundles info",
    sheet: "Bundles info",
  });

  const generatePDF = () => {
    const report = new JsPDF("portrait", "pt", "a4");
    report.html(document.querySelector("#report")).then(() => {
      report.save("report.pdf");
    });
  };
  const [send, setSend] = useState({
    num1: "",
    dat: "",
    com: "",
    rem: "",
  });
  const handleChange = (e) => {
    setSend((prevState) => ({
      ...prevState,

      [e.target.name]: e.target.value,
    }));
    console.log(send);
  };
  const postSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/postdata3", { send }).then((res) => {
      // setSend(res.data)
      console.log(res.data);
      alert("success");
    });
    // alert('success')
  };
  const [houses, sethouses] = useState([]);
  var inc = 0;
  useEffect(() => {
    axios
      .get("http://localhost:5000/getData0")
      .then((res) => sethouses(res.data));
  });

  return (
    <div>
      <div className="row">
        <div className="container">
          <div className="row" style={{ marginTop: "10px" }}>
            <div
              className="col-md-12"
              style={{ textAlign: "center", color: "#004d40" }}
            >
              <h2>Repairs and Maintenance</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3"></div>
            <div
              className="col-md-6"
              style={{
                border: "solid #00695c 2px",
                borderRadius: "10px",
                padding: "20px",
                background: "#b9f6ca",
                boxShadow: "2px 2px 2px 2px",
                marginTop: "25px",
              }}
            >
              <div>
                <center>
                  <h2>Complaint Dropdown</h2>
                </center>
              </div>
              <div
                style={{ backgroundColor: "#00695c", width: "100%", height: 3 }}
              >
                <hr></hr>
              </div>
              <div>
                <form onSubmit={postSubmit}>
                  <div className="input-container">
                    <label for="id1">Machine Id</label>
                    <input
                      type="number"
                      name="num1"
                      onChange={handleChange}
                      id="id1"
                      required
                    />
                  </div>
                  <div className="input-container">
                    <label for="id2">Date</label>
                    <input
                      type="date"
                      name="dat"
                      onChange={handleChange}
                      id="id2"
                      required
                    />
                  </div>
                  <div className="input-container">
                    <label for="id3">Complaint</label>
                    <input
                      type="textarea"
                      name="com"
                      onChange={handleChange}
                      id="id3"
                      required
                    />
                  </div>
                  <div className="input-container">
                    <label for="id3">Remarks</label>
                    <input
                      type="textarea"
                      name="rem"
                      onChange={handleChange}
                      id="id4"
                      required
                    />
                  </div>
                  <div className="button-container">
                    <input type="submit" />
                    {/* <button>Submit</button> */}
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="row">
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div
              className="col-md-8"
              style={{
                border: "solid #00695c 2px",
                padding: "20px",
                borderRadius: "10px",
                background: "#b9f6ca",
                boxShadow: "2px 2px 2px 2px",
              }}
            >
              <div>
                <center>
                  <h2>Repair & Maintenance</h2>
                </center>
              </div>
              <div
                style={{ backgroundColor: "#00695c", width: "100%", height: 3 }}
              ></div>
              <br></br>
              <center>
                <span>
                  <button onClick={onDownload}>Excel</button>
                </span>
                <span style={{ marginLeft: 8 }}>
                  <button onClick={generatePDF} type="button">
                    PDF
                  </button>
                </span>
              </center>
              <br></br>
              <div>
                <Table
                  responsive
                  striped
                  bordered
                  hover
                  style={{
                    marginTop: "30px",
                    background: "white",
                    borderRadius: "10px",
                  }}
                  ref={tableRef}
                  id="report"
                >
                  <thead>
                    <tr>
                      <th>SNo</th>
                      <th>Machine Id</th>
                      <th>Date</th>
                      <th>Complaint</th>
                      <th>Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {houses.map((val, key) => {
                      inc++;
                      // bun+=val.num1;
                      return (
                        <tr key={key}>
                          <td>{inc}</td>
                          <td>{val.num1}</td>
                          <td>{val.dat}</td>
                          <td>{val.com}</td>
                          <td>{val.rem}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reapair;