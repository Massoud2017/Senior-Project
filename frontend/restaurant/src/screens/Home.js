
import './components/home-style.css';
import front from './components/home-front.jpg';
import interior from './components/home-interior.jpg';
import food from './components/home-food.PNG';
import { Component } from "react";

const textArray = [
  "Probably the best Pho I have had yet.",
  "By far my favorite restaurant for Vietnamese food in Sacramento!",
  "Pho is purely my addiction.",
  "The best Pho I've ever had. I couldn't stop eating.",
];

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
class Home extends Component {
  constructor() {
    super();
    this.state = { textIdx: 0 };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timeout);
  }
  render() {
    let textThatChanges = textArray[this.state.textIdx % textArray.length];
    return (
        <div className="intro">
        <div className="intro-slideshow">
            <img src={front} />
            <img src={interior} />
            <img src={food} />
        </div>
        <div className="intro-header">
         <p>{textThatChanges}</p>
          <p>Yelp Reviews</p>
            <h1>Pho Ru</h1>
            <p>Vietnamese Southeast Asian Cuisine Restaurant</p>
            <p>Sacramento, CA</p>
        </div>
    </div>  
    );
  }
}

export default Home;