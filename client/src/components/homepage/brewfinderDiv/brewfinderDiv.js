import React from "react";
import "./brewfinderDiv.css";

const brewfinderDiv = () => (

  <div id="brewfinderDiv" className="sectionDiv text-center">

  <div className="sectionDiv text-center">

    <div className="row">
      <br></br><br></br>
    </div>

    <div className="row">
      <div className="col-sm-6 col-md-6 col-lg-6">
      <div className="paragraph">
        <h3>BrewFinder</h3>
        <p className="brew_description">A website that provides users with information about local breweries. Once a brewery was selected on the map (imported from the Google Maps API), an Uber service was provided for safe transportation of the user from their location. This was achieved obtaining an Uber button from the Uber API to provide up to date ETA for the user and direct routing to payment services.  Server was built through use of node.js.
        </p>     
          <a href="https://protected-basin-19070.herokuapp.com/">
                <button className="btn btn-primary black">Home Page</button>
              </a>   
      </div>
      </div>
      <div className="col-sm-6 col-md-6 col-lg-6">
        <img className="brew" src="./images/BrewFinder.png" alt="priceImage" />
      </div>

    </div>    
  </div>
  </div>
);

export default brewfinderDiv;
