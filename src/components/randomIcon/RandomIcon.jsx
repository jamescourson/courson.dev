import { useEffect, useState } from "react";
import getNewRandomElement from "../../util/getNewRandomElement";

import './RandomIcon.scss';


const icons = [
  '⨏', '⫳', '⌽', '⌀', '⎅',
  '⎈', '⏣', '⍙', '☄', '☀',
  '⚒', '♨', '♘', '⏆'
]

const RandomIcon = ({}) => {
  const [icon, setIcon] = useState(getNewRandomElement(icons, undefined));
  const cycleIcon = () => setIcon(getNewRandomElement(icons, icon));

  // icon auto-cycles every 10 seconds
  let iconInterval;
  const setIconInterval = () =>
    setInterval(() => cycleIcon(), 10000);
  
  useEffect(() => {
    iconInterval = setIconInterval();

    return () => {
      clearInterval(iconInterval);
    }
  });

  const handleClick = () => {
    cycleIcon();

    // reset interval
    clearInterval(iconInterval);
    iconInterval = setIconInterval();
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

