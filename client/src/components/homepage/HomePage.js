import React from "react";
import Jumbotron from "./jumbotron/Jumbotron";
import ThirdsDiv from "./thirdsdiv/ThirdsDiv";
import FeaturesDiv from "./featuresdiv/FeaturesDiv";
import VodlegendsDiv from "./vodlegendsDiv/vodlegendsDiv";
import GymtagDiv from "./gymtagDiv/gymtagDiv";
import BrewfinderDiv from "./brewfinderDiv/brewfinderDiv"
import FooterDiv from "./footerdiv/FooterDiv";


const HomePage = () => (
  <div className="container-fluid">
    <Jumbotron />
    <VodlegendsDiv />
    <GymtagDiv />
    <BrewfinderDiv />
    <FooterDiv />
  </div>
);

export default HomePage;