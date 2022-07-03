// DECLARATION DE VARIABLES
const menuBurger = document.getElementById("menuBurger");
const nav = document.getElementById("nav");
const btnPres = document.getElementById("btnPresentation");
const nextTextPres = document.getElementById("nextPresentation");
const btnAvis = document.querySelectorAll("commentaireSeen");
const com = document.querySelectorAll("lesAvis > p"); //##############################//
//##### AVIS DES PERSONNES #####//
//##############################//
// Premier Avis

const premierAvis = document.getElementById("premierAvis");
const firstNameUn = document.getElementById("firstNameUn");
const lastNameUn = document.getElementById("lastNameUn");
const ageUn = document.getElementById("ageUn");
const commentaireTitleUn = document.getElementById("commentaireTitleUn");
const commentaireUn = document.getElementById("commentaireUn"); // Deuxieme Avis

const secondAvis = document.getElementById("secondAvis");
const firstNameDeux = document.getElementById("firstNameDeux");
const lastNameDeux = document.getElementById("lastNameDeux");
const ageDeux = document.getElementById("ageDeux");
const commentaireTitleDeux = document.getElementById("commentaireTitleDeux");
const commentaireDeux = document.getElementById("commentaireDeux"); //###########################################################################//
// OUVERTURE DU MENU BURGER

menuBurger.addEventListener("click", () => {
  nav.classList.toggle("navSeen");
}); // AFFICHER LA SUITE DE LA PRESENTATION

btnPres.addEventListener("click", () => {
  nextTextPres.classList.toggle("nextSeenPresentation");
}); // Affichage des commentaire

const avis1 = () => {
  fetch("./db.json").then(res => res.json()).then(data => {
    // first commentaire
    const firstUser = data.user.premier;
    const firstCommentaire = data.commentaire.premier;
    firstNameUn.textContent = firstUser.firstName;
    lastNameUn.textContent = firstUser.lastName;
    ageUn.textContent = firstUser.age;
    commentaireTitleUn.textContent = firstCommentaire.title;
    commentaireUn.textContent = firstCommentaire.commentaire;
  });
};

const avis2 = () => {
  fetch("./db.json").then(res => res.json()).then(data => {
    // second commentaire
    const quatriemeUser = data.user.quatrieme;
    const secondCommentaire = data.commentaire.deuxieme;
    firstNameDeux.textContent = quatriemeUser.firstName;
    lastNameDeux.textContent = quatriemeUser.lastName;
    ageDeux.textContent = quatriemeUser.age;
    commentaireTitleDeux.textContent = secondCommentaire.title;
    commentaireDeux.textContent = secondCommentaire.commentaire;
  });
};

avis1();
avis2(); // voir le commentaire

btnAvis.forEach(() => {
  addEventListener("click", () => {
    com.forEach(() => {
      classList.toggle("avisSeen");
    });
  });
});