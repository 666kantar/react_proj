import React, { useState } from "react";
import { useOutletContext, Link } from "react-router-dom";
import "./Payment.css";

export default function Payment(props) {
  const [, onAdd, cartItems, totalPrice, onRemove] = useOutletContext();

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

  return (
    <div className="bodyCheck">
      <div className="checkPage">
        <div className="formCheckCart">
          <h1 className="checkTitle">Payment information</h1>

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

          <Link
            to="/checkout"
            className={`checkout ${cartItems.length === 0 ? "hidden" : ""}`}
          >
            Place Order
          </Link>
        </div>
      </div>
    </div>
  );
}
