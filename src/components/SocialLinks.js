import React from "react";
import Facebook from "../assets/shared/desktop/icon-facebook.svg";
import Twitter from "../assets/shared/desktop/icon-twitter.svg";
import Instagram from "../assets/shared/desktop/icon-instagram.svg";

const SocialLinks = () => {
  return (
    <div className="social-links-container">
      <a href="/">
        <img src={Facebook} alt="Facebook" />
      </a>
      <a href="/">
        <img src={Twitter} alt="Twitter" />
      </a>
      <a href="/">
        <img src={Instagram} alt="Instagram" />
      </a>
    </div>
  );
}

export default SocialLinks;