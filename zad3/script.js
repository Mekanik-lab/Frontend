//skrypt 1, 2

function sumAndAverage () {
    let firstNumber = prompt("Podaj pierwszą liczbę: ", 0);
    firstNumber = parseInt(firstNumber);
    let secondNumber = prompt("Podaj drugą liczbę: ", 0);
    secondNumber = parseInt(secondNumber);
    let thirdNumber = prompt("Podaj trzecią liczbę: ", 0);
    thirdNumber = parseInt(thirdNumber);

    document.write("Suma wprowadzonych liczb wynosi: " + (firstNumber + secondNumber + thirdNumber) + "<br>");
    document.write("Średnia arytmetyczna wynosi: " + ((firstNumber + secondNumber + thirdNumber)/3) + "<br>");
}

function sumAndDiffrenceAndProduct () {
    let firstNumber = prompt("Podaj pierwszą liczbę: ", 0);
    firstNumber = parseInt(firstNumber);
    let secondNumber = prompt("Podaj drugą liczbę: ", 0);
    secondNumber = parseInt(secondNumber);

    document.write("Suma: " + (firstNumber + secondNumber) + "<br>");
    document.write("Różnica: " + (firstNumber - secondNumber) + "<br>");
    document.write("Iloczyn: " + (firstNumber * secondNumber) + "<br>");
}

function rootFromNumber () {
    let numberFromUser = prompt("Podaj liczbę: ", 0);
    numberFromUser = parseInt(numberFromUser);
    document.write("Pierwiastek wynosi: " + Math.sqrt(numberFromUser));
}

function squareArea () {
    let numberFromUser = prompt("Podaj liczbę: ", 0);
    numberFromUser = parseInt(numberFromUser);
    document.write("Pole tego kwadratu wynosi: " + Math.pow(numberFromUser, 2));
}

function areaOfCuboid () {
    let firstNumber = prompt("Podaj bok a: ", 0);
    firstNumber = parseFloat(firstNumber);
    let secondNumber = prompt("Podaj bok b: ", 0);
    secondNumber = parseFloat(secondNumber);
    let thirdNumber = prompt("Podaj bok c: ", 0);
    thirdNumber = parseFloat(thirdNumber);

    areaOfCubo  = 2*firstNumber*secondNumber + 2*firstNumber*thirdNumber + 2*secondNumber*thirdNumber;
    document.write("Pole całkowite prostopadłościanu wynosi: " + areaOfCubo);
}

function areaAndCircuit () {
    let radiusFromUser = prompt("Podaj promień: ", 0);
    radiusFromUser = parseFloat(radiusFromUser);

    areaOfCircle = Math.PI * radiusFromUser;
    CircutOfCircle = 2 * Math.PI * radiusFromUser;

    document.write("Pole koła wynosi: " + areaOfCircle + "<br>");
    document.write("Obwód koła wynosi: " + CircutOfCircle);
}

function costOfTransportFromGdanskToSzczecin () {
    let costOfGasoline = prompt("Podaj cenę benzyny: ", 0);
    costOfGasoline = parseFloat(costOfGasoline);

    costOfTransport = costOfGasoline * 8 * (360/100)

    document.write("Cena przejazdu wynosi: " + costOfTransport);
}

function costOfTransportWithOwnParameters () {
    let costOfGasoline = prompt("Podaj cenę benzyny: ", 0);
    costOfGasoline = parseFloat(costOfGasoline);

   let lenghtOfRoute = prompt("Podaj  długość trasy: ", 0);
    lenghtOfRoute = parseFloat(lenghtOfRoute);

    let carFuelConsumptionValue = prompt("Podaj wartość spalania samochodu: ", 0);
    carFuelConsumptionValue = parseFloat(carFuelConsumptionValue);

    costOfTransport = costOfGasoline * carFuelConsumptionValue * (lenghtOfRoute/100);

    document.write("Koszt podrózy wyniesie: " + costOfTransport);
}

function profitFromDeposit () {
    let amountFromUser = prompt("Podaj kowtę: ", 0);
    amountFromUser = parseFloat(amountFromUser);

    const interest = 1.08;
    const beamTax = 0.19;

    let valueAfterYear = amountFromUser * interest;
    let grossProfit = valueAfterYear - amountFromUser;
    let tax = grossProfit * beamTax;
    let netProfit = grossProfit - tax;

    document.write("Zysk wynosi w [zł]: " + netProfit.toFixed(2));
}
