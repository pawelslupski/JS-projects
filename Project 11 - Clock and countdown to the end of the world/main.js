const startBtn = document.querySelector('button.main');
const resetBtn = document.querySelector('button.reset');
const div = document.querySelector('div.time');

let currentTime = 0.00;
let index = 0;

const timer = () => {
    if (startBtn.textContent === 'Start') {
        startBtn.textContent = 'Pause';
        index = setInterval(() => {
            currentTime += 0.01;
            div.textContent = currentTime.toFixed(2);
        }, 10);
    } else {
        startBtn.textContent = "Start";
        clearInterval(index);
    }
}

const reset = () => {
    startBtn.textContent = "Start";
    clearInterval(index);
    currentTime = 0.00;
    div.textContent = currentTime.toFixed(2);
}

startBtn.addEventListener('click', timer);
resetBtn.addEventListener('click', reset);