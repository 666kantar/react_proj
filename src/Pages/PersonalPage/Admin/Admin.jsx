import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue, update } from "firebase/database";
import "./Admin.css";


export default function Admin() {
  const db = getDatabase();
  const [dbOrders, setDbOrders] = useState([]);
  const [statusFilter, setStatusFilter] = useState("all");
  const [emailFilter, setEmailFilter] = useState("");
  

  useEffect(() => {
    const distanceRef = ref(db, "settings");

    const unsubscribe = onValue(distanceRef, (snapshot) => {
      const orderData = snapshot.val();

      const orderArray = Object.values(orderData);
      setDbOrders(orderArray);
    });

    return () => unsubscribe();
  }, [db]);

  console.log(dbOrders);

  const handleStatusChange = (email, orderNumber, newStatus) => {
    const sanitizedEmail = email.replace(/\./g, "-");
    const statusUpdate = {};
    statusUpdate[`settings/${sanitizedEmail}/${orderNumber}/status`] = newStatus;

    update(ref(db), statusUpdate);
  };

  const filteredAndSortedOrders = dbOrders
    .filter((userOrder) => {
      const { status, settings } = userOrder[Object.keys(userOrder)[0]];

      const statusMatch = statusFilter === "all" || status === statusFilter;
      const emailMatch = emailFilter === "" || settings.email.includes(emailFilter);

      return statusMatch && emailMatch;
    })
    .sort((a, b) => {
      const orderNumberA = Object.keys(a)[0];
      const orderNumberB = Object.keys(b)[0];
      return orderNumberB - orderNumberA;
    });

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

      {filteredAndSortedOrders.map((userOrder) => {
        const orderNumber = Object.keys(userOrder)[0];
        const { order, settings, status } = userOrder[orderNumber];

        return (
          <div key={orderNumber} className="border">
            <div className="itemsFlex">
              <p className="orders_1" > {orderNumber}</p>
              <p className="orders_2"> {settings.email}</p>
              <ul className="ul">
                {order.items.map((item) => (
                  <li key={item.id}>
                    {item.qty} x {item.title} - ${item.price}
                  </li>
                ))}
              </ul>
              <p className="orders_3">Total Price: {order.totalPrice}</p>

              <select
                className="orders_4"
                value={status}
                onChange={
                  (e) =>
                  handleStatusChange(
                    settings.email,
                    orderNumber,
                    e.target.value
                  )
                }
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
