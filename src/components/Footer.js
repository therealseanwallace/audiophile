import React from "react";
import MenuFooter from "./MenuFooter";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer>
      <div className="footer-line-1">
        <img />
        <MenuFooter class="footer-menu" />
      </div>
      <div className="footer-line-2">
        <p>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <SocialLinks />
      </div>
      <div className="footer-line-3">
      <p>Copyright 2021. All Rights Reserved</p>
      <p>Designed by Front End Mentor</p>
      <p>Built by Sean Wallace</p>
      </div>
      
    </footer>
  );
};

export default Footer;
