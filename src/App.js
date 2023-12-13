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
import PersonalPage from "./Pages/PersonalPage/PersonalPage/PersonalPage"
import Payment from "./Pages/OrderMaking/Paymet/Payment";
import Settings from "./Pages/PersonalPage/Settings/Settings";
import Modal from "./Pages/OrderMaking/Paymet/Modal/Modal";
import Admin from "./Pages/PersonalPage/Admin/Admin";
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Main />}>
        <Route path="*" element={<ErrorPage />} />

        <Route index element={<MainPage />} />

        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<ContactPage />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />

        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout_cart" element={<CheckoutCart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/admin" element={<Admin />} />


        <Route path="/me" element={<PersonalPage />} />
        <Route path="/settings" element={<Settings />} />
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