// Id used to call clearInterval when the stop button is clicked
var id = 0;

export function start(pomodoro, startButton, stopButton) {
    // Start the timer at 25m to start
    let timer = 1500; // 1500s = 25m
    let mins, secs;

    // Display the stop button
    startButton.style.display = 'none';
    stopButton.style.display = 'block';

    // Set a function to run every second that updates the value of the pomodoro timer
    id = setInterval(function () {
        // Get the minutes from the timer by dividing by 60 amd the same for the seconds with modulus
        mins = parseInt(timer / 60);
        secs = parseInt(timer % 60);

        // Parse it into a string adding a '0' if it is a single digit
        mins = mins < 10 ? '0' + mins.toString() : mins.toString();
        secs = secs < 10 ? '0' + secs.toString() : secs.toString();

        // Display it onto the page
        pomodoro.textContent = `${mins}:${secs}`;

        // Decrement the timer and check if it is 0
        timer -= 1.0;
        if (timer < 0) { stop(pomodoro, startButton, stopButton); fiveMinuteBreak(pomodoro, startButton, stopButton); }
    }, 1000);
}

function fiveMinuteBreak(pomodoro, startButton, stopButton) {
    // Start the timer at 25m to start
    let timer = 300; // 300s = 5m
    let mins, secs;

    // Display the stop button
    startButton.style.display = 'none';
    stopButton.style.display = 'block';

    // Set a function to run every second that updates the value of the pomodoro timer
    id = setInterval(function () {
        // Get the minutes from the timer by dividing by 60 amd the same for the seconds with modulus
        mins = parseInt(timer / 60);
        secs = parseInt(timer % 60);

        // Parse it into a string adding a '0' if it is a single digit
        mins = mins < 10 ? '0' + mins.toString() : mins.toString();
        secs = secs < 10 ? '0' + secs.toString() : secs.toString();

        // Display it onto the page
        pomodoro.textContent = `${mins}:${secs}`;

        // Decrement the timer and check if it is 0
        timer -= 1.0;
        if (timer < 0) { stop(pomodoro, startButton, stopButton); start(pomodoro, startButton, stopButton); }
    }, 1000);
}

export function stop(pomodoro, startButton, stopButton) {
    pomodoro.textContent = '00:00';
    stopButton.style.display = 'none';
    startButton.style.display = 'block';
    clearInterval(id);
}