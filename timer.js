// let dateInFuture = new Date(2026, 0, 1, 0, 0, 0);
let dateInFuture = new Date(2025, 5, 1, 0, 0, 0);

const timerElement = document.getElementById("timer");
const headerElement = document.getElementById("header");
headerElement.innerHTML = "До початку літа залишилося:";


function timer() {
  let date = new Date();
  let ms = dateInFuture - date;
  let days = Math.floor(ms / (1000 * 60 * 60 * 24));
  let hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((ms % (1000 * 60)) / 1000);
  timerElement.innerHTML = `Днів: ${days} Годин: ${hours} Секунд: ${seconds}`;
}

setInterval(timer, 1000);
