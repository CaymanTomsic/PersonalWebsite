import React from 'react';
import GitHubLogo from "../images/github-icon.png";
import LinkedInLogo from "../images/linkedin-logo.png";
import InstagramLogo from "../images/instagram-logo.png";

const Footer = (props) => {

    return (
        <footer className="footer-container fixed-bottom" style={{ backgroundColor: "rgba(0,0,0, 0.8)", borderTop: "rgba(169,169,169,0.1) solid 0.5px" , width:"100%"}}>
            <div className="container">
                <div className="row py-2">
                    <div className="col">
                        <p style={{color:"whitesmoke", margin:"0"}}>Website by Cayman Tomsic</p>
                        <a href="https://www.linkedin.com/in/cayman-tomsic-7586431b6/">
                            <img src={LinkedInLogo} alt="LinkedIn logo" style={{height: "1.2em"}}/>
                            <span style={{color:"whitesmoke"}}> LinkedIn |</span>
                        </a>
                        
                        <a className="mx-2" href="https://github.com/CaymanTomsic">
                            <img src={GitHubLogo} alt="GitHub logo" style={{height: "1.2em"}}/>
                            <span style={{color:"whitesmoke"}}> Github |</span>
                        </a>
                        
                        <a href="https://www.instagram.com/caymant/?hl=en">
                            <img src={InstagramLogo} alt="Instagram logo" style={{height: "1.2em"}}/>
                            <span style={{color:"whitesmoke"}}> Instagram   </span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;