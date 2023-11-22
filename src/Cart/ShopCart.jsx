import React from "react";
import "./ShopCart.css";
import { Link } from "react-router-dom";
import Basket from "./Basket";

function ShopCart (props) {

  const { cartItems, onAdd, onRemove } = props;

  return (
    <div className="shopCart">
      <div className="basket">
      <Basket cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove} />
      </div>
      <div className="footerCart">
        <Link to="/account">Sign in</Link>
      </div>
    </div>
  );

  }
    

export default ShopCart;
