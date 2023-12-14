import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { getDatabase, ref, onValue } from "firebase/database";

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


export function useCheckAdmin() {
  const db = getDatabase();
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    const adminRef = ref(db, "admins");

    const unsubscribe = onValue(adminRef, (snapshot) => {
      const adminData = snapshot.val();
      const adminArray = Object.values(adminData);
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        const isAdminUser = adminArray.includes(user.email);
        setIsAdmin(isAdminUser);

        if (!isAdminUser) {
        }
      }
    });

    return () => unsubscribe();
  }, [db, navigate]);

  return isAdmin;
}