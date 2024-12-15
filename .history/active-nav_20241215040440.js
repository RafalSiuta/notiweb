document.addEventListener("DOMContentLoaded", function () {
                // Pobierz wszystkie linki w nawigacji
                const navLinks = document.querySelectorAll('nav a');

                // Funkcja dodająca klasę 'active' do klikniętego linku i usuwająca ją z innych
                function setActiveClass(event) {
                    // Usuń klasę 'active' ze wszystkich linków
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                    });

                    // Dodaj klasę 'active' do klikniętego linku
                    event.currentTarget.classList.add('active');
                }

                // Dodaj nasłuchiwacz zdarzeń do każdego linku
                navLinks.forEach(link => {
                    link.addEventListener('click', setActiveClass);
                });
            });