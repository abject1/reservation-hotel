// DECLARATION DE VARIABLES
const menuBurger = document.getElementById("menuBurger");
const nav = document.getElementById("nav");
const btnPres = document.getElementById("btnPresentation");
const nextTextPres = document.getElementById("nextPresentation"); // OUVERTURE DU MENU BURGER

menuBurger.addEventListener("click", () => {
  nav.classList.toggle("navSeen");
}); // AFFICHER LA SUITE DE LA PRESENTATION

btnPres.addEventListener("click", () => {
  nextTextPres.classList.toggle("nextSeenPresentation");
}); // DECLARATION DES AVIS

const avis1 = Math.floor(Math.random(0, 10) * 10);
console.log(avis1);