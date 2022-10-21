const startBtnRef = document.querySelector('[data-start]');
const stopBtnRef = document.querySelector('[data-stop]');
let timerId = null;
startBtnRef.addEventListener('click', onStartBtnClick);
stopBtnRef.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  startBtnRef.disabled = true;
  setNextColor(getRandomHexColor());

  timerId = setInterval(() => {
    setNextColor(getRandomHexColor());
  }, 1000);
}

function onStopBtnClick() {
  startBtnRef.disabled = false;
  clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function setNextColor(color) {
  document.body.style.backgroundColor = color;
}

