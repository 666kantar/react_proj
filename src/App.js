import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import Company from "./InfoPages/Company/Company"
import ContactPage from "./InfoPages/Contact/ContactPage";

import Main from "./Main/Main";
import ErrorPage from "./Error/Error";
import Account from './Account/Account'
import Checkout from "./Checkout/Checkout2/Checkout";
import CheckoutCart from "./Checkout/CheckoutCart";
import Registration from "./Account/Registration/Registration"

  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Main />}>
        <Route index element={<MainPage />} />

        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<ContactPage />} />
        

        <Route path="*" element={<ErrorPage />} />
        <Route path="/account" element={<Account />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout_cart" element={<CheckoutCart />} />
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