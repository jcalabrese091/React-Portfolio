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
                <p className="text-center Description textborder">
                  Passionate Developer and recent graduate of University California Irvine cont ed. Full Stack Web Developer program that focused on a variety of languages with emphasis in ES5 and ES6 syntax JavaScript. Multiple years of management experience that can be applied to any field with aspirations to become a Project Manager. Highly motivated goal oriented professional; a decision-maker skilled in implementing new ideas. 
                </p>
                  <img alt="getstartednow" className="getstarted center-block" src="./images/started.png" onClick={this.signupClick} />
      </div>

    </div>    


  </div>
);

export default Jumbotron;

