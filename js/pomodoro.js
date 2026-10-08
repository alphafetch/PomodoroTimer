// Get displayTime function - used for displaying the time given, to be consistent with DRY principles
import { displayTime } from './utils.js'

// Id used to call clearInterval when the stop button is clicked
var id = 0;
var breakCount = 0;

const pomodoroTime = 1;  // 1500s = 25m
const shortBreakTime = 2; // 300s = 5m
const longBreakTime = 3; // 1800s = 30m

// Take an object to use instead of taking repeated elements
export function start(disp) {
    // Start the timer at 25m to start
    let timer = pomodoroTime;

    // Display the stop button
    disp.startBtn.style.display = 'none';
    disp.stopBtn.style.display = 'block';

    disp.timeFrame.textContent = 'Pomodoro'

    // Set a function to run every second that updates the value of the pomodoro timer
    id = setInterval(function () {
        // Use the displayTime function to avoid code duplication and improve readability
        displayTime(disp.timerElem, timer);

        /* 
            Decrement the timer and check if it is 0
            Then check the break count to see what break to initiate

            <4 Pomodoros:  Short break (5m)
            >=4 Pomodoros: Long break  (30m)
        */
        timer--;
        if (timer < 0) {
            stop(disp); 
            
            if (breakCount != 3) {
                shortBreak(disp); 
            } else {
                longBreak(disp);
            }
        }
    }, 1000);
}

function shortBreak(disp) {
    // Start the timer at 5m for a short break
    // Increase the break counter
    breakCount++;
    let timer = shortBreakTime;

    // Ensure the stop button is displayed
    disp.startBtn.style.display = 'none';
    disp.stopBtn.style.display = 'block';

    disp.timeFrame.textContent = 'Short break';

    // Set a function to run every second that updates the value of the pomodoro timer
    id = setInterval(function () {
        displayTime(disp.timerElem, timer);
        
        // Decrement the timer and check if it is 0
        timer--;
        if (timer < 0) { 
            stop(disp); 
            start(disp); 
        }
    }, 1000);
}

function longBreak(disp) {
    // Start the timer at 30m for an extended break (every four pomodoros)
    // Restart the break count so longBreak() doesn't loop
    breakCount = 0;
    let timer = longBreakTime;

    // Ensure the stop button is displayed
    disp.startBtn.style.display = 'none';
    disp.stopBtn.style.display = 'block';

    disp.timeFrame.textContent = 'Extended break';

    // Set a function to run every second that updates the value of the pomodoro timer
    id = setInterval(function () {
        displayTime(disp.timerElem, timer);
        
        // Decrement the timer and check if it is 0
        timer--;
        if (timer < 0) { 
            stop(disp); 
            start(disp); 
        }
    }, 1000);
}

export function stop(disp) {
    disp.timerElem.textContent = '00:00';
    disp.stopBtn.style.display = 'none';
    disp.startBtn.style.display = 'block';
    disp.timeFrame.textContent = 'Timer off';
    clearInterval(id);
}