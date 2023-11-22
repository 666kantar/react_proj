import React, {useState} from "react";
import "./Main.css";

import Slider from "../Slider.js";

import MainPage from "../MainPage/MainPage.jsx";
import Footer from "../Footer/Footer.jsx";
import Nav from "../Nav/Nav.jsx";
import ScrollToTop from "../ScrollToTop";
import data from "../data.js";




function Main() {

  const { products } = data;
const [cartItems, setCartItems] = useState([]);
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

  return (
    <>
      <ScrollToTop />
      <React.StrictMode>
        <Slider />

        <Nav cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}/>
        <MainPage products={products} onAdd={onAdd} />
        <Footer />
      </React.StrictMode>
    </>
  );
}
export default Main;
