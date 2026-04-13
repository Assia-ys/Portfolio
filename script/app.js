// Sélectionner le bouton hamburger et le menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.getElementById('nav-links');

// Ajouter un écouteur d'événement pour toggle le menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');

});

//------------------------------------------------bouton dark--------------------------------------------------//
function toggleBackground() {
    const body = document.body;
    const button = document.querySelector('.toggle-btn');

    // Bascule la classe CSS 'light-theme' sur le body
    body.classList.toggle('light-theme');

    if (body.classList.contains('light-theme')) {
        button.textContent = 'Dark Mode 🌙';
        button.classList.remove('dark-mode');
        button.classList.add('light-mode');
    } else {
        button.textContent = 'Light Mode ☀️';
        button.classList.remove('light-mode');
        button.classList.add('dark-mode');
    }
}

//------------------------------------------------Animations au défilement-------------------------------------//
document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1 // L'animation se déclenche quand 10% de l'élément est visible
    });

    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });
});
