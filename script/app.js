// Sélectionner le bouton hamburger et le menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.getElementById('nav-links');

// Ajouter un écouteur d'événement pour toggle le menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');

});


function showAlert(event) {
    event.preventDefault();  // Empêche l'envoi du formulaire pour éviter de recharger la page

    // Récupérer les valeurs des champs du formulaire
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Afficher une alerte avec les informations saisies
    alert(`Nom: ${name}\nE-mail: ${email}\nMessage: ${message}`);
    
    // Si tu veux envoyer le formulaire après l'alerte, décommente la ligne suivante:
    // document.getElementById('contactForm').submit();
}

// Définition de la classe Client
class Client {
    constructor(nom, email, message) {
        this.nom = nom;
        this.email = email;
        this.message = message;
    }

    // Méthode pour afficher les informations du client
    presentation() {
        alert(`Bonjour, je suis ${this.nom}, vous pouvez me contacter sur ${this.email}. mon message est : ${this.message}.`);
    }
}

// Fonction déclenchée lors du clic sur "Envoyer"
document.getElementById("envoyer").addEventListener("click", (event) => {
    // Empêcher l'envoi du formulaire (comportement par défaut)
    event.preventDefault();

    // Récupération des valeurs du formulaire
    const nom = document.getElementById("name").value; 
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value; 

    // Validation basique (tous les champs doivent être remplis)
    if (!nom || !email || !message) {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    // Création de l'objet client
    const client = new Client(nom, email, message);

    // Appel de la méthode presentation() pour afficher les informations
    client.presentation();
});

//bouton dark
function toggleBackground() {
    const body = document.body;
    const button = document.querySelector('.toggle-btn');
    const sections = document.querySelectorAll('.section');

    // Vérifie la couleur actuelle et la bascule
    if (body.style.backgroundColor === 'black') {

        body.style.backgroundColor = '#402b47';
        body.style.color = 'black';


        sections.forEach(section => {
            section.style.backgroundColor = '#400443'; // Arrière-plan clair
            section.style.color = 'black'; // Texte noir
            section.style.border = '1px solid #ddd'; // Bordure claire
        });
        button.textContent = 'Dark Mode';
        button.classList.remove('dark-mode');
        button.classList.add('light-mode');
    } else {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        button.textContent = 'Light Mode';
        button.classList.remove('light-mode');
        button.classList.add('dark-mode');

        sections.forEach(section => {
            section.style.backgroundColor = 'black'; // Arrière-plan sombre
            section.style.color = 'white'; // Texte blanc
            section.style.border = '1px solid #555'; // Bordure sombre
        });

    }
}
