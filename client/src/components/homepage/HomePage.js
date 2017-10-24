import React from "react";
import Jumbotron from "./jumbotron/Jumbotron";
import FeaturesDiv from "./featuresdiv/FeaturesDiv";
import VodlegendsDiv from "./vodlegendsDiv/vodlegendsDiv";
import GymtagDiv from "./gymtagDiv/gymtagDiv";
import BrewfinderDiv from "./brewfinderDiv/brewfinderDiv";
import Space1Div from "./space1Div/space1Div";
import Space2Div from "./space2Div/space2Div"
import Space3Div from "./space3Div/space3Div";
import Space4Div from "./space4Div/space4Div";
import FooterDiv from "./footerdiv/FooterDiv";


const HomePage = () => (
  <div className="container-fluid">
    <Jumbotron />
    <Space1Div />
    <VodlegendsDiv />
    <Space2Div />
    <GymtagDiv />
    <Space3Div />
    <BrewfinderDiv />
    <Space4Div />
    <FooterDiv />
  </div>
);

export default HomePage;