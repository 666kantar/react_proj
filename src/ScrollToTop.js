import { useEffect } from "react";

function ScrollToTop() {
  useEffect(() => {
    setTimeout(() => window.scrollTo(0, localStorage.getItem('position')), 0);
  }, []);
}

export default ScrollToTop;
