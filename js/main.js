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
        
    });
buttonContainer.appendChild(startButton);