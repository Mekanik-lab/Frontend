document.addEventListener('DOMContentLoaded', () => {
    // Tablica zdjęć (możesz dodać więcej URLi)
    const images = [
        'https://via.placeholder.com/300x200?text=Image+1',
        'https://via.placeholder.com/300x200?text=Image+2',
        'https://via.placeholder.com/300x200?text=Image+3',
        'https://via.placeholder.com/300x200?text=Image+4'
    ];

    // Kontener galerii
    const gallery = document.getElementById('gallery');

    // Funkcja do tworzenia HTML galerii
    function generateGallery(images) {
        gallery.innerHTML = ''; // Czyści zawartość galerii
        images.forEach(imageUrl => {
            const imgElement = document.createElement('img');
            imgElement.src = imageUrl;
            imgElement.alt = 'Galeria zdjęć';
            imgElement.addEventListener('click', () => openModal(imageUrl)); // Otwarcie modalu
            gallery.appendChild(imgElement);
        });
    }

    // Funkcja do otwierania modalu
    function openModal(imageUrl) {
        // Tworzymy overlay i zdjęcie w modalu
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');

        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        imgElement.id = 'overlay-img';

        const closeBtn = document.createElement('span');
        closeBtn.classList.add('close-btn');
        closeBtn.innerHTML = '&times;';
        closeBtn.addEventListener('click', () => closeModal(overlay)); // Zamknięcie modalu

        overlay.appendChild(closeBtn);
        overlay.appendChild(imgElement);

        // Dodajemy overlay do body
        document.body.appendChild(overlay);

        // Zamknięcie overlay po kliknięciu w overlay
        overlay.addEventListener('click', (event) => {
            if (event.target === overlay) {
                closeModal(overlay);
            }
        });
    }

    // Funkcja do zamknięcia modalu
    function closeModal(overlay) {
        overlay.remove(); // Usuwamy overlay z DOM-u
    }

    // Inicjalizuj galerię
    generateGallery(images);
});
