import React from "react";
import Cart from "../assets/shared/desktop/icon-cart.svg";
import Logo from "../assets/shared/desktop/logo.svg";

const Menu = (props) => {
  return (
    <section className="top-nav">
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <img src={Logo} />
      <input id="menu-toggle" type="checkbox" />

      <ul className="menu">
        <li>Home</li>
        <li>Headphones</li>
        <li>Speakers</li>
        <li>Earphones</li>
      </ul>

      <img src={Cart} />
    </section>
  );
};

export default Menu;
