import { useState } from "react";
import leftArrow from '../assets/Left Arrow.png'
import rightArrow from '../assets/Right Arrow.png';

export default function CarousselBlock ({images, altr, titles, paragraphs}) {
    const Carousel = ({images});
    const CarouselTxt = ({paragraphs})
    const [currIndex, setCurrIndex] = useState(0);
    const slideLeft = () => {
        if (currIndex-1 < 0) {
            setCurrIndex(images.length-1);
        } else {
            setCurrIndex(currIndex-1);
        }
    };

    const slideRight = () => {
        if (currIndex+1 === images.length) {
            setCurrIndex(0);
        } else {
            setCurrIndex(currIndex+1);
        }
    };
    return(
        <div id="caroussel">
            <button className="caroussel-button" id="left-arrow" onClick={slideLeft}>
                <img className="caroussel-button-img" src={leftArrow} alt="left arrow of caroussel"/>
            </button>
            <div id="caroussel-content">
                <img key={currIndex} src={images[currIndex]} alt={altr}/>
                <div id="caroussel-text">
                    <h3>{titles[currIndex]}</h3>
                    <p>{paragraphs[currIndex]}</p>
                </div>
            </div>
            <button className="caroussel-button" id="right-arrow" onClick={slideRight}>
                <img src={rightArrow} alt="right arrow of caroussel"/>
            </button>
        </div>
    );
}
