// import de la fonction de sauvegarde dans le Localstorage
import { saveData } from "./save.js";

// CallBack appelé lors de la soumission du form
function submitForm(event) {
    // Block auto refresh
    event.preventDefault()
    // Si le champ n'est pas vide
    if (event.currentTarget.querySelector('#nom').value != '') {
        // Sauvegarde "Sauvage"
        saveData("users", {
            name: event.currentTarget.querySelector('#nom').value,
            email: event.currentTarget.querySelector('#mail').value,
            password: event.currentTarget.querySelector('#password').value
        })
        
        // Empty Fields
        event.currentTarget.querySelector('#nom').value = ''
        event.currentTarget.querySelector('#mail').value = ''
        event.currentTarget.querySelector("#password").value = ''
        
        // Refresh Users List
    }
}

// Export de la fonction de callback
export {
    submitForm
}