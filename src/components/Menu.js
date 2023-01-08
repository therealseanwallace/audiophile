import React from "react";
import Cart from "../assets/shared/desktop/icon-cart.svg";
import Logo from "../assets/shared/desktop/logo.svg";

const Menu = (props) => {
  return (
    <section class="top-nav">
      <label class="menu-button-container" for="menu-toggle">
        <div class="menu-button"></div>
      </label>
      <img src={Logo} />
      <input id="menu-toggle" type="checkbox" />

      <ul class="menu">
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
