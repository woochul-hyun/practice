const $toggleBtn = document.querySelector('.toggle');
$toggleBtn.onclick = function (e) {
  document.querySelector('.container').classList.toggle('active');
};
