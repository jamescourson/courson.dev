
// nav link click handler - updates route
const onNavLinkClick = e => {
  e.preventDefault();

  const clickedRoute = e.target.textContent.toLowerCase();
  const newRoute = `${clickedRoute}.html`;
  const newURL = new URL(newRoute, location.href);

  window.history.replaceState({}, e.target.textContent, newURL);
}

// give all nav links click handlers
document.querySelectorAll('header nav a').forEach(navLink => {
  navLink.onclick = onNavLinkClick;
})

// url change listener
window.addEventListener('popstate', e => {
  console.log(e);
});
