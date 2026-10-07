// Id used to call clearInterval when the stop button is clicked
var id = 0;

export function start(pomodoro, timeSeconds) {
    // Start the timer at 25m to start
    let timer = timeSeconds;
    let mins, secs;

    // Set a function to run every second that updates the value of the pomodoro timer
    id = setInterval(function () {
        mins = parseInt(timer / 60);
        secs = parseInt(timer % 60);

        mins = mins < 10 ? '0' + mins.toString() : mins.toString();
        secs = secs < 10 ? '0' + secs.toString() : secs.toString();

        pomodoro.textContent = `${mins}:${secs}`;

        timer -= 1.0;
        if (timer < 0) { clearInterval(id); }
    }, 1000);
}

export function stop(pomodoro) {
    pomodoro.textContent = '00:00';
    clearInterval(id);
}