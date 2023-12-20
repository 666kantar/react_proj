import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useCheckAdmin } from "../hooks";

import "./Nav.css";
import ShopCart from "./Cart/ShopCart";
import Slider from "../Slider";

function Nav(props) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const { cartItems, onAdd, onRemove, totalPrice } = props;
  const isCheckoutPage =
    location.pathname === "/checkout" ||
    location.pathname === "/checkout_cart" ||
    location.pathname === "/login" ||
    location.pathname === "/me" ||
    location.pathname === "/settings" ||
    location.pathname === "/payment" ||
    location.pathname === "/modal" ||
    location.pathname === "/admin" ||
    location.pathname === "/Admin";
  const isAccount =
    location.pathname === "/me" ||
    location.pathname === "/settings" ||
    location.pathname === "/admin";
  const navigate = useNavigate();
  const isAdmin = useCheckAdmin();

  let [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    if (isCheckoutPage) {
      setCartOpen(false);
      document.body.classList.remove("overflow-hidden");
    } else {
      document.body.classList.toggle("overflow-hidden", cartOpen);
    }
  }, [location.pathname, isCheckoutPage, cartOpen]);

  const closeCart = () => {
    setCartOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="nav" id="nav">
        <Link to="/">
          <img src="/img/logoTT.png" alt="logoTT" className="logoImg" />
        </Link>

        <div className="navMenu">
          <div className="menuItem">CLASIC</div>
          <div className="menuItem">MAGIC MUG</div>
          <div className="menuItem">YOUR STYLE</div>
        </div>

        <img
          src="./img/basket.png"
          alt="basket"
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`shopCartButton ${cartOpen && "active"}`}
        />
        <a href={"/admin"} className="admin">
          Admin Panel
        </a>

        <div onClick={handleLogout} className="navLogout">
          Logout
        </div>

        {cartOpen && <div className="overlay" onClick={closeCart}></div>}

        {cartOpen && (
          <ShopCart
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove}
            totalPrice={totalPrice}
            closeCart={closeCart}
          />
        )}
      </div>

      {isHomePage && <Slider />}
      {isHomePage ? null : <style>{".navMenu {display: none;}"}</style>}

      {isCheckoutPage && <style>{".shopCartButton {display: none;}"}</style>}
      {!isAccount && <style>{".navLogout {display: none;}"}</style>}
      {(!isAdmin || !isAccount) && <style>{".admin {display: none;}"}</style>}
    </>
  );
}
export default Nav;
