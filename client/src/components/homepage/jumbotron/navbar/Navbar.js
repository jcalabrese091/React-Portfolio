import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
    state = {
        signupModalVisible: false,
        loginModalVisible: false,
    };


    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }


    render() {
        return (
            <nav className="navbar navbar-default navigation">
                <div id="headerContainer" className="container">


                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <ul className="nav navbar-nav navbar-right">
                            <img src="signupButton" id="signupModalButton" onClick={this.signupClick} />
                            <li>
                                <a href="https://github.com/jcalabrese091"><img src="./images/github-128.png" class="social" alt="GitHub" /></a>
                            </li>

                            <li>
                                <a href="https://www.linkedin.com/in/joseph-calabrese-091/"><img src="./images/linkedin-128.png" class="social" alt="LinkedIn" /></a>

                            </li>
                        </ul>
                    </div>           
                </div>

            </nav>
        )
    }

}

export default Navbar;
