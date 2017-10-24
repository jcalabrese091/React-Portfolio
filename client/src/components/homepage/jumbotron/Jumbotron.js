import React from "react";
import Navbar from "./navbar/Navbar";
import "./Jumbotron.css";

const Jumbotron = () => (
  <div className="jumbotron">
  <div className="row">
      <br></br><br></br>
    </div>

    <div className="row">
      <div className="col-sm-6 col-md-6 col-lg-6">        
      </div>

      <div className="col-sm-6 col-md-6 col-lg-6">
            <h1 className="text-center Name"> Joseph Calabrese </h1>
              <h2 className="text-center Job">Full Stack Web Developer</h2>
              <br></br><br></br>
                <div className="col-sm-6 col-md-6 col-lg-6 photo">     
                    <img className="mainphoto" src="./images/joe1.JPG" alt="priceImage" />              
                </div>
        </div>

    </div>    


  </div>
);

export default Jumbotron;

