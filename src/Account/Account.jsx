import React, { useEffect } from 'react';
import ScrollToTop from "../ScrollToTop";

import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer"

import './Account.css'



function Account() {

    useEffect(() => {
        document.title = "MMD Account";
         return () => {
            document.title = "Maple Mug Dreams";
        };
    }, []);

    
    return (
        
    <>
    <ScrollToTop />
    <Nav />
  
   
        <Footer />
    </>
  
  
  );
}

export default Account;