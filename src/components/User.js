// import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import React, { useState, useEffect, useRef } from "react";
import { Form } from "react-router-dom";
import axios from "axios";
import { color } from "@mui/system";
import { useDownloadExcel } from "react-export-table-to-excel";
const User = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    alert("Data Submitted");
  };
  const [houses, sethouse] = useState([]);

  var z = 0;
  var ind = 0;
  useEffect(() => {
    axios
      .get("http://localhost:5000/getData2")
      .then((res) => sethouse(res.data));
  });
  const tableRef = useRef(null);

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "Users table",
    sheet: "Users",
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
              <h2>User Reports</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4"></div>
            <div
              className="col-md-4"
              style={{
                border: "solid #00695c 2px",
                borderRadius: "10px",
                padding: "20px",
                background: "#b9f6ca",
                boxShadow: "2px 2px 2px 2px",
              }}
            >
              <div>
                <center>
                  <h2>Report</h2>
                </center>
              </div>
              <div
                style={{ backgroundColor: "#00695c", width: "100%", height: 3 }}
              >
                <hr></hr>
              </div>
              <div>
                <form onSubmit={handleSubmit}>
                  <div className="input-container">
                    <label for="id1">From: </label>
                    <input type="email" name="frm" id="id4" required />
                  </div>
                  <div className="input-container">
                    <label for="id2">To: </label>
                    <input type="email" name="to" id="id5" required />
                  </div>

                  <div className="button-container">
                    <input type="submit" />
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="row">
        <div className="container">
          <div className="row">
            <div className="col-md-1"></div>
            <div
              className="col-md-10"
              style={{
                border: "solid #00695c 2px",
                borderRadius: "10px",
                padding: "20px",
                background: "#b9f6ca",
                boxShadow: "2px 2px 2px 2px",
              }}
            >
              <div>
                <center>
                  <h2>Machine Reports</h2>
                </center>
              </div>
              <div
                style={{ backgroundColor: "#00695c", width: "100%", height: 3 }}
              >
                .{" "}
              </div>
              <br></br>
              {/* <center> */}
              <span>
                <button onClick={onDownload}>Excel </button>
              </span>

              {/* </center> */}
              {/* <center> */}
              <span style={{ marginLeft: "10px" }}>
                <label for="id2">SearchTo: </label>
                <input type="textarea" name="spn" id="id2" required />
              </span>
              {/* </center> */}

              <Table
                responsive
                striped
                bordered
                hover
                style={{ marginTop: "30px", background: "white" }}
                ref={tableRef}
              >
                <thead>
                  <tr>
                    <th>SNo</th>
                    <th>Date</th>

                    <th>Oneside prints</th>
                    <th>Bothside prints</th>

                    <th>No.of prints</th>
                  </tr>
                </thead>
                {houses.map((val, key) => {
                  ind++;
                  z = val.dro + val.cop;

                  return (
                    <tr key={key}>
                      <td>{ind}</td>
                      <td>{val.frm}</td>
                      <td>{val.dro}</td>
                      <td>{val.cop}</td>
                      <td>{z}</td>
                    </tr>
                  );
                })}
              </Table>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;