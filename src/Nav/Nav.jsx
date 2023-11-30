import { Link, useLocation } from "react-router-dom";
import { useState } from 'react';

import "./Nav.css"
import ShopCart from "../Cart/ShopCart";
import Slider from "../Slider"


function Nav(props) {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const { cartItems, onAdd, onRemove } = props;

    let [cartOpen, setCartOpen] = useState(false)
   

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
        
        {cartOpen &&(
            <ShopCart cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove}/>
        )}

        </div>

        {isHomePage && <Slider />}
        {isHomePage ? null : <style>{'.navMenu {display: none;}'}</style>}
    </>
    )}
    export default Nav;