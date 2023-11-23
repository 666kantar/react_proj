import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import Company from "./Company/Company"
import Main from "./Main/Main";
import ErrorPage from "./Error/Error";
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Main />}>
        <Route index element={<MainPage />} />
        <Route path="/company" element={<Company />} />
        <Route path="*" element={<ErrorPage />} />
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