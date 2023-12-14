import React, { useState, useEffect } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { getDatabase, ref, onValue, update } from "firebase/database";
import { useCheckAuth } from "../../../hooks";
import Products from "../Product/Product";

export default function PersonalPage() {
  const [products, onAdd, cartItems, totalPrice, onRemove, formData, setFormData, order, email, setEmail] = useOutletContext();
  const db = getDatabase();
  const [dbOrders, setDbOrders] = useState([]);
  const [statusFilter, setStatusFilter] = useState("all");
  const [emailFilter, setEmailFilter] = useState("");
  
const mainEmale = email;

  useCheckAuth();

  useEffect(() => {
    const distanceRef = ref(db, "settings");
  
    const unsubscribe = onValue(distanceRef, (snapshot) => {
      const orderData = snapshot.val();
  
      const orderArray = Object.values(orderData);
      setDbOrders(orderArray);
    });
  
    return () => unsubscribe();
  }, [db]);

  const filteredAndSortedOrders = Object.entries(dbOrders)
  .flatMap(([email, userOrders]) => {
   
    return Object.entries(userOrders).map(([orderNumber, order]) => {
      const { status, settings } = order;
     
      const statusMatch = statusFilter === "all" || status === statusFilter;
      const emailMatch =
      mainEmale === settings.email;

      if (statusMatch && emailMatch) {
        return {
          email,
          orderNumber,
          order,
        };
      } else {
        return null;
      }
    });
  })
  .filter((order) => order !== null)
  .sort((a, b) => {
    const orderNumberA = parseInt(a.orderNumber);
    const orderNumberB = parseInt(b.orderNumber);

    return orderNumberB - orderNumberA;
  });


    const [selectedOrder, setSelectedOrder] = useState(null);

    const handleOpenProduct = (orderNumber, settings) => {
      setSelectedOrder({ orderNumber, settings });
    };
  
    const handleCloseProduct = () => {
      setSelectedOrder(null);
    };

  return (
    <div>
  
      {selectedOrder && (
        <>
          <div className="overlay" onClick={handleCloseProduct}></div>
          <div className="modal">
            <div className="closeBut" onClick={handleCloseProduct}>X</div>
            <Products
              orderNumber={selectedOrder.orderNumber}
              settings={selectedOrder.settings}
              dbOrders={dbOrders}
            />
          </div>
        </>
      )}
  
  
  {filteredAndSortedOrders.map(({ email, orderNumber, order }) => {
  const { order: orderDetails, settings, status } = order;

  return (
    <div key={orderNumber} className="border">
      <div className="itemsFlex">
        <p className="orders_1" onClick={() => handleOpenProduct(orderNumber, settings)}>
          {orderNumber}
        </p>
        <p className="orders_2"> {settings.email}</p>
        <ul className="ul">
          {orderDetails.items.map((item) => (
            <li key={item.id}>
              {item.qty} x {item.title} - ${item.price}
            </li>
          ))}
        </ul>
        <p className="orders_3">Total Price: {orderDetails.totalPrice}</p>
        <div className="infoOrder"></div>
        <div className="orders_4">Status: <br />{status}</div>
      </div>
    </div>
  );
})}

    </div>
  );
  
}
