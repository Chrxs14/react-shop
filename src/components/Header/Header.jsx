import React, { useContext, useState } from "react";
import "./Header.scss";
import icon_menu from "../../assets/icons/icon_menu.svg";
import icon_shopping_cart from "../../assets/icons/icon_shopping_cart.svg";
import logo_yarad_sale from "../../assets/logos/logo_yard_sale.svg";
import Menu from "../Menu/Menu";
import MyOrder from "../../containers/MyOrder/MyOrder";
import AppContext from "../../context/AppContext";
import Categories from "../Categories/Categories";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const { state } = useContext(AppContext);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <nav>
      <img src={icon_menu} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={logo_yarad_sale} alt="logo" className="logo-header" />
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            platzi@example.com
          </li>
          <li
            className="navbar-shopping-cart"
            onClick={() => setToggleOrders(!toggleOrders)}
          >
            <img src={icon_shopping_cart} alt="shopping cart" />
            <div>{state.cart.length || 0}</div>
          </li>
        </ul>
      </div>
      {toggle ? <Menu /> : ""}
      {toggleOrders && <MyOrder />}
    </nav>
  );
};

export default Header;
