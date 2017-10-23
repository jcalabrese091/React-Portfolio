import React from "react";
import "./brewfinderDiv.css";

const brewfinderDiv = () => (

  <div id="brewfinderDiv" className="sectionDiv text-center">

  <div className="sectionDiv text-center size5">

    <div className="row">
      <br></br><br></br>
    </div>

    <div className="row">
      <div className="col-sm-6 col-md-6 col-lg-6">
        <h3>BrewFinder</h3>
        <p>A website that provides users with information about local breweries. Once a brewery was selected on the map imported from the Google Maps API, an Uber service was provided for safe transportation of the user from their location. This was achieved by use of an Uber button uses the Uber API to provide up to date ETA for the user and direct routing to payment services.  Server was built through use of node.js.
</p>        
      </div>

      <div className="col-sm-6 col-md-6 col-lg-6">
        <img src="./images/one.png" alt="priceImage" />
      </div>

    </div>    
  </div>
  </div>
);

export default brewfinderDiv;
