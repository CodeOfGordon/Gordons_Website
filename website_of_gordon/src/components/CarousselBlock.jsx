import { useState } from "react";

export default function CarousselBlock ({images, altr, titles, paragraphs, links}) {
    const [currIndex, setCurrIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);

    const slideLeft = () => {
        setIsFading(true);
        setTimeout(() => {
            if (currIndex-1 < 0) {
                setCurrIndex(images.length-1);
            } else {
                setCurrIndex(currIndex-1);
            }
            setIsFading(false);
        }, 500)
    };

    const slideRight = () => {
        setIsFading(true);
        setTimeout(() => {
            if (currIndex+1 === images.length) {
                setCurrIndex(0);
            } else {
                setCurrIndex(currIndex+1);
            }
            setIsFading(false);
        }, 500)
    };
    return(
        <div id="caroussel">
            <button className="caroussel-button" id="left-arrow" onClick={slideLeft}>
                <img src={'/caroussel/Left Arrow.png'} alt="left arrow of caroussel"/>
            </button>
            <div id="caroussel-content" className={isFading ? 'fading' : ''}>
                <a href={links[currIndex]}>
                    <img key={currIndex} src={images[currIndex]} alt={altr[currIndex]}/>
                </a>
                <div id="caroussel-text">
                    <h3>{titles[currIndex]}</h3>
                    <p>{paragraphs[currIndex]}</p>
                </div>
            </div>
            <button className="caroussel-button" id="right-arrow" onClick={slideRight}>
                <img src={'/caroussel/Right Arrow.png'} alt="right arrow of caroussel"/>
            </button>
        </div>
    );
}
