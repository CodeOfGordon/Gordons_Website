import CarousselBlock from "./Caroussel/CarousselBlock";
import { images, altr, titles, links } from "../../data/experienceData";

export default function Experience() {
  return (
    <div id="experience-wrapper" className="info-block">
      <h1>Experience</h1>
      <CarousselBlock images={images} altr={altr} titles={titles} links={links} />
    </div>
  );
}