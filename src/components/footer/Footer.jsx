import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="social">
        <FaFacebook
          className="icon"
          onClick={() => window.open("https://www.facebook.com", "_blank")}
        />
        <FaInstagram
          className="icon"
          onClick={() => window.open("https://www.instagram.com", "_blank")}
        />
        <FaTwitter
          className="icon"
          onClick={() => window.open("https://www.twitter.com", "_blank")}
        />
        <FaPinterest
          className="icon"
          onClick={() => window.open("https://www.pinterest.com", "_blank")}
        />
      </div>
      <div className="container">
        <div className="col">
          <h3>About</h3>
          <p>Company</p>
          <p>Details</p>
          <p>Planning</p>
          <p>About Us</p>
        </div>
        <div className="col">
          <h3>Company</h3>
          <p>Company</p>
          <p>Details</p>
          <p>Planning</p>
          <p>About Us</p>
        </div>
        <div className="col">
          <h3>Legal</h3>
          <p>Company</p>
          <p>Details</p>
          <p>Planning</p>
          <p>About Us</p>
        </div>
        <div className="col">
          <h3>Information</h3>
          <p>Company</p>
          <p>Details</p>
          <p>Planning</p>
          <p>About Us</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
