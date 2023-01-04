function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const DELAY = 1000;
const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let intervalId = null;

startBtn.addEventListener('click',(e) => {
  const button = e.target;
  button.disabled = true;
  intervalId = setInterval(function(){
    body.style.backgroundColor = getRandomHexColor();
  },DELAY);
});

stopBtn.addEventListener('click',(e) => {
  clearInterval(intervalId);
  startBtn.disabled = false;
});