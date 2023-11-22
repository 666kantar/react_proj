import { useRouteError } from "react-router-dom";
import "./Error.css";

import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <a href="./">
        <Nav />
      </a>

      <div className="text">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <p>
          <a href="/">← ← ← Back to home ← ← ←</a>
        </p>
      </div>

      <a href="./">
        <Footer />
      </a>
    </div>
  );
}
