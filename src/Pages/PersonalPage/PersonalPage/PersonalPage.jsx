import React, { useState, useEffect } from "react";
import { useOutletContext, Link } from "react-router-dom";
import { getDatabase, ref, onValue } from "firebase/database";
import { useCheckAuth } from "../../../hooks";
import Products from "../Product/Product";

export default function PersonalPage() {
  const [, , , , , , , , email] = useOutletContext();
  const db = getDatabase();
  const [dbOrders, setDbOrders] = useState([]);
  const [statusFilter] = useState("all");

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
        const emailMatch = mainEmale === settings.email;

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
    document.body.classList.add("noScroll");
    window.scrollTo(0, 0);
  };

  const handleCloseProduct = () => {
    setSelectedOrder(null);
    document.body.classList.remove("noScroll");
  };

  return (
    <div>
      {filteredAndSortedOrders.length === 0 ? (
        <div className="bodyCheck">
          <div className="checkPage">
            <div className="formCheckCart">
              <h1 style={{ fontSize: "4rem" }}>Order history</h1>
              <br />
              <p style={{ fontSize: "2rem", marginBottom: "2em" }}>
                You haven't placed an order yet
              </p>
              <br />

              <Link to="/" className="checkout">
                Let shopping
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <>
          {selectedOrder && (
            <>
              <div className="overlay" onClick={handleCloseProduct}></div>
              <div className="modal">
                <div className="closeBut" onClick={handleCloseProduct}>
                  X
                </div>
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
                  <p
                    className="orders_1"
                    onClick={() => handleOpenProduct(orderNumber, settings)}
                  >
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
                  <p className="orders_3">
                    Total Price: {orderDetails.totalPrice}
                  </p>
                  <div className="infoOrder"></div>
                  <div className="orders_4">
                    Status: <br />
                    {status}
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
