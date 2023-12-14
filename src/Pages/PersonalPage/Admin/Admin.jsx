import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue, update } from "firebase/database";
import "./Admin.css";
import Products from "../Product/Product";
import { useCheckAdmin, useCheckAuth } from "../../../hooks";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const db = getDatabase();
  const [dbOrders, setDbOrders] = useState([]);
  const [statusFilter, setStatusFilter] = useState("all");
  const [emailFilter, setEmailFilter] = useState("");
  const navigate = useNavigate();
  const isAdmin = useCheckAdmin();

  useCheckAuth();
  if (!isAdmin) {
    navigate("/me")
  }

  useEffect(() => {
    const distanceRef = ref(db, "settings");
  
    const unsubscribe = onValue(distanceRef, (snapshot) => {
      const orderData = snapshot.val();
  
      const orderArray = Object.values(orderData);
      setDbOrders(orderArray);
    });
  
    return () => unsubscribe();
  }, [db]);
  

  const handleStatusChange = (email, orderNumber, newStatus) => {
    const sanitizedEmail = email.replace(/\./g, "-");
    const statusUpdate = {};
    statusUpdate[`settings/${sanitizedEmail}/${orderNumber}/status`] = newStatus;

    update(ref(db), statusUpdate);
  };

  const filteredAndSortedOrders = Object.entries(dbOrders)
  .flatMap(([email, userOrders]) => {
    return Object.entries(userOrders).map(([orderNumber, order]) => {
      const { status, settings } = order;
      const statusMatch = statusFilter === "all" || status === statusFilter;
      const emailMatch =
        emailFilter === "" || (settings && settings.email.includes(emailFilter));

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
      <div className="filters">
        <input
          type="text"
          placeholder="Filter by email"
          value={emailFilter}
          onChange={(e) => setEmailFilter(e.target.value)}
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All Orders</option>
          <option value="in pending">In Pending</option>
          <option value="shipping">Shipping</option>
          <option value="delivered">Delivered</option>
        </select>
      </div>
  
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
        <select
          className="orders_4"
          value={status}
          onChange={(e) => handleStatusChange(settings.email, orderNumber, e.target.value)}
        >
          <option value="in pending">In Pending</option>
          <option value="shipping">Shipping</option>
          <option value="delivered">Delivered</option>
        </select>
      </div>
    </div>
  );
})}

    </div>
  );
  
}
