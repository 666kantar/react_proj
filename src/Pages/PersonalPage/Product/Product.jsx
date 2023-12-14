import React from "react";
import "./Product.css";

function Products({ orderNumber, settings, dbOrders }) {
  const orderData = dbOrders.find((order) => {
    const orderNumbers = Object.keys(order);
    return orderNumbers.includes(orderNumber);
  });

  if (!orderData) {
    return <p>Order not found </p>;
  }

  const order = orderData[orderNumber].order;
  const status = orderData[orderNumber].status;
  const data = formatDate(orderData[orderNumber].data);

  function formatDate(rawDate) {
    const dateObject = new Date(rawDate);
    const month = dateObject.toLocaleString("en-us", { month: "short" });
    const day = dateObject.getDate();
    const year = dateObject.getFullYear();

    return `${month} ${day} ${year}`;
  }

  return (
    <div>
      <h2>Order #: {orderNumber}</h2>
      <div className="flexDetail">
        <div className="flexItems">
          <p>Status: {status}</p>
          <h3>Items:</h3>
          <ul>
            {order.items.map((item, index) => (
              <div key={item.id} className="flexDelObj">
                <li>
                  <h4>{item.title}</h4>
                  <p>qty: </p>
                  <p>Price: </p>
                </li>

                <li className="space">
                  <h4>&nbsp;</h4>
                  <p>{item.qty}</p>
                  <p>{item.price}</p>
                </li>
              </div>
            ))}
          </ul>
          <ul>
            <div className="flexDelObj">
              <li className="space" style={{ marginRight: "4em" }}>
                <p>Total price: </p>
                <p>Data: </p>
              </li>
              <li className="space">
                <p>{order.totalPrice}</p>
                <p>{data}</p>
              </li>
            </div>
          </ul>
        </div>
        <div className="flexDelivery">
          <div className="flex2">
            {Object.entries(settings).map(([key, value]) => (
              <div key={key} className="flexDelObj">
                <p className="key">{`${key}: `}</p>
                <p className="value">{`${value}`}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
