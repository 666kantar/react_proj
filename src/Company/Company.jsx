import './Company.css'
import React, { useEffect } from 'react';




function MainPage() {

    useEffect(() => {
        document.title = "MMD Company";
         return () => {
            document.title = "Maple Mug Dreams";
        };
    }, []);

    
    return (
        
    <>
  
    {/* MainTop */}
    <div className="aboutHero">
        <div className="motto">
            <h3>ABOUT MAPLE MUG DREAMS</h3>
            <h1>YOUR MUG, YOUR STYLE, YOUR STORY</h1>
        </div>
    </div>

<div className="ourMission">
    <h1>OUR MISSION</h1>
    <p>To Share Love through mug.</p>
</div>


    <div className="infoBlock">
    
    <div className="info">
        
        <img src='./img/creativity.png' alt="" className="infoIconC"/>
        <span className="infoTitle">Love of Creativity</span>
        <span className="infoDesc">Crafting Unique Prints for Your Enjoyment</span>
    </div>
    <div className="info">
        <img className="infoIconC" src='./img/harmony.png' alt=""/>
        <span className="infoTitle">Love of Harmony</span>
        <span className="infoDesc">Creating Balanced and Beautiful Designs Your Delight</span>
    </div>
    <div className="info">
        <img className="infoIconC" src='./img/simplicity.png' alt=""/>
        <span className="infoTitle">Love of Simplicity</span>
        <span className="infoDesc">Infusing Gentle Elegance into Your Every Morning</span>
    </div>
    <div className="info">
        <img className="infoIconC" src='./img/coziness.png' alt=""/>
        <span className="infoTitle">Love of Coziness</span>
        <span className="infoDesc">Wrapping Your World in Maple Mug Dreams</span>
    </div>
</div>




{/* MainBot */}
    <div className="aboutUs">
        <img className="descImg" src='./img/aboutUs.png' alt=""/>
        <div class="vertical-line"></div>
        <div className="description">
            <p>
                Welcome to Maple Mug Dreams, your go-to destination for exquisite sublimation mugs that blend style and functionality seamlessly. As a company passionate about delivering quality and uniqueness, we take pride in our mugs that transcend the ordinary.
            </p><br />
            <p>  
                At Maple Mug Dreams, we believe in infusing art into the everyday. Our sublimation mugs are not just vessels for your favorite beverages; they are canvases that showcase your individuality. Each mug tells a story, whether it's the vibrant hues, intricate designs, or personalized messages that adorn them.
            </p><br />
            <p>
                We understand the importance of savoring moments, and our Maple Mug Dreams collection is designed to elevate your daily rituals. Whether you're enjoying a soothing cup of tea in the morning or sipping on a rich, aromatic coffee in the afternoon, our sublimation mugs make every sip an experience.
            </p><br />
            <p>
                What sets Maple Mug Dreams apart is our commitment to quality and craftsmanship. Each mug is created with precision and attention to detail, ensuring a product that not only looks stunning but also stands the test of time. Our dedication to excellence extends beyond aesthetics, encompassing functionality and durability.
            </p><br />
            <p>    
                As a team driven by a passion for innovation, we continuously explore new avenues to enhance your mug experience. We believe in pushing boundaries and redefining the conventional, ensuring that Maple Mug Dreams remains at the forefront of sublimation mug excellence.
            </p><br />
            <p>
                Join us on a journey of creativity, self-expression, and unparalleled quality. Explore the Maple Mug Dreams collection and discover a world where every sip is a celebration, and every mug is a masterpiece. Cheers to unforgettable moments and stylish sips – welcome to Maple Mug Dreams!
            </p>
        </div>
    </div>
       
    </>
  
  
  );
}

export default MainPage;