import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
    <main>
      <section>
        <div>
          <div>
            <h1>TODO App</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form>
              <div>
                <label htmlFor="email-address">Email address</label>
                <input
                  type="email"
                  label="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email address"
                />
              </div>

              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  label="Create password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Password"
                />
              </div>

              <button type="submit" onClick={onSubmit}>
                Sign up
              </button>
            </form>

            <p>
              Already have an account? <NavLink to="/login">Sign in</NavLink>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Registration;
