function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const backgroundColorBody = document.querySelector('body');
console.log(stopBtn);
let timerId = null;

startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    backgroundColorBody.style.backgroundColor = `${getRandomHexColor()}`;
  }, 1000);
});
stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
});
