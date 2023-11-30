import "./MainPage.css";

// import ClasicColors from "./Colors/ClasicColors";
// import MagicColors from "./Colors/MagicColors";
// import YourColors from "./Colors/YourColors";


//face colors
import ClasicColors from "./noColors";
import MagicColors from "./noColors";
import YourColors from "./noColors";




import { useOutletContext } from "react-router-dom";


function MainPage(props) {
  const [products, onAdd]=useOutletContext();


  
  return (
    <>
      {/* MainTop */}
      <div className="main" id="main">
        <div className="slider">
          <div className="mainItem">
            <div className="price">
              <h2 className="mainPrice">C$ {products[0].price}</h2>
            </div>
            <div className="mainImgBg">
              <img src={products[0].img} alt="" className="mainImg" />
            </div>
            <div className="mainBuy">
              <h1 className="mainTitle">
                LOVELY
                <br />
                CLASSIC
              </h1>
              <a id="contact2" href="#product">
                <button className="buyButton">BUY NOW!</button>
              </a>
            </div>
          </div>

          <div className="mainItem">
            <div className="price">
              <h2 className="mainPrice">C$ {products[1].price}</h2>
            </div>
            <div className="mainImgBg">
              <img src={products[1].img} alt="" className="mainImg" />
            </div>
            <div className="mainBuy">
              <h1 className="mainTitle">
                MAGIC
                <br />
                MUG
              </h1>
              <a id="contact2" href="#product">
                <button className="buyButton">BUY NOW!</button>
              </a>
            </div>
          </div>

          <div className="mainItem">
            <div className="price">
              <h2 className="mainPrice">C$ {products[2].price}</h2>
            </div>
            <div className="mainImgBg">
              <img src={products[2].img} alt="" className="mainImg" />
            </div>
            <div className="mainBuy">
              <h1 className="mainTitle">
                YOUR
                <br />
                BEST
                <br />
                STYLE
              </h1>
              <a id="contact2" href="#product">
                <button className="buyButton">BUY NOW!</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="infoBlock">
        <div className="info">
          <img src="/img/sending.png" alt="" className="infoIcon" />
          <span className="infoTitle">SENDING</span>
          <span className="infoDesc">Sending the order within two days.</span>
        </div>
        <div className="info">
          <img className="infoIcon" src="/img/shipping.png" alt="" />
          <span className="infoTitle">SHIPPING</span>
          <span className="infoDesc">
            Rates according to the carrier's terms
          </span>
        </div>
        <div className="info">
          <img className="infoIcon" src="/img/gift.png" alt="" />
          <span className="infoTitle">GIFT CARDS</span>
          <span className="infoDesc">
            Buy gift cards and use coupon codes easily.
          </span>
        </div>
        <div className="info">
          <img className="infoIcon" src="/img/contact.png" alt="" />
          <span className="infoTitle">CONTACT US!</span>
          <span className="infoDesc">
            Keep in touch via email and support system.
          </span>
        </div>
      </div>

      {/* MainBot */}
      <div className="product" id="product">
        <div className="slider">
          <div className="productItem">
            <img
              src={products[0].img}
              alt=""
              className="productImg"
            />
            <div className="productDetails">
              <h1 className="productTitle">{products[0].title}</h1>
              <h2 className="productPrice">C$ {products[0].price}</h2>
              <p className="productDesc">{products[0].desc}</p>
              <ClasicColors />

              <button className="productButton" onClick={() => onAdd(products[0])}>ADD TO CART</button>
            </div>
          </div>
          <div className="productItem">
            <img
              src={products[1].img}
              alt=""
              className="productImg"
            />
            <div className="productDetails">
              <h1 className="productTitle">{products[1].title}</h1>
              <h2 className="productPrice">{products[1].price}</h2>
              <p className="productDesc">{products[1].desc}
              </p>
              <MagicColors />

              <button className="productButton" onClick={() => onAdd(products[1])}>ADD TO CART</button>
            </div>
          </div>

          <div className="productItem">
            <img
              src={products[2].img}
              alt=""
              className="productImg"
            />
            <div className="productDetails">
              <h1 className="productTitle">{products[2].title}</h1>
              <h2 className="productPrice">{products[2].price}</h2>
              <p className="productDesc">{products[2].desc}
              </p>
              <YourColors />

              <button className="productButton" onClick={() => onAdd(products[2])}>ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
