import { languages, frameworks_libraries, tools } from "../../data/techstack.jsx";
import ConveyorBelt from "./ConveryBelt/ConveyorBelt.jsx";

export default function Skills() {
  return (
    <div id="skills-wrapper" className="info-block">
      <h1>Skills</h1>
      <ConveyorBelt skills={languages} direction="belt-left" label="Languages" />
      <ConveyorBelt skills={frameworks_libraries} direction="belt-right" label="Frameworks/Libraries" />
      <ConveyorBelt skills={tools} direction="belt-left" label="Tools" />
    </div>
  );
}