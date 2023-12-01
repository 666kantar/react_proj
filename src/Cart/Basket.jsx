import React, {useEffect} from "react";
import { Link } from "react-router-dom";

export default function Basket(props) {
  const { cartItems, onAdd, onRemove, totalPrice, setTotalPrice} = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  // const taxPrice = itemsPrice * 0.14;
 useEffect(()=>{
  setTotalPrice(itemsPrice);
 }); //+ taxPrice;
  
  return (
    <>
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} alt="" className="row">
            <img src={item.img} className="imgCol" alt="" />
            <div className="basketFlex">
              <div className="col-2">{item.title}</div>
              <div className="col-2">
                <button onClick={() => onRemove(item)} className="remove">
                  -
                </button>{" "}
                <button onClick={() => onAdd(item)} className="add">
                  +
                </button>
              </div>
            </div>

            <div className="col-2 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            {/* <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div> */}
            {/* <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
            </div> */}

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <Link to='/checkout_cart' className="checkoutCart">
                Checkout
              </Link>
              
   
            </div>
          </>
        )}
      </div>
    </>
  );
}
