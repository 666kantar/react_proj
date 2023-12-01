import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';

import "./Nav.css"
import ShopCart from "../Cart/ShopCart";
import Slider from "../Slider"


function Nav(props) {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const { cartItems, onAdd, onRemove,  totalPrice, setTotalPrice} = props;
    const isCheckoutPage = location.pathname === '/checkout' || location.pathname === '/checkout_cart';

    

    let [cartOpen, setCartOpen] = useState(false)
   
    useEffect(() => {
        if (isCheckoutPage) {
            setCartOpen(false);
            document.body.classList.remove('overflow-hidden');
        } else {
            document.body.classList.toggle('overflow-hidden', cartOpen);
        }
    }, [location.pathname, isCheckoutPage, cartOpen]);

    const closeCart = () => {
        setCartOpen(false);
        document.body.classList.remove('overflow-hidden');
    };

    // console.log('nav cartItems', cartItems)

    return (
    <>
        <div className="nav" id='nav'>
        <Link to='/'><img src='/img/logoTT.png' alt="logoTT" className="logoImg"/></Link>


        <div className="navMenu">
            <div className="menuItem">CLASIC</div>
            <div className="menuItem">MAGIC MUG</div>
            <div className="menuItem">YOUR STYLE</div>
        </div>


        <img src='./img/basket.png' alt="basket" onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shopCartButton ${cartOpen && 'active'}`}/> 
        
        {cartOpen && <div className="overlay" onClick={closeCart}></div>}


        {cartOpen &&(
            <ShopCart cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove}
            totalPrice={totalPrice} 
            setTotalPrice={setTotalPrice}/>
        )}

        </div>

        {isHomePage && <Slider />}
        {isHomePage ? null : <style>{'.navMenu {display: none;}'}</style>}


        {isCheckoutPage && <style>{'.shopCartButton {display: none;}'}</style>}
    </>
    )}
    export default Nav;