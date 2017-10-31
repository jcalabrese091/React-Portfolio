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
            <h1>Skills</h1>
            <img className="about" src="./images/school.png" alt="About Me" />
             <p className="text-center space1description textborder">
                Node.js, Express, JavaScript, jQuery, React.js, React Native, GIT, Github, MongoDB, Mongoose, MySQL, SQL, HTML, CSS, Bootstrap, Media Queries, APIs, JSON, REST, AJAX, command line
              </p>  
      </div>

    </div>    
  </div>
  </div>
);

export default space3Div;
