const $increase = document.querySelector('.increase');
const $decrease = document.querySelector('.decrease');
const $number = document.querySelector('.counter');

const Button = (function () {
  let num = 0;
  return {
    inc() {
      return ++num;
    },
    dec() {
      if (num === 0) return num;
      return --num;
    }
  };
}());

$increase.onclick = function () {
  $number.innerHTML = Button.inc();
};

$decrease.onclick = function () {
  $number.innerHTML = Button.dec();
};
