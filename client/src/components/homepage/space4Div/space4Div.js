import React from "react";
import "./space4Div.css";

const space4Div = () => (

  <div id="space4Div" className="sectionDiv text-center">

  <div className="sectionDiv text-center">

    <div className="row">
      <br></br><br></br>
    </div>

    <div className="row">
      <div className="col-sm-6 col-md-6 col-lg-6">        
       <img className="contact" src="./images/connect.png" alt="connect with me" />
      </div>

      <div className="col-sm-6 col-md-6 col-lg-6">
        <div className="connect">
             <ul className="nav navbar-nav navbar-center connect">
                  <li>
                      <a href="https://github.com/jcalabrese091"><img src="./images/github-128.png" className="social" alt="GitHub" /></a>
                  </li>
                  <li>
                      <a href="https://www.linkedin.com/in/joseph-calabrese-091/"><img src="./images/linkedin-128.png" className="social" alt="LinkedIn" /></a>
                  </li>
              </ul>
            </div>
      </div>

    </div>    
  </div>
  </div>
);

export default space4Div;
