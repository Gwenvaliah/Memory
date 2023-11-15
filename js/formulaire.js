let formValid = document.getElementById('valider')
let nom = document.getElementById('nom')
let missNom = document.getElementById('nomVide')
let nomValid = /[A-Za-z0-9]{3,}/; 

formValid.addEventListener('click', validation); 

function validation(event) {
    if (nom.validity.valueMissing) {
        event.preventDefault(); 
        missNom.textContent = `Nom d'utilisateur manquant`;
        missNom.style.color = 'red';
        console.log("c'est vide");
    } else if (nomValid.test(nom.value)===false) {
            event.preventDefault();
            missNom.textContent = 'Format incorrect';
            missNom.style.color = 'orange';
            console.log("respecte les consignes");
        }
}