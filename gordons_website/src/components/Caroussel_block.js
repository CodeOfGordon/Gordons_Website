import { useState } from "react";
import left_arrow from '../images/Left Arrow.png'
import right_arrow from '../images/Right Arrow.png';

export default function Caroussel_block ({images, altr, titles, paragraphs}) {
    const Carousel = ({images});
    const Carousel_txt = ({paragraphs})
    const [currIndex, setCurrIndex] = useState(0);
    const slide_left = () => {
        setCurrIndex((prevIndex) =>
            prevIndex + 1 === images.length ? 0 : prevIndex + 1
        );
    };

    const slide_right = () => {
        setCurrIndex((prevIndex) =>
            prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
        );
    };
    return(
        <ul>
            <button className="caroussel_button" id="left_arrow" onClick={slide_left}>
                <img className="caroussel_button_img" src={left_arrow} alt="left arrow of caroussel"/>
            </button>
            <button className="caroussel_button" id="right_arrow" onClick={slide_right}>
                <img src={right_arrow} alt="right arrow of caroussel"/>
            </button>
            <div id="caroussel_content">
                <img key={currIndex} src={images[currIndex]} alt={altr}/>
                <div id="caroussel_text">
                    <h3>{titles[currIndex]}</h3>
                    <p>{paragraphs[currIndex]}</p>
                </div>
            </div>
            
        </ul>
    );
}