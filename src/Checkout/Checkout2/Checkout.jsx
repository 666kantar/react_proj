import React from "react";
import "./Checkout.css";

export default function Checkout() {

  return (
    <div className="bodyCheck">
      <div className="checkPage">
      
        <div className="formCheck">
        <h1>Delivery informaiton</h1>

        <form action="/#" method="GET">
          <div className="formFlex">
            <div className="formgroup">
              <input type="text" name="firstName" className="form-control" placeholder="First name" />
            </div>

            <div className="formgroup">
              <input type="text" name="lastName" className="form-control" placeholder="Last name"/>
            </div>

            <div className="formgroup">
              <input type="phone" name="phone" className="form-control" placeholder="Phone number"/>
            </div>

            <div className="formgroup">
              <input type="email" name="email" className="form-control" placeholder="Email Address"/>
            </div>

            <div className="formgroup-2">
              <textarea type="text" name="full" className="form-control-2" placeholder="Full Address"/>
            </div>

            <div className="formgroup">
              <input type="text" name="apartment" className="form-control" placeholder="Apartment"/>
            </div>

            <div className="formgroup">
              <input type="text" name="streetNumber" className="form-control" placeholder="Street number" />
            </div>

            <div className="formgroup">
              <input type="text" name="street" className="form-control" placeholder="Street" />
            </div>

            <div className="formgroup">
              <input type="text" name="city" className="form-control" placeholder="City" />
            </div>

            <div className="formgroup">
              <input type="text" name="provinceS" className="form-control" placeholder="Province"/>
            </div>

            <div className="formgroup">
              <input type="text" name="zipcode" className="form-control" placeholder="Zip Code"/>
            </div>

            
          </div>

          <button type="submit" className="endBut">
            Place Order
          </button>
          </form>
        </div>


        

      </div>
    </div>
  );
}
