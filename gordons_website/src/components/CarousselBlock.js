import { useState } from "react";
import leftArrow from '../images/Left Arrow.png'
import rightArrow from '../images/Right Arrow.png';

export default function CarousselBlock ({images, altr, titles, paragraphs}) {
    const Carousel = ({images});
    const CarouselTxt = ({paragraphs})
    const [currIndex, setCurrIndex] = useState(0);
    const slideLeft = () => {
        setCurrIndex((prevIndex) =>
        prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const slideRight = () => {
        setCurrIndex((prevIndex) =>
            prevIndex + 1 === images.length ? 0 : prevIndex + 1
        );
    };
    return(
        <ul>
            <button className="caroussel-button" id="left-arrow" onClick={slideLeft}>
                <img className="caroussel-button-img" src={leftArrow} alt="left arrow of caroussel"/>
            </button>
            <button className="caroussel-button" id="right-arrow" onClick={slideRight}>
                <img src={rightArrow} alt="right arrow of caroussel"/>
            </button>
            <div id="caroussel-content">
                <img key={currIndex} src={images[currIndex]} alt={altr}/>
                <div id="caroussel-text">
                    <h3>{titles[currIndex]}</h3>
                    <p>{paragraphs[currIndex]}</p>
                </div>
            </div>
            
        </ul>
    );
}