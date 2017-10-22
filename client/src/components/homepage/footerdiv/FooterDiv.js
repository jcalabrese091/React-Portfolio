import React from "react";
import "./FooterDiv.css";

const FooterDiv = () => (
  <div id="homeFooter" className="sectionDiv text-center">
    <div className="container-fluid">
    	
    	<div className="container-fluid">
  
	      <div id="homeFooterLeft">
	        <img src="./images/vl.png" alt="logoImage" />
	      </div>

	      <div id="homeFooterLinks">
	        <ul>
	          <li><a href="">About</a></li>
	          <li><a href="">Contact</a></li>
	          <li><a href="">Terms of Use</a></li>
	          <li><a href="">Create a Student Account</a></li>
	        </ul>  
	      </div>

  <div className="sectionDiv">
    <div className="container-fluid">
    	<img src="./images/vodsym1.png" alt="logoImage" />
    	<img className="size4" src="./images/vodsocial.jpg" alt="socialImage" />
    	<p className="text-center">Contact | About</p>
    </div>

	      <div id="homeCopyright">
			    <p>© 2017 vodLEGENDS</p>
	      </div>

	    </div>
    </div>
    </div>
  </div>
);

export default FooterDiv;
