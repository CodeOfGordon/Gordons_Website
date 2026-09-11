import { languages, frameworks_libraries, tools } from "../../data/techstack.jsx";
import ConveyorBelt from "./ConveryBelt/ConveyorBelt.jsx";

export default function Skills() {
  return (
    <section id="skills-wrapper" className="info-block" aria-labelledby="skills-title">
      <h1 id="skills-title">Skills</h1>
      <ConveyorBelt skills={languages} direction="belt-left" label="Languages" />
      <ConveyorBelt skills={frameworks_libraries} direction="belt-right" label="Frameworks/Libraries" />
      <ConveyorBelt skills={tools} direction="belt-left" label="Tools" />
    </section>
  );
}
