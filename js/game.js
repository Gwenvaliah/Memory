const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let paires = 0;

// fonction retourner la carte
function flipCard() {
  // Lock le plateau si 2 cartes retournées
  if (lockBoard) return;
  // prévient du clic sur la meme carte
  if (this === firstCard) return;
  this.classList.add("flip");

  // ajoute que la firstcarte est retournée et qu'il y a eu un flip (donc true a hasflippedcard si il était en false)
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  // appelle de fonction
  checkForMatch();
}

// Verifie le match ou non de 2 cartes (avec appelle de 2 fonctions)
function checkForMatch() {
  if (firstCard.dataset.framework === secondCard.dataset.framework) {
    paires++;
    if (paires===6) {
      let message = document.querySelector(".youWin")
      message.innerHTML = `<h2>Bravo ! Vous avez gagné !</h2>` + `<p>Appuyez sur la <span class="bold">barre espace</span> pour relancer le jeu</p>`;
      winCall();
    }
    disableCards();
    return;
  }
  unflipCards();
}

// fonction qui reload la page si press barre espace
function winCall() {
  addEventListener("keydown", e => {
    if (e.key == " ") {
      document.location.reload();
    }
  });
}




// détache les cartes du programme pour les laisser retournées
function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  // appelle la fonction pour reset les variables
  resetBoard();
}

// remet les cartes a l'envers si non match après une attente de 1s
function unflipCards() {
  // vérifie que le plateau est lock
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    // appelle la fonction pour reset les variables
    resetBoard();
  }, 500);
}

// retourne la carte quand il y a clic
cards.forEach((card) => card.addEventListener("click", flipCard));

// reset les variables firstCard et secondCard après chaque tour
function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

// Fonction Shuffle : mélange aléatoire des cartes (s'appelle elle meme avec les parenthèses)
(function shuffle() {
  cards.forEach((card) => {
    let ramdomPos = Math.floor(Math.random() * 12);
    card.style.order = ramdomPos;
  });
})();
