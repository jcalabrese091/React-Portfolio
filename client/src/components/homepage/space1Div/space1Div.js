import React from "react";
import "./space1Div.css";

const space1Div = () => (

  <div id="space1Div" className="sectionDiv text-center">

  <div className="sectionDiv text-center">

    <div className="row">
      <br></br><br></br>
    </div>

    <div className="row">
      <div className="col-sm-6 col-md-6 col-lg-6">        
       <img className="vodlegends" src="./images/vodLegends.png" alt="priceImage" />
      </div>

      <div className="col-sm-6 col-md-6 col-lg-6">
          <img className="about" src="./images/about.png" alt="About Me" />
           <p className="text-center space1description textborder">
                  Passionate Developer and recent graduate of University California Irvine cont ed. Full Stack Web Developer program that focused on a variety of languages with emphasis in ES5 and ES6 syntax JavaScript.
                </p>
      </div>

    </div>    
  </div>
  </div>
);

export default space1Div;
