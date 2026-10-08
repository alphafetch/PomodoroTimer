// Get displayTime function - used for displaying the time given, to be consistent with DRY principles
import { displayTime } from './utils.js'

// Id used to call clearInterval when the stop button is clicked
var id = 0;
var breakCount = 0;

export function start(pomodoro, startButton, stopButton) {
    // Start the timer at 25m to start
    let timer = 1; // 1500s = 25m

    // Display the stop button
    startButton.style.display = 'none';
    stopButton.style.display = 'block';

    // Set a function to run every second that updates the value of the pomodoro timer
    id = setInterval(function () {
        // Use the displayTime function to avoid code duplication and improve readability
        displayTime(pomodoro, timer);

        /* 
            Decrement the timer and check if it is 0
            Then check the break count to see what break to initiate

            <4 Pomodoros:  Short break (5m)
            >=4 Pomodoros: Long break  (30m)
        */
        timer--;
        if (timer < 0) {
            stop(pomodoro, startButton, stopButton); 
            
            if (breakCount != 3) {
                shortBreak(pomodoro, startButton, stopButton); 
            } else {
                longBreak(pomodoro, startButton, stopButton);
            }
        }
    }, 1000);
}

function shortBreak(pomodoro, startButton, stopButton) {
    // Start the timer at 5m for a short break
    // Increase the break counter
    breakCount++;
    let timer = 2; // 300s = 5m

    // Ensure the stop button is displayed
    startButton.style.display = 'none';
    stopButton.style.display = 'block';

    // Set a function to run every second that updates the value of the pomodoro timer
    id = setInterval(function () {
        displayTime(pomodoro, timer);
        
        // Decrement the timer and check if it is 0
        timer--;
        if (timer < 0) { 
            stop(pomodoro, startButton, stopButton); 
            start(pomodoro, startButton, stopButton); 
        }
    }, 1000);
}

function longBreak(pomodoro, startButton, stopButton) {
    // Start the timer at 30m for an extended break (every four pomodoros)
    // Restart the break count so longBreak() doesn't loop
    breakCount = 0;
    let timer = 3; // 1800s = 5m

    // Ensure the stop button is displayed
    startButton.style.display = 'none';
    stopButton.style.display = 'block';

    // Set a function to run every second that updates the value of the pomodoro timer
    id = setInterval(function () {
        displayTime(pomodoro, timer);
        
        // Decrement the timer and check if it is 0
        timer--;
        if (timer < 0) { 
            stop(pomodoro, startButton, stopButton); 
            start(pomodoro, startButton, stopButton); 
            
        }
    }, 1000);
}

export function stop(pomodoro, startButton, stopButton) {
    pomodoro.textContent = '00:00';
    stopButton.style.display = 'none';
    startButton.style.display = 'block';
    clearInterval(id);
}