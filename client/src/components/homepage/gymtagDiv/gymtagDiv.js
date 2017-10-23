import React from "react";
import "./gymtagDiv.css";

const gymtagDiv = () => (

  <div id="gymtagDiv" className="sectionDiv text-center">

  <div className="sectionDiv text-center size5">

    <div className="row">
      <br></br><br></br>
    </div>

    <div className="row">
      <div className="col-sm-6 col-md-6 col-lg-6">        
        <img src="./images/five.png" alt="priceImage" />
      </div>

      <div className="col-sm-6 col-md-6 col-lg-6">
        <h3>Gym-Tag</h3>
            <h4></h4>
              <p>A connection website that brings together gym members who are looking for a workout partner that has some degree of knowledge of proper lifting techniques, but are not considered a trainer. This was achieved through the use of MySQL to link together tables of data to provide coach, student, and scheduling tables. The design aspect utilized Bootstrap to provide the ascetics and node.js to build the server and corresponding routes.</p>
      </div>

    </div>    
  </div>
  </div>
);

export default gymtagDiv;
