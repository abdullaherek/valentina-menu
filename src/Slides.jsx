import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './slides.css';

const Slides = () => {
    const images = [
        "https://raw.githubusercontent.com/abdullaherek/valentina-menu/main/src/images/1.jpeg",
        "https://raw.githubusercontent.com/abdullaherek/valentina-menu/main/src/images/2.jpeg",
        "https://raw.githubusercontent.com/abdullaherek/valentina-menu/main/src/images/3.jpeg",
        "https://raw.githubusercontent.com/abdullaherek/valentina-menu/main/src/images/4.jpeg",

    ];

    return (
        <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    <span>Slide 1</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    <span>Slide 2</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    <span>Slide 3</span>
                </div>
            </div>
        </Slide>
    );
};

export default Slides;