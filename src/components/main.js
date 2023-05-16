import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

function Main(){
    return(
        <div>
            <div className="row" id="header">
                <div className="col-md-4"><img  alt="Logo"  id="Logo"></img></div>
                <div className="col-md-4"></div>
                <div className="col-md-4"><span></span><span>ADMIN</span></div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className="row">
                        <div className="col-md-12">Dashboard</div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">Logins info</div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">Machine info</div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">Bundles info</div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">Machine repair</div>
                    </div>
                </div>
                
            </div>

        </div>

    )
}
export default Main;