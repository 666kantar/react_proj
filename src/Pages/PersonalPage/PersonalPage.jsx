import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCheckAuth } from "../../hooks";
import { getDatabase, onValue, ref } from "firebase/database";
import "./ParsonalPage.css";

export default function PersonalPage() {

  useCheckAuth();
  const [orderNo, setOrderNo] = useState(null);

  useEffect(() => {
    const db = getDatabase();
    const distanceRef = ref(db, 'order_no');


    const unsubscribe = onValue(distanceRef, (snapshot) => {
      const orderNoValue = snapshot.val();
      setOrderNo(orderNoValue);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <Link to="/settings" className="settings">Change delivery information</Link>
      <br />
      {orderNo && (
        <p>Номер замовлення: {orderNo}</p>
      )}
    </>
  );
}
