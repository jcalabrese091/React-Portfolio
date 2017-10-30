import React from "react";
import "./gymtagDiv.css";

const gymtagDiv = () => (

  <div id="gymtagDiv" className="sectionDiv text-center">

  <div className="sectionDiv text-center">

    <div className="row">
      <br></br><br></br>
    </div>

    <div className="row">
      <div className="col-sm-6 col-md-6 col-lg-6">
        <a href="https://gympursuit.herokuapp.com/">    
          <img className="gym" src="./images/GymBuddy.png" alt="GymBuddy" />
        </a>
      </div>

      <div className="col-sm-6 col-md-6 col-lg-6">
      <div className="paragraph">
        <a href="https://gympursuit.herokuapp.com/">    
          <img className="gymtitle" src="./images/gym.png" alt="GymBuddy" />
        </a>
            <br></br><br></br>
              <p className="gym_description">Connects gym members who are looking for a workout partner that has some knowledge of proper lifting techniques, but are not considered a certified trainer. This was achieved through the use of MySQL to link together tables of data to provide scheduling and account signup. The design aspect utilized Bootstrap to provide the ascetics and node.js to build the server and corresponding routes.</p>  
      </div>
      </div>
    </div>    
  </div>
  </div>
);

export default gymtagDiv;
