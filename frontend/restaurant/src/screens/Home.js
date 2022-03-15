import React from 'react';
import './components/home-style.css';
import front from './components/home-front.jpg';
import interior from './components/home-interior.jpg';
import food from './components/home-food.jpg';

function Home() {
    document.addEventListener("DOMContentLoaded", function (event) {
        const images = document.querySelectorAll(".intro-slideshow img");
        const nextImageDelay = 5000;
        let currentImageCounter = 0;
      
        images[currentImageCounter].style.opacity = 1;
        setInterval(nextImage, nextImageDelay);
      
        function nextImage() {
          images[currentImageCounter].style.opacity = 0;
          currentImageCounter = (currentImageCounter + 1) % images.length;
          images[currentImageCounter].style.opacity = 1;
        }
    });

    return (
        <div className="intro">
            <div className="intro-slideshow">
                <img src={front} />
                <img src={interior} />
                <img src={food} />
            </div>
            <div className="intro-header">
                <h1>Pho Ru</h1>
                <p>Vietnamese Southeast Asian Cuisine Restaurant</p>
                <p>Sacramento, CA</p>
            </div>
        </div>
    )
}

export default Home;