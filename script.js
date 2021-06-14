const daysEl = document.getElementById("dias");

const hoursEl = document.getElementById("horas");

const minutesEl = document.getElementById("minutos");

const secondsEl = document.getElementById("segundos");

const newYear = "1 jan 2022";

function countdown() {
  const currentDate = new Date();
  const newYearDate = new Date(newYear);

  const base = Math.floor((newYearDate - currentDate) / 1000);
  const second = Math.floor(base % 60);
  const minute = Math.floor(base / 60) % 60;
  const hour = Math.floor(base / 3600) % 24;
  const day = Math.floor(base / 3600 / 24);

  console.log(second, hour, minute, day);
  secondsEl.innerHTML = formatTime(second);
  minutesEl.innerHTML = formatTime(minute);
  hoursEl.innerHTML = formatTime(hour);
  daysEl.innerHTML = day;
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);
