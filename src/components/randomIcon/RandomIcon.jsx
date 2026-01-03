import { useState } from "react";
import { getNewRandomElement } from "../../util";

import './RandomIcon.scss';


const icons = [
  '⨏', '⏣', '☄', '☀', '⚒', '♨', '♘'
]

const RandomIcon = ({}) => {
  const [icon, setIcon] = useState(getNewRandomElement(icons, undefined));
  const cycleIcon = () => setIcon(getNewRandomElement(icons, icon));

  const handleClick = () => {
    cycleIcon();
  }

  return (
    <span
      onClick={handleClick}
      className="random-icon"
    >
      {icon}
    </span>
  );
}

// export { getRandomIcon }
export default RandomIcon;

