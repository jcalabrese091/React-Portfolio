import React from "react";
import "./space3Div.css";

const space3Div = () => (

  <div id="space3Div" className="sectionDiv text-center">

  <div className="sectionDiv text-center">

    <div className="row">
      <br></br><br></br>
    </div>

    <div className="row">
      <div className="col-sm-6 col-md-6 col-lg-6">        
       <img className="education" src="./images/uci.png" />
       <img className="group" src="./images/group.png" />
      </div>

      <div className="col-sm-6 col-md-6 col-lg-6">
            <img className="about" src="./images/school.png" alt="About Me" />
             <p className="text-center space1description textborder">
                Knowledge is everything. I spend most of my time learning new tools, technologies, and frameworks to better futher my career goals in the tech industry
              </p>  
      </div>

    </div>    
  </div>
  </div>
);

export default space3Div;
