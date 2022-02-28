import React from 'react'
import aboutOut from '../assets/about_us.jpeg'
import aboutIn from '../assets/About2.jpeg'
import aboutPho from '../assets/About3.jpeg'


function About() {
    return (
        <> 
            <div class="about-top-container">
                <div class="about-title">
                    <h3><strong>A Small Look Into Our 'Pho'-nominal Family Restaurant </strong></h3>
                    <div class="about-text">
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio pellentesque diam volutpat commodo sed egestas. Tincidunt augue interdum velit euismod in pellentesque. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Morbi tincidunt augue interdum velit euismod. Interdum velit laoreet id donec ultrices tincidunt arcu non. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Et netus et malesuada fames ac turpis. Ultrices vitae auctor eu augue ut lectus. Donec et odio pellentesque diam. Porttitor eget dolor morbi non arcu. Ut consequat semper viverra nam libero justo laoreet sit amet. Aenean vel elit scelerisque mauris"</p>  
                </div>
                </div>

            </div>
            <div class="about-bottom-container">
                <img src={aboutPho} alt="pho ru" width= "350" height = "450" />             
                <img src={aboutOut} alt="pho ru" width= "450" height = "450" />     
                <img src={aboutIn} alt="pho ru" width= "350" height = "450" /> 
             </div>
        </>
    )
}
export default About;
