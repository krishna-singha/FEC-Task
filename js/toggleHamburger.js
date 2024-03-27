const navbar = document.getElementById('navbar');
const hamburgerMenu = document.getElementById('hamburger-menu');
const hamIcon = document.getElementById('hamburger-icon');

hamburgerMenu.addEventListener('click', () => {
    navbar.classList.toggle('active');
    if (hamIcon.classList.contains('fa-bars-staggered')) {
        hamIcon.classList.remove('fa-bars-staggered');
        hamIcon.classList.add('fa-xmark');
    }
    else {
        hamIcon.classList.remove('fa-xmark');
        hamIcon.classList.add('fa-bars-staggered');
    }
});

