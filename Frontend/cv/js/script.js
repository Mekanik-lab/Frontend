// Funkcja do dodawania klasy 'visible' do sekcji po najechaniu
function handleMouseEnter(event) {
    const sections = event.target;
    sections.classList.add('visible');
}

// Dodanie nasłuchiwaczy zdarzeń na wszystkie sekcje
document.querySelectorAll('.container__section').forEach(sections => {
    sections.addEventListener('mouseenter', handleMouseEnter); // Po najechaniu
});

// Funkcja do usuwania klasy 'visible' ze wszystkich sekcji
function hideSections() {
    const sections = document.querySelectorAll('.container__section');
    
    sections.forEach(sections => {
        sections.classList.remove('visible');
    });
}

document.getElementById('clear--button').addEventListener('click', hideSections);