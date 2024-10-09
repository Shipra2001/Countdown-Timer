let timerInterval;
let timeLeftInSeconds;
let isPaused = false;

const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');
const timeDisplay = document.getElementById('time-display');

function updateDisplay(minutes, seconds) {
  timeDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
  if (!isPaused) {
    const minutesInput = parseInt(document.getElementById('minutes').value, 10);
    const secondsInput = parseInt(document.getElementById('seconds').value, 10);
    timeLeftInSeconds = minutesInput * 60 + secondsInput;
  }

  timerInterval = setInterval(() => {
    if (timeLeftInSeconds <= 0) {
      clearInterval(timerInterval);
      updateDisplay(0, 0);
    } else {
      timeLeftInSeconds--;
      const minutes = Math.floor(timeLeftInSeconds / 60);
      const seconds = timeLeftInSeconds % 60;
      updateDisplay(minutes, seconds);
    }
  }, 1000);

  isPaused = false;
}

function pauseTimer() {
  clearInterval(timerInterval);
  isPaused = true;
}

function resetTimer() {
  clearInterval(timerInterval);
  timeLeftInSeconds = 0;
  isPaused = false;
  updateDisplay(0, 0);
  document.getElementById('minutes').value = 0;
  document.getElementById('seconds').value = 0;
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
