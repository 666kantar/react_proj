import React, { useEffect, useState } from "react";

import "./Account.css";
import { Link, useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Account() {
  useEffect(() => {
    document.title = "MMD Authorization";
    return () => {
      document.title = "Maple Mug Dreams";
    };
  }, []);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("#");
        console.log(user.uid);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="bodyA">
      <div className="page">
        <div className="title">
          <img src="/img/logoTT.png" alt="logoA" className="logoA" />
          <p>
            Maple mug dreams: mugs that make <br /> your life better.
          </p>
        </div>
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
            <button type="submit" className="buttIn" onClick={onLogin}>
              Sign in
            </button>
            <Link to="/registration" className="forget">
              Forgot password?
            </Link>
          </div>

        </form>
       

      </div>
    </div>
  );
}

export default Account;
