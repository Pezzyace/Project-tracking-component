const openNav = document.getElementById("openNav");
const closeNav = document.getElementById("closeNav");
const nav = document.getElementById("nav");

openNav.addEventListener("click", () => {
  openNav.style.display = "none";
  closeNav.style.display = "inline-flex";
  nav.style.display = "flex";

})

closeNav.addEventListener("click", () => {
  openNav.style.display = "inline-flex";
  closeNav.style.display = "none";
  nav.style.display = "none";

})
