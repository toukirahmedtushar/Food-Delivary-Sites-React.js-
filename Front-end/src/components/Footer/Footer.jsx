import React from "react";
import "./Footer.css";
import { assets } from "../../assets/frontend_assets/assets";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-left">
         <a href="#"> <img src={assets.logo} alt="logo" className="footer-logo" /></a>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est dolore
            quis pariatur inventore. Inventore possimus blanditiis, officia
            rerum cum provident laborum architecto consectetur ipsa nesciunt,
            dolorem quas sapiente molestiae modi?
          </p>
            <div className="footer-socials">
                <img src={assets.facebook_icon} alt="facebook" className="footer-social-icon" />
                <img src={assets.twitter_icon} alt="twitter" className="footer-social-icon" />
                <img src={assets.linkedin_icon} alt="linkedin" className="footer-social-icon" />
            </div>
        </div>
        <div className="footer-center">
            <h3>Useful Links</h3>
            <ul className="footer-links">
                <li className="footer-link-item">Home</li>
                <li className="footer-link-item">Cart</li>
                <li className="footer-link-item">About Us</li>
                <li className="footer-link-item">Terms</li>
                <li className="footer-link-item">Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-right">
            <h3>Contact Us</h3>
            <div className="footer-contact-item">
                <img src={assets.location_icon} alt="location" className="footer-contact-icon" />
                <span>123 Main Street, City, Country</span>
            </div>
            <div className="footer-contact-item">
                <img src={assets.phone_icon} alt="phone" className="footer-contact-icon" />
                <span>+88 016 7967 2058</span>
            </div>
            <div className="footer-contact-item">
                <img src={assets.email_icon} alt="email" className="footer-contact-icon" />
                <span> toukirahmed876@gmail.com</span>
                
            </div>
        </div>
        
      </div>
      <hr />
      <div className="copy_right">
            <p>Copyright © 2025 MyWebsite. All rights reserved. </p>
        </div>
      .
    </div>
  );
};

export default Footer;
