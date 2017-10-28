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
          <a href="https://vod-legends.herokuapp.com/">
            <img className="vodlegendstitle" src="./images/vodlg.png" alt="priceImage" />
          </a>
            <p className="description">An E-Sports connection hub that was designed for the PC game League of Legends and built using React. Where professional players can provide live feedback through video playback interface for players looking to increase their ELO ranking. Using MongoDB to store all relative information for user profiles, requests, and comments.</p>
      </div>
      </div>
      <div className="col-sm-6 col-md-6 col-lg-6">
        <a href="https://vod-legends.herokuapp.com/">
          <img className="vodlegendspic" src="./images/vodLegends.png" alt="priceImage" />
        </a>      
      </div>

    </div>    
  </div>
  </div>
);

export default vodlegendsDiv;
