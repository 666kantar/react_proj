// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD5GXsJLePh4rrN9g8mQtg2odNgwa0CJsY",
  authDomain: "kantar-s-project.firebaseapp.com",
  projectId: "kantar-s-project",
  storageBucket: "kantar-s-project.appspot.com",
  messagingSenderId: "710278679720",
  appId: "1:710278679720:web:1712392b2c5f5322cbc69d"
};


const app = initializeApp(firebaseConfig);





export default app;
export const auth = getAuth(app);



