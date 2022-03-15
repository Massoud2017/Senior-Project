import React from 'react';
import './components/home-style.css';
import './components/home-script.js';
import front from './components/home-front.jpg';
import interior from './components/home-interior.jpg';
import food from './components/home-food.jpg';

function Home() {

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