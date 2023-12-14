import React, { useEffect, useState } from "react";
import "./Modal.css";
import { Link } from "react-router-dom";
import { getDatabase, ref, onValue } from "firebase/database";

const Modal = () => {

  const [orderNo, setOrderNo] = useState();

  useEffect(() => {
    const db = getDatabase();
    const distanceRef = ref(db, "order_no/newNum");

    const unsubscribe = onValue(distanceRef, (snapshot) => {
      const orderNoValue = snapshot.val();
      setOrderNo(orderNoValue);
    });

    return () => unsubscribe();
  }, []);


  return (
    <div className="bodyCheck">
      <div className="checkPage">
        <div className="formCheckCart">
          <h1 className="checkTitle">Payment information</h1>
          <h2>Your order </h2>
      
          <h1>#{orderNo}</h1>
         
          <h2> was accepted</h2>
          <Link to="/">
            <button className="endBut">Place Order</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
