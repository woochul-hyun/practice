const $control = document.querySelector('.control');
const $display = document.querySelector('.display');
let interval;

let numMillisecond = 0;
let numSecond = 0;
let numMinute = 0;

$control.onclick = function () {
  if ($control.innerHTML === 'Start') {
    interval = setInterval(() => {
      numMillisecond += 1;
      if (numMillisecond === 100) {
        numMillisecond = 0;
        numSecond += 1;
      }
      if (numSecond === 60) {
        numSecond = 0;
        numMinute += 1;
      }

      $display.innerHTML = `${
        numMinute < 10
          ? '0' + numMinute
          : numMinute === 0
            ? '00'
            : numMinute
      }:${
        numSecond < 10
          ? '0' + numSecond
          : numSecond === 0
            ? '00'
            : numSecond
      }:${
        numMillisecond < 10
          ? '0' + numMillisecond
          : numMillisecond === 0
            ? '00'
            : numMillisecond
      }`;
    }, 10);

    $control.innerHTML = 'Stop';
  } else {
    clearInterval(interval);
    $control.innerHTML = 'Start';
  }
};
