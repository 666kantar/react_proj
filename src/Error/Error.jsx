import { Link, useRouteError } from "react-router-dom";
import "./Error.css";


export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">

      <div className="text">
        <h1>Oops!</h1>
        <p>Sorry, this page no was created yet.</p>
        <p>
        <i>{error?.statusText || error?.message}</i>
        </p>
        <p>
          <Link to="/">← ← ← Back to home ← ← ←</Link>
        </p>
      </div>

    </div>
  );
}
