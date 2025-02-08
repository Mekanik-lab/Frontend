function updateTime() {
    const currentTime = new Date();
    document.getElementById('currentTime').textContent = currentTime.toLocaleTimeString();
};

function updateLastModified() {
    const lastModified = new Date(document.lastModified);
    document.getElementById('lastModified').textContent = lastModified.toLocaleString();
};

setInterval(updateTime, 1000);
updateLastModified();
