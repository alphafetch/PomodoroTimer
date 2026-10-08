// Get pomodoro functions to run the timer
import { start, stop } from './pomodoro.js'

const timerContainer = document.getElementById('timer-container');
const buttonContainer = document.getElementById('button-container');

// Inject the timer into the container starting at 00:00
const timer = document.createElement('p');
    timer.textContent = '00:00';
    // Add an id to the timer
    timer.id = 'timer';
    // Change margins for better styling
    timer.style.marginBottom = '5px';
// Append it to the container so it shows up on the webpage
timerContainer.appendChild(timer);

const currentTimeFrame = document.createElement('p');
    currentTimeFrame.textContent = 'Timer off';
    // Change margins for better styling
    currentTimeFrame.style.margin = '0px';
    currentTimeFrame.style.marginBottom = '15px';
timerContainer.appendChild(currentTimeFrame);

// Add a start button to allow the user to start the pomodoro
const startButton = document.createElement('button');
    startButton.textContent = 'Start';
    startButton.classList.add('btn');
buttonContainer.appendChild(startButton);

// Add a stop button replacing the start button when it is clicked, stopping the timer
const stopButton = document.createElement('button');
    stopButton.textContent = 'Stop';
    stopButton.classList.add('btn');
    // Hide the stop button to start
    stopButton.style.display = 'none';
buttonContainer.appendChild(stopButton);

// Create object to hold display elements
const displayElems = {
    timerElem: timer,
    startBtn: startButton,
    stopBtn: stopButton,
    timeFrame: currentTimeFrame
};

// Add event listeners after creating the object, because otherwise,
// you wouldn't be able to call the functions with the object
stopButton.addEventListener('click', () => {
    stop(displayElems);
});
startButton.addEventListener('click', () => {
    start(displayElems);
});