const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let timerId = null;
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
startBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
        }, 1000);
    stopBtn.removeAttribute('disabled')
    startBtn.setAttribute('disabled', true);
});


stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
    startBtn.removeAttribute('disabled')
    stopBtn.setAttribute('disabled', true);
});

