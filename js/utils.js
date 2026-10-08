// displayTime to display the given time to the page
export function displayTime(pomodoro, timer) {
    let mins, secs;

    // Get the minutes from the timer by dividing by 60 and the same for the seconds with modulus
    mins = parseInt(timer / 60);
    secs = parseInt(timer % 60);

    // Parse it into a string adding a '0' if it is a single digit
    mins = mins < 10 ? '0' + mins.toString() : mins.toString();
    secs = secs < 10 ? '0' + secs.toString() : secs.toString();

    // Display it onto the page
    pomodoro.textContent = `${mins}:${secs}`;
}