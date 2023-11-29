import React, { useEffect } from 'react';

import './Account.css'



function Account() {

    useEffect(() => {
        document.title = "MMD Authorization";
         return () => {
            document.title = "Maple Mug Dreams";
        };
    }, []);

    
    return (
        
    <>
        
    </>
  
  
  );
}

export default Account; 