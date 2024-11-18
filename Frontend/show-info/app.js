const showBtn = document.querySelector('#show-Btn');
let currentInfoBox = 0;

const createInfoBox = () => {
    const infoBox = document.createElement('div');
    infoBox.id = 'info-box';
    infoBox.innerHTML = `
        <h1>Hello, it's me your button!</h1>
        <button type="button" id="close-Btn">&times;</button>`;
    return infoBox;
};

const createModal = () => {
    const modalContainer = document.createElement('div');
    modalContainer.id = 'modal';
    document.body.appendChild(modalContainer);

    const infoBox = createInfoBox();
    modalContainer.appendChild(infoBox);

    const closeBtn = infoBox.querySelector('#close-Btn');
    closeBtn.addEventListener('click', () => {
        infoBox.classList.add('out');
        infoBox.addEventListener('animationend', () => {
            modalContainer.remove();
            currentInfoBox = 0;
        });
    });

    modalContainer.addEventListener('click', (e) => {
        if (e.target === modalContainer) {
            infoBox.classList.add('out');
            infoBox.addEventListener('animationend', () => {
                modalContainer.remove();
                currentInfoBox = 0;
            });
        }
    });
};

showBtn.addEventListener('click', () => {
    if (currentInfoBox === 0) {
        createModal();
        currentInfoBox = 1;
    }
});
