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

// Right side
document.getElementById("advertisement").onclick = () => {
  window.open(
    "https://stock.adobe.com/ph/plans?tduid=14c0c30a785985a9c2720a83d6953aab&as_channel=affiliate&as_campclass=redirect&as_source=arvato"
  );
};
