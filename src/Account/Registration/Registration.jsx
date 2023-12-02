import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Registration = () => {
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
<div className="bodyA">
      <div className="page">
        <div className="title">
          <img src="/img/logoTT.png" alt="logoA" className="logoA" />
          <p style={{textAlign: 'center'}}>
            Registration
          </p> 
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form>
          <div className="border">
            <div className="form">

              <input
                className="formBorder"
                type="email"
                name="email"
                id="email"
                placeholder="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              
              <input
                className="formBorder"
                type="password"
                name="password"
                id="password"
                size="30"
                placeholder="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="buttIn" onClick={onSubmit} style={{marginBottom: "1rem"}}>
              Sign up
            </button>
          </div>

        </form>

            <p>
              Already have an account? <Link to="/login">Sign in</Link>
            </p>
          </div>
        </div>
</div>
  );
};


export default Registration;
