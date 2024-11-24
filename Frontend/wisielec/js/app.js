const passwords = [
    // KRAJE
    "POLSKA", 
    "NORWEGIA", 
    "SZWECJA", 
    "ROSJA", 
    "FRANCJA", 
    "SZWAJCARIA",
    "DANIA", 
    "CZECHY",
    "SŁOWACJA", 
    "SŁOWENIA", 
    "WĘGRY", 
    "NIEMCY", 
    "HOLANDIA", 
    "HISZPANIA", 
    "PORTUGALIA", 
    "BELGIA", 
    "WŁOCHY", 
    "GRECJA", 
    "FINLANDIA", 
    "AUSTRIA",

    // ZWIERZĘTA
    "KOŃ", 
    "LEW", 
    "MAŁPA", 
    "SMOK", 
    "RYBA", 
    "REKIN", 
    "SŁOŃ", 
    "ZEBRA", 
    "WILK", 
    "TYGRYS", 
    "SŁOŃ", 
    "KANGUR", 
    "ŻYRAFA", 
    "KOALA", 
    "PANDA", 
    "LIS",

    // POJAZDY
    "MOTOR", 
    "QUAD", 
    "CIĄGNIK", 
    "TIR", 
    "AUTOBUS", 
    "SAMOCHÓD", 
    "ROWER", 
    "SKUTER", 
    "MOTORÓWKA", 
    "HELIKOPTER",

    // WALUTY
    "ZŁOTY", 
    "EURO", 
    "DOLAR", 
    "FUNT", 
    "YEN", 
    "FRANK", 
    "KORONA", 
    "DOLAR KANADYJSKI", 
    "PESO", 
    "RUBEL",
];

function pickRandomWord() {
    const randomPassword = passwords[Math.floor(Math.random() * passwords.length)];
    return randomPassword;
}



//powiększenie obrazka
const svgElement = document.querySelector('#hanged--man svg');
svgElement.classList.add('scale-up');

const init = () => {
    let wordToGuess = pickRandomWord();
    let guessedLetters = [];
    let wrongLetters = [];
    let remainingAttemps = 12;
}

//arrayWithPasswords
//pickRandomWord 
//displayWord
//display HangedMan
//handleKeyPress
//checkGameStatus
//resetGame
