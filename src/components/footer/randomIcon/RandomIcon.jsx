import { useState } from "react";
import { getNewRandomElement } from "~/util";

import './RandomIcon.scss';


const icons = [
  '⨏', '⏣', '☄', '☀', '⚒', '♨', '♘', '⭔', '⟁'
]

/*
  RandomIcon - an inline text element that renders a random character from a given list.
    - Used in footer: src/components/footer/Footer.jsx
    - Cycles to a new icon on click
    - Uses `getNewRandomElement` (see line 2) to avoid repeats on change
    - Props:
      iconSet - optional, an array of icons to render
        defaults to `icons` (see lines 7-8)
*/
const RandomIcon = ({ iconSet = icons }) => {
  const [icon, setIcon] = useState(getNewRandomElement(iconSet, undefined));
  const cycleIcon = () => setIcon(getNewRandomElement(iconSet, icon));

  // cycle to a new random icon on click
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

