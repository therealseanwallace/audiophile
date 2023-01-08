import React from "react";

const Menu = (props) => {
  return (
    <ul className={props.class}>
      <li>HOME</li>
      <li>HEADPHONES</li>
      <li>SPEAKERS</li>
      <li>EARPHONES</li>
    </ul>
  );
};

export default Menu;
