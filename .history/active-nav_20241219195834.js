// document.addEventListener("DOMContentLoaded", function () {
//                 // Pobierz wszystkie linki w nawigacji
//                 const navLinks = document.querySelectorAll('nav a');

//                 // Funkcja dodająca klasę 'active' do klikniętego linku i usuwająca ją z innych
//                 function setActiveClass(event) {
//                     // Usuń klasę 'active' ze wszystkich linków
//                     navLinks.forEach(link => {
//                         link.classList.remove('active');
//                     });

//                     // Dodaj klasę 'active' do klikniętego linku
//                     event.currentTarget.classList.add('active');
//                 }

//                 // Dodaj nasłuchiwacz zdarzeń do każdego linku
//                 navLinks.forEach(link => {
//                     link.addEventListener('click', setActiveClass);
//                 });
//             });

document.addEventListener("DOMContentLoaded", function () {
    // Pobierz wszystkie linki i sekcje
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    const sections = document.querySelectorAll('section');

    // Funkcja do obsługi przewijania
    function scrollHandler() {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentSection) {
                link.classList.add('active');
            }
        });
    }

    // Dodaj listener do przewijania
    window.addEventListener('scroll', scrollHandler);

    // Funkcja dodająca klasę 'active' do klikniętego linku i usuwająca ją z innych
    function setActiveClass(event) {
        event.preventDefault(); // Zapobiegaj natychmiastowemu przejściu
        const targetId = event.currentTarget.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        const targetPosition = targetSection.offsetTop;

        // Płynne przewijanie do sekcji
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }

    // Dodaj nasłuchiwacze do każdego linku
    navLinks.forEach(link => {
        link.addEventListener('click', setActiveClass);
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');

    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navList.classList.toggle('active');
    });
});