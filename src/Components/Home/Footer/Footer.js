import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer ">
      <div>
        <h4>The Rainbow Bouquet</h4>
        <small>GPO-1000, Dhaka, Bangladesh</small>
      </div>

      <div>
        <h5>Company</h5>
        <p>About</p>
        <p>Projects</p>
        <p>Terms & Condition</p>
      </div>

      <div>
        <h5>Links</h5>
        <p>Contact</p>
        <p>Services</p>
        <p>Our blog</p>
      </div>

      <div>
        <h5>About us</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          ab expedita maxime, optio hic nemo, autem deserunt.
        </p>
        <div>
          <FontAwesomeIcon className="footer-icon" icon={faFacebook} />
          <FontAwesomeIcon className="footer-icon" icon={faInstagram} />
          <FontAwesomeIcon className="footer-icon" icon={faTwitter} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
