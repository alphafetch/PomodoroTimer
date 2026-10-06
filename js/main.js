const timerContainer = document.getElementById('timer-container');

// Inject the timer into the container starting at 00:00
const timer = document.createElement('p');
    timer.textContent = '00:00';
    // Add attributes to the timer
    timer.id = 'timer';
// Append it to the container so it shows up on the webpage
timerContainer.appendChild(timer);