import React, { useState, useEffect } from "react";
import "./Main.css";

import Footer from "../Footer/Footer.jsx";
import Nav from "../Nav/Nav.jsx";
import ScrollToTop from "../ScrollToTop";
import data from "../data.js";
import { Outlet } from "react-router-dom";

function Main() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const [totalPrice, setTotalPrice] = useState(0);

  const [order, setOrder] = useState([]);
  const [email, setEmail] = useState("");




  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    full: "",
    apartment: "",
    streetNumber: "",
    street: "",
    city: "",
    provinceS: "",
    zipcode: "",
    totalPrice: "",
    comment: "",
  });


  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);

    
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  
  useEffect(() => {
    setTotalPrice(itemsPrice);
  }, [itemsPrice]);

 useEffect(() => {
      setOrder({items: cartItems, totalPrice: totalPrice.toFixed(2)})

 },  [cartItems, totalPrice]);


  return (
    <>
      <Nav cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} totalPrice={totalPrice}/>
      <Outlet context={[products, onAdd, cartItems, totalPrice, onRemove, formData, setFormData, order, email, setEmail]} />
      <ScrollToTop />
      <Footer />
    </>
  );
}
export default Main;
