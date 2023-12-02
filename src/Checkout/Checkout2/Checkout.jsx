import React, {useState} from "react";
import "./Checkout.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Form, useNavigate } from "react-router-dom";



const Checkout = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("email:", email);
    console.log("password:", password);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(user);
      navigate("/login");
    } catch (error) {
      const errorMessage = error.message;
      const formattedErrorMessage = errorMessage.replace("Firebase: ", ""); // Відокремлюємо повідомлення від префіксу
      console.error(formattedErrorMessage);
      setError(formattedErrorMessage);
    }
  };

  return (
    <div className="bodyCheck">
      <div className="checkPage">
      
        <div className="formCheck">
        <h1>Delivery informaiton</h1>
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
              <input type="email" name="email" className="form-control" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} required/>
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

          <button type="submit" className="endBut" onClick={onSubmit}>
            Place Order
          </button>
        </div>


        

      </div>
    </div>
  );
}



export default Checkout;