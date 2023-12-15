import React from "react";
import { useOutletContext, Link } from "react-router-dom";
import "./CheckoutCart.css";

export default function CheckoutCart(props) {
  const [, onAdd, cartItems, totalPrice, onRemove] = useOutletContext();




  return (
    <div className="bodyCheck">
      <div className="checkPage">
        <div className="formCheckCart">
          <h1 className="checkTitle">Your cart</h1>

          <div className="backetBox">
            {cartItems.length === 0 && <div className="empty">is empty</div>}

            {cartItems.map((item) => (
              <div key={item.id} alt="" className="checkItems">
                <img src={item.img} className="imgShop" alt="" />
                <div className="basketFlex">
                  <div className="itemsTitle">{item.title}</div>
                  <div className="itemsTitle">
                    <button onClick={() => onRemove(item)} className="remove">
                      -
                    </button>{" "}
                    <button onClick={() => onAdd(item)} className="add">
                      +
                    </button>
                  </div>
                </div>

                <div className="col-2 text-right" style={{ fontSize: "1.6rem" }} >
                  {item.qty} x ${item.price.toFixed(2)}
                </div>
              </div>
            ))}

            {cartItems.length !== 0 && (
              <>
                <div className="row">
                  <div className="col-2">
                    <strong>Total Price</strong>
                  </div>
                  <div className="col-1 text-right">
                    <strong>${totalPrice.toFixed(2)}</strong>
                  </div>
                </div>
                <hr />
                <div className="row"></div>
              </>
            )}
          </div>

          <Link
            to="/checkout"
            className={`checkout ${cartItems.length === 0 ? "hidden" : ""}`}>
            Place Order
          </Link>
        </div>
      </div>
    </div>
  );
}
