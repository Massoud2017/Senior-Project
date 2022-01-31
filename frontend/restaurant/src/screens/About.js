import React from 'react'
import about from './about_us.jpeg'
import image from './components/style.css'

function About() {
    return (
        <div style = {{paddingLeft: '2em', paddingRight: '2em'}}>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio pellentesque diam volutpat commodo sed egestas. Tincidunt augue interdum velit euismod in pellentesque. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Morbi tincidunt augue interdum velit euismod. Interdum velit laoreet id donec ultrices tincidunt arcu non. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Et netus et malesuada fames ac turpis. Ultrices vitae auctor eu augue ut lectus. Donec et odio pellentesque diam. Porttitor eget dolor morbi non arcu. Ut consequat semper viverra nam libero justo laoreet sit amet. Aenean vel elit scelerisque mauris"</p>
            <div className='image'>
                <img src={about}/> 
            </div> 
        </div>

    )
}
export default About;
