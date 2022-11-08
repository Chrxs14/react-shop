import React, { useContext } from "react";
import OrderItem from "../../components/OrderItem/OrderItem";
import "./MyOrder.scss";
import flechita from "../../assets/icons/flechita.svg";
import AppContext from "../../context/AppContext";

const MyOrder = () => {
  const { state } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) => {
      return accumulator + currentValue.price;
    };
    const sum = state.cart.reduce(reducer, 0);
    console.log(sum);
    return sum;
  };

  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={flechita} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {state.cart.map((item, index) => {
          return (
            <OrderItem
              indexValue={index}
              product={item}
              key={`orderItem-${index}`}
            />
          );
        })}
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};

export default MyOrder;
