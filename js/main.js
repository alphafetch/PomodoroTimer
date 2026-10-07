import { start, stop } from './pomodoro.js'

const timerContainer = document.getElementById('timer-container');
const buttonContainer = document.getElementById('button-container');

// Inject the timer into the container starting at 00:00
const timer = document.createElement('p');
    timer.textContent = '00:00';
    // Add an id to the timer
    timer.id = 'timer';
// Append it to the container so it shows up on the webpage
timerContainer.appendChild(timer);

// Add a start button to allow the user to start the pomodoro
const startButton = document.createElement('button');
    startButton.textContent = 'Start';
    startButton.classList.add('btn');

    startButton.addEventListener('click', () => {
        start(timer, startButton, stopButton);
    });
buttonContainer.appendChild(startButton);

// Add a stop button replacing the start button when it is clicked, stopping the timer
const stopButton = document.createElement('button');
    stopButton.textContent = 'Stop';
    stopButton.classList.add('btn');
    // Hide the stop button to start
    stopButton.style.display = 'none';

    stopButton.addEventListener('click', () => {
        stop(timer, startButton, stopButton);
    });
buttonContainer.appendChild(stopButton);