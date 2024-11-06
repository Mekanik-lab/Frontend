function findText () {
    const textElement = document.getElementById("text");
    console.log(textElement.textContent);
}

function changeText () {
    const changeText = document.getElementById("changeText")
    changeText.textContent = prompt("Na co chcesz zamienić teskt?");
}

function changeStyleOfDiv () {
    const myDiv = document.querySelector("#myDiv");
    myDiv.style.backgroundColor = "black";
    myDiv.style.color = "white";
}

function removeElementFromWebsite () {
    const paragraph = document.querySelector("#removeElementFromWebsite");
    
    if (paragraph) {
        paragraph.remove();
    }
}

function showTextFromUser () {
    const textFromUser = document.getElementById("input").value;
    document.write(textFromUser);
}
