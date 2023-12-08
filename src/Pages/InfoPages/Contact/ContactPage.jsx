// src/components/ContactPage.js
import React from "react";
import './ContactPage.css'

const ContactPage = () => {


      document.title = "MMD Contact";
 
    
  return (
  <div className="bodyCheck">
     <form action={"/123"} method="GET">
      <div className="checkPage">
      
        <div className="formContact">
        <h1>Contact Us</h1>
          <div className="contactFormFlex">
            <div className="contactForm">
                <label htmlFor="email">Email Address</label>
              <input type="email" name="email" id="email" className="contactEmail" placeholder="Email Address" required/>
            </div>

            <div className="contactForm">
                <label htmlFor="text">Type your question here:</label>
              <textarea type="text" id="text" name="text" className="contactText" placeholder="Type your question here" required/>
            </div>

            
          </div>

          <button type="submit" className="endButC">
            Submit
          </button>
        </div>

        

      </div>
      </form>
    </div>
  );
}

export default ContactPage;
