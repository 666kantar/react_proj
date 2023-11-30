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
            <li className="flItem"><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="flMenu">
          <h1 className="fMenuTitle">Useful Links</h1>
          <ul className="fList">
            <li className="flItem">Shipping</li>

          </ul>
        </div>
        <div className="footerRight">

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
