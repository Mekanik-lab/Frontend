//Funkcja blokująca przycisk / zmiana na disabled
function disableButton(buttonId) {
    const button = document.getElementById(buttonId);
    button.disabled = true;  
    button.addEventListener('click', () => {
        console.log('m');
    })
}

disableButton('letter-A');

