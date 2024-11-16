function renderSnowContainer() {
    const snowContainer = document.createElement('div');
    snowContainer.id = "snow__container";
    document.body.appendChild(snowContainer);
    return snowContainer;
}

const flakeImages = [
    './images/flake.png',
    './images/flake2.png',
    './images/flake3.png'
];

const maxFlakes = 50;
let currentFlakes = 0;

function renderFlake(snowContainer) {
    if (currentFlakes >= maxFlakes) {
        setTimeout(() => renderFlake(snowContainer), 400);  
        return;
    }

    const flakeContainer = document.createElement('div');
    flakeContainer.classList.add('flake__container');

    flakeContainer.style.left = `${Math.random() * 100}%`;

    flakeContainer.style.transform = `scale(${Math.random()})`;

    const img = document.createElement('img');
    img.src = flakeImages[Math.floor(Math.random() * flakeImages.length)];

    flakeContainer.appendChild(img);
    snowContainer.appendChild(flakeContainer);

    currentFlakes++;

    flakeContainer.addEventListener('animationend', () => {
        flakeContainer.remove();
        currentFlakes--;  
    });

    setTimeout(() => renderFlake(snowContainer), 400);
}

const snowContainer = renderSnowContainer();
renderFlake(snowContainer);