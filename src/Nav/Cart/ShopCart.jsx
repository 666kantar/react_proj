
import React, { useState, useEffect } from "react";
import "./ShopCart.css";
import { Link, useNavigate } from "react-router-dom";
import Basket from "./Basket";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";


function ShopCart(props) {
  
  const { cartItems, onAdd, onRemove, totalPrice } = props;
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        
        setUser(user); 
      } else {
       
        setUser(null); 
      }
    });
    return () => unsubscribe(); 
  }, []);



  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="shopCart">
      <div className="basket">
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          totalPrice={totalPrice}
        />
      </div>
      <div className="footerCart">
        {user ? ( 
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link to="/me" >My account</Link> 
          <Link to="/logout" onClick={handleLogout}>Logout</Link> 
        </div>
        ) : (
          <Link to="/login">Sign in</Link> 
        )}
      </div>
    </div>
  );
}

export default ShopCart;
