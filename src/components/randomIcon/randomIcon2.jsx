import { useState } from "react";


const randomIcons = [
  '⨏'
]

const getRandomIcon = () =>
  randomIcons[Math.floor(Math.random() * randomIcons.length)];

const RandomIcon = () => {
  const [icon, setIcon] = useState(getRandomIcon());
  const clickHandler = () =>
    setIcon(getRandomIcon());

  return (
    <span onClick={clickHandler}>{icon}</span>
  );
}

export { getRandomIcon }
export default RandomIcon;

