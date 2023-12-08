import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import Company from "./Pages/InfoPages/Company/Company"
import ContactPage from "./Pages/InfoPages/Contact/ContactPage";

import Main from "./Main/Main";
import ErrorPage from "./Pages/Error/Error";
import Login from './Pages/Authorization/SignIn/Login'
import Checkout from "./Pages/OrderMaking/Delivery/Checkout";
import CheckoutCart from "./Pages/OrderMaking/Checkout/CheckoutCart";
import Registration from "./Pages/Authorization/Registration/Registration"
import PersonalPage from "./PersonalPage/PersonalPage"
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Main />}>
        <Route index element={<MainPage />} />

        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<ContactPage />} />
        

        <Route path="*" element={<ErrorPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout_cart" element={<CheckoutCart />} />

        <Route path="/me" element={<PersonalPage />} />
      </Route>
       
    )
  );
  
  function App(){
return(
  <>
    <RouterProvider router={router} />
    </>
    );
}
export default App;