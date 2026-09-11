import PropTypes from "prop-types";
import "./ConveyorBelt.css";

export default function ConveyorBelt({ skills, direction = "belt-left", label }) {
  return (
    <div className={`conveyor-belt-wrapper ${direction}`}>
      <p className="belt-label basic-text">{label}</p>
      <div className={`conveyor-belt ${direction}`}>
        {[...skills, ...skills].map((tech, index) => {
          const Icon = tech.icon;
          const duplicate = index >= skills.length;

          return (
            <div key={`${tech.name}-${index}`} className="skill-icon" aria-hidden={duplicate ? "true" : undefined}>
              <Icon title={tech.name} aria-hidden="true" />
              <p>{tech.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

ConveyorBelt.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.elementType.isRequired,
    }),
  ).isRequired,
  direction: PropTypes.oneOf(["belt-left", "belt-right"]),
  label: PropTypes.string.isRequired,
};
