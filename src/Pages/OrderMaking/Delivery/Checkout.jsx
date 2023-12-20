import React from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import "./Checkout.css";

const Checkout = (props) => {
  const [, , cartItems, , , formData, setFormData] = useOutletContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/payment");
  };

  return (
    <div className="bodyCheck">
      <div className="checkPage">
        <div className="formCheck">
          {cartItems.length === 0 ? (
            <>
              <p style={{ fontSize: "2rem" }}>Cart is Empty</p>
              <br />

              <Link to="/" className="checkout">
                Let shopping
              </Link>
            </>
          ) : (
            <>
              <h1>Delivery informaiton</h1>
              <form onSubmit={onSubmit}>
                <div className="formFlex">
                  <div className="formgroup">
                    <input
                      type="text"
                      name="firstName"
                      className="form-control"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="formgroup">
                    <input
                      type="text"
                      name="lastName"
                      className="form-control"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="formgroup">
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      placeholder="Phone number in format: 1234567890"
                      value={formData.phone}
                      onChange={handleChange}
                      pattern="[0-9]{10}"
                      required
                    />
                  </div>

                  <div className="formgroup">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="formgroup-2">
                    <textarea
                      type="text"
                      name="full"
                      className="form-control-2"
                      placeholder="Full Address"
                      value={formData.full}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="formgroup">
                    <input
                      type="text"
                      name="apartment"
                      className="form-control"
                      placeholder="Apartment"
                      value={formData.apartment}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="formgroup">
                    <input
                      type="text"
                      name="streetNumber"
                      className="form-control"
                      placeholder="Street number"
                      value={formData.streetNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="formgroup">
                    <input
                      type="text"
                      name="street"
                      className="form-control"
                      placeholder="Street"
                      value={formData.street}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="formgroup">
                    <input
                      type="text"
                      name="city"
                      className="form-control"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="formgroup">
                    <input
                      type="text"
                      name="province"
                      className="form-control"
                      placeholder="Province"
                      value={formData.province}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="formgroup">
                    <input
                      type="text"
                      name="zipcode"
                      className="form-control"
                      placeholder="Zip Code"
                      value={formData.zipcode}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="formgroup-2">
                    <textarea
                      type="text"
                      name="comment"
                      className="form-control-2"
                      placeholder="Your comment"
                      value={formData.comment}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <button type="submit" className="endBut">
                  Place Order
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
