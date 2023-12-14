import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";

// https://legacy.reactjs.org/docs/hooks-custom.html

export function useCheckAuth() {
  const navigate = useNavigate();
  let loggedIn = false;

  onAuthStateChanged(auth, (user) => {
    if (user) {

      loggedIn = true;
    } else {

      loggedIn = false;
      navigate("/login");
    }
  });

  return loggedIn;
}