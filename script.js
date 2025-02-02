// script.js
function updateUTCTime() {
    const now = new Date();
    const utcString = now.toISOString().replace('T', ' ').slice(0, 19);
    document.getElementById('utcTime').textContent = utcString;
}

// Update time immediately and then every second
updateUTCTime();
setInterval(updateUTCTime, 1000);
