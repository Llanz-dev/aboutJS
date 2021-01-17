// Nav activation
const burger = document.querySelector(".burger");
burger.onclick = () => {
  const nav = document.getElementById("navLink");
  nav.classList.toggle("myLink");
};

// To direct in home page
document.getElementById("home-nav").onclick = () => {
  location.replace("JS.html");
};
// To direct in games page
document.getElementById("games-nav").onclick = () => {
  location.replace("games.html");
};
