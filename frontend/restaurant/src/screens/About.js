import React from 'react'
import aboutOut from '../assets/about_us.jpeg'
import aboutIn from '../assets/About2.jpeg'
import aboutPho from '../assets/About3.jpeg'

function About() {
    return (
        <>
            <div className="about-top-container">
                <div className="about-title">
                    <h3><strong>A Small Look Into Our 'Pho'-nominal Family Restaurant</strong></h3>
                    <div className="about-text">
                        <p>Welcome to Pho Ru! We are a family-owned, Vietnamese restaurant based in South Sacramento. Our goal is to revive Vietnamese and other SouthEast Asian foods through Pho, other noodle dishes, Vietnamese meats, and seafood. The founder and chef, Patrick, is known for his famous YaYa Rainbow Trout. The chef coats a whole trout in cornmeal and deep-fries it so the skin is crunchy and the meat is tender. The sweet-funky flavor gets a major assist from fish sauce and fried garlic chips. Don't go to Pho Ru without ordering one for the table! We invite you and your loved ones to join our family and share in our cherished Vietnames cuisine of taste, togetherness, and home. </p>
                    </div>
                </div>

            </div>
            <div className="about-bottom-container">
                <img src={aboutPho} alt="pho ru" width= "350" height = "450" />             
                <img src={aboutOut} alt="pho ru" width= "450" height = "450" />     
                <img src={aboutIn} alt="pho ru" width= "350" height = "450" /> 
             </div>
        </>
    )
}
export default About;