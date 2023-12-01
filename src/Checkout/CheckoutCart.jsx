import React from "react";
import "./Checkout.css";
import { useOutletContext } from "react-router-dom";

export default function CheckoutCart(props) {
  const [products, onAdd, cartItems, totalPrice]=useOutletContext();
    console.log('checkout Cartitems', cartItems)
    console.log('checkout products', products)
    console.log('checkout total', totalPrice)

  return (
    <div className="bodyCheck">
      <div className="checkPage">
      
        <div className="formCheck">
        <h1>Your basket</h1>

        {totalPrice}
          


    
          

          <button type="button" className="endBut">
            Place Order 
          </button>
        </div>


        

      </div>
    </div>
  );
}
