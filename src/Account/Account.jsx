import React, { useEffect } from "react";

import "./Account.css";
import { Link } from "react-router-dom";

function Account() {
  useEffect(() => {
    document.title = "MMD Authorization";
    return () => {
      document.title = "Maple Mug Dreams";
    };
  }, []);

  return (
    <div className="bodyA">
      <form>
                    <div className="page">
                      <div className="title">
                        <img src="/img/logoTT.png" alt="logoA" className="logoA" />
                        <p>Maple mug dreams: mugs that make <br /> your life better.</p>
                      </div>
                      <div className="border">
                        <div className="form">
                          <input
                          className="formBorder"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="email"
                            required
                          />
                          <input
                          className="formBorder"
                            type="password"
                            name="password"
                            id="password"
                            size="30"
                            placeholder="password"
                            required
                          />            
                        </div>
                        <button type="submit" className="buttIn">Sign in</button>
                        <Link to='/registration' className="forget">Forgot password?</Link>
                      </div>
                      
                    </div>
      </form>
    </div>
  );
}

export default Account;
