import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footerLeft">
        <div className="flMenu">
          <h1 className="fMenuTitle">About Us</h1>
          <ul className="fList">
            <li className="flItem">
              <Link to="/company">Company</Link>
            </li>
            <li className="flItem">Contact</li>
            <li className="flItem">Stores</li>
          </ul>
        </div>
        <div className="flMenu">
          <h1 className="fMenuTitle">Useful Links</h1>
          <ul className="fList">
            <li className="flItem">Shipping</li>
            <li className="flItem">Refund</li>
            <li className="flItem">Feedback</li>
          </ul>
        </div>
        <div className="footerRight">
          <div className="frMenu">
            <h1 className="fMenuTitle">Subscribe to our newsletter</h1>
            <div className="fMail">
              <input
                type="text"
                placeholder="your@email.com"
                className="fInput"
              />
              <button className="fButton">Join!</button>
            </div>
          </div>

          <div className="frMenu">
            <span className="copyright">
              @Kantar's MM Dreams. All rights reserved. 2023.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
