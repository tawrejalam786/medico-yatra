import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCheck, faGlobe, faStethoscope, faUserDoctor } from "@fortawesome/free-solid-svg-icons";

const icons = { arrow: faArrowRight, check: faCheck, globe: faGlobe, stethoscope: faStethoscope, doctor: faUserDoctor };

export default function Icon({ name = "check", className = "" }) {
  return <FontAwesomeIcon icon={icons[name] || faCheck} className={className} />;
}