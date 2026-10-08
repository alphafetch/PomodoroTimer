// Get displayTime function - used for displaying the time given, to be consistent with DRY principles
import { displayTime } from './utils.js'

// Id used to call clearInterval when the stop button is clicked
var id = 0;
var breakCount = 0;

const pomodoroTime = 1500;  // 1500s = 25m
const shortBreakTime = 300; // 300s = 5m
const longBreakTime = 1800; // 1800s = 30m

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
                pomodoroBreak(disp, false); 
            } else {
                pomodoroBreak(disp, true);
            }
        }
    }, 1000);
}

// Universal break function, with long param. to assess whether to have an extended break or a short break
function pomodoroBreak(disp, long) {
    // Start the timer at 5m for a short break and 30m for an extended one
    // Increase the break counter or reset
    if (!long) { breakCount++; } else { breakCount = 0; }
    let timer = long ? longBreakTime : shortBreakTime;

    // Ensure the stop button is displayed
    disp.startBtn.style.display = 'none';
    disp.stopBtn.style.display = 'block';

    // Display the correct break time frame
    disp.timeFrame.textContent = long ? 'Extended break' : 'Short break';

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