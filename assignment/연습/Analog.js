let now = new Date();
let hour = now.getHours();
let min = now.getMinutes();
let sec = now.getSeconds();

let secondDeg = sec * 6;
let minDeg = min * 6 + (sec * 6) / 60;
let hourDeg = (hour > 12 ? hour - 12 : hour) * 30 + minDeg / 12;

const $digitalClock = document.querySelector('.digital-clock');
const $second = document.querySelector('.second');
const $minute = document.querySelector('.minute');
const $hour = document.querySelector('.hour');

$second.style.transform = `rotate( ${secondDeg}deg)`;
$minute.style.transform = `rotate( ${minDeg}deg)`;
$hour.style.transform = `rotate( ${hourDeg}deg)`;
$digitalClock.innerHTML = `${hour}:${min}:${sec}`;

setInterval(() => {
  now = new Date();
  hour = now.getHours();
  min = now.getMinutes();
  sec = now.getSeconds();

  secondDeg = sec * 6;
  minDeg = min * 6 + (sec * 6) / 60;
  hourDeg = (hour > 12 ? hour - 12 : hour) * 30 + minDeg / 12;

  if (secondDeg === 360) {
    secondDeg = 0;
  }

  if (minDeg === 360) {
    minDeg = 0;
  }

  if (hourDeg === 360) {
    hourDeg = 0;
  }
  $second.style.transform = `rotate( ${secondDeg}deg)`;
  $minute.style.transform = `rotate( ${minDeg}deg)`;
  $hour.style.transform = `rotate( ${hourDeg}deg)`;
  $digitalClock.innerHTML = `${hour}:${min}:${sec}`;
}, 1000);
