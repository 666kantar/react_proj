import { useEffect } from "react";

const Slider = () => {
  useEffect(() => {
    const logoImg = document.querySelectorAll(".logoImg");
    const sliders = document.querySelectorAll(".slider");
    const menuItems = document.querySelectorAll(".menuItem");
    const flsItems = document.querySelectorAll(".flsItem");

    const changeSlide = (index) => {
      sliders.forEach((slider) => {
        slider.style.transform = `translateX(${-100 * index}vw)`;
      });
    };

    menuItems.forEach((menuItem, index) => {
      menuItem.addEventListener("click", () => {
        changeSlide(index);
      });
    });

    flsItems.forEach((flsItem, index) => {
      flsItem.addEventListener("click", () => {
        changeSlide(index);
      });
    });

    logoImg.forEach((logoImg, index) => {
      logoImg.addEventListener("click", () => {
        changeSlide(index);
      });
    });

    return () => {
      menuItems.forEach((menuItem, index) => {
        menuItem.removeEventListener("click", () => {
          changeSlide(index);
        });
      });
      flsItems.forEach((flsItem, index) => {
        flsItem.removeEventListener("click", () => {
          changeSlide(index);
        });
      });

      logoImg.forEach((logoImg, index) => {
        logoImg.removeEventListener("click", () => {
          changeSlide(index);
        });
      });
    };
  }, []);
};

export default Slider;
