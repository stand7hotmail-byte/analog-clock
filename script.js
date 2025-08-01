
const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');
const dateDisplay = document.querySelector('[data-date-display]');

function setClock() {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}

function setDate() {
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    const dayOfWeek = dayNames[currentDate.getDay()];
    dateDisplay.textContent = `${year}/${month}/${day} (${dayOfWeek})`;
}

setInterval(setClock, 1000);

setClock();
setDate();
