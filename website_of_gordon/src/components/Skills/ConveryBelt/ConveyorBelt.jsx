import * as SiIcons from "react-icons/si";
import * as RiIcons from "react-icons/ri";
import * as FaIcons from "react-icons/fa";
import * as VscIcons from "react-icons/vsc";
import "./ConveyorBelt.css";

const iconPacks = {
  'Si': SiIcons,
  'Ri': RiIcons,
  'Fa': FaIcons,
  'Vsc': VscIcons,
};

export default function ConveyorBelt({ skills, direction = "belt-left", label }) {
    return (
        <div className={`conveyor-belt-wrapper ${direction}`}>
            <p className="belt-label basic-text">{label}</p>
            <div className={`conveyor-belt ${direction}`}>
            {[...skills, ...skills].map((tech, idx) => {
                // ^ Duplication trick so animation is seamless
                // Get prefix (first part before uppercase letter)
                const match = tech.icon.match(/^([A-Za-z]+)[A-Z]/);
                const prefix = match ? match[1] : null;
                const IconPack = iconPacks[prefix];
                const Icon = IconPack ? IconPack[tech.icon] : null;
                return (
                <div key={tech.name + idx} className="skill-icon">
                    {Icon ? <Icon title={tech.name} /> : <span>{tech.name}</span>}
                    <p>{tech.name}</p>
                </div>
                );
            })}
            </div>
        </div>
    );
}