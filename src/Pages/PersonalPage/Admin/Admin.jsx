import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import './Admin.css'

export default function Admin() {
  const db = getDatabase();
  const [dbOrders, setDbOrders] = useState([]);

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
  
  return (
    <div>
      
      {dbOrders.map((userOrders) =>
        Object.values(userOrders).map((order) => {
          const { order: orderDetails, settings } = order;
  
          return (
            <div className="border">
            <div key={orderDetails.orderId} className="itemsFlex">
              <p>User: {settings.email}</p>
              <p>Total Price: {orderDetails.totalPrice}</p>
              <ul>
                {orderDetails.items.map((item) => (
                  <li key={item.id}>
                    {item.qty} x {item.title} - ${item.price}
                  </li>
                ))}
              </ul>
              {/* Display other details as needed */}
            </div>
            </div>
          );
          
        })
        
      )}
    </div>
  );
  
}
