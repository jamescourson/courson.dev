const skillHoverLabel = document.getElementById('skill-hover-label');
const skillIcons = document.getElementsByTagName('img');

for (let skillIcon of skillIcons) {
  skillIcon.addEventListener('mouseover', () => {
    skillHoverLabel.style.visibility = 'visible';
    skillHoverLabel.textContent = skillIcon.getAttribute('alt');
  });
  
  skillIcon.addEventListener('mouseout', () => {
    skillHoverLabel.style.visibility = 'hidden';
    skillHoverLabel.textContent = '';
  });
}

console.log('event listeners set!')