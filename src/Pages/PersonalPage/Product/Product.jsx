import React from "react";

export default function Products({ orderDetails }) {
  // Використовуйте orderDetails для відображення товарів та іншої інформації
  return (
    <div>
      {/* Відображення товарів та іншої інформації */}
      <h2>Products for Order {Object.keys(orderDetails)[0]}</h2>
      {/* Додайте інші елементи, які вам потрібні */}
    </div>
  );
}