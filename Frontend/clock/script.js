function updateClock () {
    let today = new Date();

    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    let seconds = String(today.getSeconds()).padStart(2, "0");
    let minutes = String(today.getMinutes()).padStart(2, "0");
    let hours = String(today.getHours()).padStart(2, "0");

    document.getElementById("date").textContent = `${day}-${month}-${year}`;
    document.getElementById("time").textContent = `${hours}:${minutes}:${seconds}`;

    setTimeout(updateClock, 1000);
}

updateClock();