export default function Logos_block ({img1, img1alt, img2, img2alt, img3, img3alt,
 img4, img4alt, img5, img5alt}) {
    return(
        <span className="logos-block">
            <img src={img1} alt={img1alt}/>
            <img src={img2} alt={img2alt}/>
            <img src={img3} alt={img3alt}/>
            <img src={img4} alt={img4alt}/>
            <img src={img5} alt={img5alt}/>
          </span>
    );
}