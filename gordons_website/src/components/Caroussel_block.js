export default function Caroussel_block ({image, altr, txt}) {
       return(
           <span className="caroussel_slide">
                <img src={image} alt={altr}/>
            </span>
       );
   }