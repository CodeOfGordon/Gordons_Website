import CarousselBlock from "./Caroussel/CarousselBlock";
import { projects } from "../../data/experienceData";

export default function Experience() {
  return (
    <div id="experience-wrapper" className="info-block">
      <h1>Experience</h1>
      <CarousselBlock projects={projects} />
    </div>
  );
}
