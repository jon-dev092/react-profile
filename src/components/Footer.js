import React from "react";
import GithubLogo from '../img/github-logo.png';
import LinkedInLogo from '../img/Linkedin.png';
import TwitterLogo from '../img/twitter-logo.png';

// Footer that displays github, twitter and linkedin links on every route
const Footer = () => {
    return ( 
        <div className="footer">
            <a className="logo" href="https://github.com/jon-dev092"><img className="logo" src={GithubLogo} alt="" /></a>
            <a className="logo" href="https://www.linkedin.com/"><img className="logo" src={LinkedInLogo} alt="" /></a>
            <a className="logo" href="https://twitter.com/"><img className="logo" src={TwitterLogo} alt="" /></a>
        </div>
     );
}
 
export default Footer;
