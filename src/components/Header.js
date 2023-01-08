import React from "react";
import Logo from "../assets/shared/desktop/logo.svg";
import Cart from "../assets/shared/desktop/icon-cart.svg";
import Menu from "./Menu";

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="logo" />
      <Menu class="header-menu" />
      <img src={Cart} alt="cart" />
    </header>
  );
};

export default Header;
