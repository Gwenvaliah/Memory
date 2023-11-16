let formValid = document.getElementById("valider");
let nom = document.getElementById("nom");
let mail = document.getElementById("mail");
let mdp = document.getElementById("password");
let validMdp = document.getElementById("password2");
let missNom = document.querySelector(".errorNom");
let missMail = document.querySelector(".errorMail");
let missMdp = document.querySelector(".errorMdp");
const REGEX_PSEUDO = /^[A-Za-z\d]{3,}$/;
const REGEX_MAIL = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
const REGEX_MDP =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;

formValid.addEventListener("click", validate);

function validate(event) {
  if (REGEX_PSEUDO.test(nom.value) === false) {
    event.preventDefault();
    missNom.textContent =
      "Choisissez un pseudo contenant au moins 3 caractères.";
    missNom.style.color = "red";
  } else {
    missNom.textContent = "";
  }
  if (REGEX_MAIL.test(mail.value) === false) {
    event.preventDefault();
    missMail.textContent = "Entrez un email valide.";
    missMail.style.color = "red";
  } else {
    missMail.textContent = "";
  }
  if (REGEX_MDP.test(mdp.value) === false) {
    event.preventDefault();
    console.log("Mot de passe incorrect");
  }
  if (validMdp.value !== mdp.value) {
    event.preventDefault();
    missMdp.textContent = "Les mots de passes ne correspondent pas.";
    missMdp.style.color = "red";
  } else {
    missMdp.textContent = "";
  }
}

const REGEX_FAIBLE = /^.{,6}$/;
const REGEX_MOYEN = /^(?=.*[0-9@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
const REGEX_FORT =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{9,}$/;
let faible = document.querySelector(".faible");
let moyen = document.querySelector(".moyen");
let fort = document.querySelector(".fort");

mdp.addEventListener("keyup", level);

function level() {
  if (!REGEX_FAIBLE.test(mdp.value)) {
    faible.classList.add("fai");
    faible.textContent = "Faible";
  } else {
    faible.classList.remove("fai");
    faible.textContent = "";
  }
  if (REGEX_MOYEN.test(mdp.value)) {
    moyen.classList.add("moy");
    moyen.textContent = "Moyen";
  } else {
    moyen.classList.remove("moy");
    moyen.textContent = "";
  }
  if (REGEX_FORT.test(mdp.value)) {
    fort.classList.add("for");
    fort.textContent = "Fort";
  } else {
    fort.classList.remove("for");
    fort.textContent = "";
  }
}

// niveau de sécurité du mot de passe
// faible <6
// moyen  > 6 et symbole OU nombre
// fort + de 9 et symbole ET nombre
