import { submitForm } from "./events/callback.js";

// Key LS
const KEY = "users"

// Ecoute Form
const $form = document.getElementById('formulaire')
// Listen
$form.addEventListener('submit', submitForm);
