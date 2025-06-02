let startTime;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

function updateDisplay() {
  const time = new Date(elapsedTime);
  const minutes = String(time.getUTCMinutes()).padStart(2, '0');
  const seconds = String(time.getUTCSeconds()).padStart(2, '0');
  const milliseconds = String(Math.floor(time.getUTCMilliseconds() / 10)).padStart(2, '0');
  document.getElementById('display').textContent = `${minutes}:${seconds}:${milliseconds}`;
}

function startStopwatch() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      updateDisplay();
    }, 10);
    isRunning = true;
  }
}

function pauseStopwatch() {
  if (isRunning) {
    clearInterval(timerInterval);
    isRunning = false;
  }
}

function resetStopwatch() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  updateDisplay();
  isRunning = false;
  document.getElementById('laps').innerHTML = '';
}

function recordLap() {
  if (isRunning) {
    const lapTime = document.getElementById('display').textContent;
    const lapList = document.getElementById('laps');
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${lapList.children.length + 1}: ${lapTime}`;
    lapList.appendChild(lapItem);
  }
}