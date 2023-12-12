import React, {useEffect} from "react";
import "./Modal.css"; 
import { useOutletContext } from "react-router-dom";


const Modal = ({ children, onClose }) => {
  const [products, onAdd, cartItems, totalPrice, onRemove, formData, setFormData, order, email, setEmail, setCartItems] = useOutletContext();
  
  useEffect(() => {
    setCartItems([]);
  }, []);


  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
