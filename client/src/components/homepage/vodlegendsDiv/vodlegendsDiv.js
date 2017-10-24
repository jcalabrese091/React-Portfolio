import React from "react";
import "./vodlegendsDiv.css";

const vodlegendsDiv = () => (

  <div id="vodlegendsDiv" className="sectionDiv text-center">

  <div className="sectionDiv text-center">

    <div className="row">
      <br></br><br></br>
    </div>

    <div className="row">
      <div className="col-sm-6 col-md-6 col-lg-6"> 
      <div className="paragraph">       
        <h3>VOD-Legends</h3>
          <h4></h4>
            <p className="description">An E-Sports connection hub that was designed for the PC game League of Legends and built using React. Where professional players can provide live feedback through video playback interface for players looking to increase their ELO ranking. Using MongoDB to store all relative information for user profiles, requests, and comments.</p>
          <a href="https://vod-legends.herokuapp.com/">
          <button className="btn btn-warning">Home Page</button>
          </a>
      </div>
      </div>
      <div className="col-sm-6 col-md-6 col-lg-6">
        <img className="vodlegends" src="./images/vodLegends.png" alt="priceImage" />
      </div>

    </div>    
  </div>
  </div>
);

export default vodlegendsDiv;
