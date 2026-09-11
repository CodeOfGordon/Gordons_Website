import CarousselBlock from "./Caroussel/CarousselBlock";
import { projects } from "../../data/experienceData";

export default function Experience() {
  return (
    <section id="projects-wrapper" className="info-block" aria-labelledby="projects-title">
      <h1 id="projects-title">Projects</h1>
      <CarousselBlock projects={projects} />
    </section>
  );
}
