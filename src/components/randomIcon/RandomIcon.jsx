import { useEffect, useState } from "react";

import './RandomIcon.scss';


const randomIcons = [
  '⨏', '⫳', '⌽', '⌀', '⎅',
  '⎈', '⏣', '⍙', '☄', '☀',
  '⚒', '♨', '♘', '⏆'
]

// returns a random icon, avoiding repeats
const getRandomIcon = (currentIcon = '') =>{
  let randomIcon;

  do {
    randomIcon = randomIcons[Math.floor(Math.random() * randomIcons.length)];
  } while (randomIcon === currentIcon);

  return randomIcon;
}

const RandomIcon = ({}) => {
  const [icon, setIcon] = useState(getRandomIcon());
  const cycleIcon = () => setIcon(getRandomIcon(icon));

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
    // cycle icon
    setIcon(getRandomIcon(icon));

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

