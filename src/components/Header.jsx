import React, { useContext, useState } from "react";
import "../styles/Header.scss";
import icon_menu from "../assets/icons/icon_menu.svg";
import icon_shopping_cart from "../assets/icons/icon_shopping_cart.svg";
import logo_yarad_sale from "../assets/logos/logo_yard_sale.svg";
import Menu from "./Menu";
import AppContext from "../context/AppContext";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const { state } = useContext(AppContext);
  console.log("estado");
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav>
      <img src={icon_menu} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={logo_yarad_sale} alt="logo" className="logo-header" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            platzi@example.com
          </li>
          <li className="navbar-shopping-cart">
            <img src={icon_shopping_cart} alt="shopping cart" />
            <div>
              {state.cart.length > 0 ? `<div>${state.cart.length}</div>` : null}
            </div>
          </li>
        </ul>
      </div>
      {toggle ? <Menu /> : ""}
    </nav>
  );
};

export default Header;
