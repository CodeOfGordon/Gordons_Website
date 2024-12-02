import { useState, useEffect } from "react";
import './CarousselBlock.css';

export default function CarousselBlock ({images, altr, titles, links}) {
    const FadeIn = "fading-in";
    const FadeOut = "fading-out";
    const Normal = "";
    const [currIndex, setCurrIndex] = useState(0);
    const [fadeState, setFadeState] = useState(Normal);
    const [isPreloaded, setIsPreloaded] = useState(false);

    // preload images, might take long so use Promises
    useEffect(() => {
      const preloadImages = () => {
        const promises = images.map((src) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
          });
        });
  
        Promise.all(promises).then(() => {
          setIsPreloaded(true);
        });
      };
  
      preloadImages();
    }, [images]);

    const slideLeft = () => {
        setFadeState(FadeOut);
        setTimeout(() => {
            setFadeState(FadeIn);
            if (currIndex-1 < 0) {
                setCurrIndex(images.length-1);
            } else {
                setCurrIndex(currIndex-1);
            }
            setFadeState(Normal);
        }, 500)
    };

    const slideRight = () => {
        setFadeState(FadeOut);
        setTimeout(() => {
            setFadeState(FadeIn);
            if (currIndex+1 === images.length) {
                setCurrIndex(0);
            } else {
                setCurrIndex(currIndex+1);
            }
            setFadeState(Normal);
        }, 500)
    };

    if (!isPreloaded) {
        return <div id="carousel-loading">Loading...</div>;
    }
    return(
        <div id="caroussel">
            <button className="caroussel-button" id="left-arrow" onClick={slideLeft} disabled={fadeState ? true : false}>
                <img src={'/caroussel/Left Arrow.png'} alt="left arrow of caroussel"/>
            </button>
            <div id="caroussel-content" className={fadeState}>
                <h3>{titles[currIndex]}</h3>
                <a href={links[currIndex]}>
                    <img key={currIndex} src={images[currIndex]} alt={altr[currIndex]}/>
                </a>
            </div>
            <button className="caroussel-button" id="right-arrow" onClick={slideRight} disabled={fadeState ? true : false}>
                <img src={'/caroussel/Right Arrow.png'} alt="right arrow of caroussel"/>
            </button>
        </div>
    );
}