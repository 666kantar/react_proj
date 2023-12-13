import React, { useState, useEffect } from "react";
import { useOutletContext, useNavigate, Link } from "react-router-dom";
import "./Payment.css";
import Modal from "./Modal/Modal";
import { getDatabase, ref, set, onValue } from "firebase/database";

export default function Payment(props) {
  const navigate = useNavigate();

  const [, , cartItems, totalPrice, , formData, , order, , ] = useOutletContext();

  const db = getDatabase();
  const [orderNo, setOrderNo] = useState();

  useEffect(() => {
    const distanceRef = ref(db, "order_no/newNum");

    const unsubscribe = onValue(distanceRef, (snapshot) => {
      const orderNoValue = snapshot.val();
      
      setOrderNo(orderNoValue);
    });

    return () => unsubscribe();
  }, []);

  let newNum = parseInt(orderNo) + 1;


  function newOrderNo(newNum){
    const distance = ref(db, "order_no/");
 set(distance, {newNum: newNum})};


  function writeUserData(firstName, lastName, phone, email, full, apartment, streetNumber, street, city, provinceS, zipcode, totalPrice, comment) {
    const currentDate = new Date()

    const sanitizedEmail = formData.email.replace(/\./g, "-");

    const payment = ref(db, 'settings/' + sanitizedEmail + '/' + newNum)
   
   set(payment, {
     settings: formData,
     order: order,
     status: "in pending",
     data: `${currentDate.toDateString()}`
   });
   
   }

  const [payment, setPayment] = useState({
    cvv: "",
    firstPart: "",
    secondPart: "",
    thirdPart: "",
    fourthPart: "",
    fullName: "",
    month: "",
    year: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayment((prevPayment) => ({
      ...prevPayment,
      [name]: value,
    }));
  };
  
  const handleButtonClick = () => {
    navigate("/modal");
    window.location.reload();

  };


  const handleSubmit = (e) => {
    e.preventDefault();
    handleButtonClick();
    writeUserData(formData.firstName, formData.lastName, formData.phone, formData.email, formData.full, formData.apartment, formData.streetNumber, formData.street, formData.city, formData.provinceS, formData.zipcode, formData.totalPrice, formData.comment)
    newOrderNo(newNum)
  };



  return (
    <div className="bodyCheck">
      <div className="checkPage">
        <div className="formCheckCart">

        {cartItems.length === 0 ? (
            <>            
            <p style={{ fontSize: "2rem" }}>Cart is Empty</p>
            <br />
            
            <Link
            to="/"
            className="checkout">
            Let shopping
          </Link>

            </>

            
            ) : (
              <>

          <h1 className="checkTitle">Payment information</h1>
 

          <form onSubmit={handleSubmit}>
          <div className="backetBox">
            {cartItems.length === 0 && <div className="empty">is empty</div>}

            {cartItems.length !== 0 && (
              <>
                <div className="row">
                  <div className="col-2">
                    <strong style={{ fontSize: "1.8em" }}>Total Price</strong>
                  </div>
                  <div className="col-1 text-right">
                    <strong style={{ fontSize: "1.8em" }}>${totalPrice.toFixed(2)}</strong>
                  </div>
                </div>
                <hr />
                <div className="row"></div>

                <div className="gridCenter">
                  <div className="gridPay">
                    <div className="blackLine"></div>

                    <div className="cvv">
                      <div className="textCvv">cvv</div>
                      <input
                        type="text"
                        name="cvv"
                        className="part"
                        placeholder="123"
                        pattern="[0-9]{3}"
                        maxLength="3"
                        value={payment.cvv}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="number">
                      <div className="partsOfNumber">
                        <input
                          type="text"
                          name="firstPart"
                          className="part"
                          placeholder="4000"
                          pattern="[0-9]{4}"
                          maxLength="4"
                          value={payment.firstPart}
                          onChange={handleChange}
                          required
                        />

                        <input
                          type="text"
                          name="secondPart"
                          className="part"
                          placeholder="1234"
                          pattern="[0-9]{4}"
                          maxLength="4"
                          value={payment.secondPart}
                          onChange={handleChange}
                          required
                        />

                        <input
                          type="text"
                          name="thirdPart"
                          className="part"
                          placeholder="5678"
                          pattern="[0-9]{4}"
                          maxLength="4"
                          value={payment.thirdPart}
                          onChange={handleChange}
                          required
                        />

                        <input
                          type="text"
                          name="fourthPart"
                          className="part"
                          placeholder="9010"
                          pattern="[0-9]{4}"
                          maxLength="4"
                          value={payment.fourthPart}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="expireDate">
                      <input
                        type="text"
                        name="month"
                        className="expirePart"
                        placeholder="01"
                        pattern="[0-9]{2}"
                        maxLength="2"
                        value={payment.month}
                        onChange={handleChange}
                        required
                      />
                      /
                      <input
                        type="text"
                        name="year"
                        className="expirePart"
                        placeholder="25"
                        pattern="[0-9]{2}"
                        maxLength="2"
                        value={payment.year}
                        onChange={handleChange}
                        required
                      />
                    </div>
              
                    <div className="fullName">
                      <div className="textName">Full Name</div>
                      <input
                        type="text"
                        name="fullName"
                        className="partF"
                        placeholder="Mary Clint"
                        minLength="6"
                        value={payment.fullName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>


          <button type="submit" className={`endBut ${cartItems.length === 0 ? "hidden" : ""}`}>Confirn</button>


          </form>

</>
)}


        </div>
      </div>
    </div>
  );
}
