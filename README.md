# Countdown-Timer
This is a functional countdown timer that allows users to input minutes and seconds, and then displays the countdown on the screen. The timer includes controls to start, pause, and reset the countdown.

Requirements:

Input Fields:
Provide two input fields where users can enter the number of minutes and seconds for the countdown.
Ensure that the minutes input can accept values from 0 and above, and the seconds input can accept values from 0 to 59.

Timer Display:
Display the remaining time in a MM:SS format. Update the display every second.
The timer should show 00:00 when it reaches zero.

Controls:
Start Button: Starts the countdown from the provided time. Use setInterval to update the display every second.
Pause Button: Pauses the countdown. The timer should be able to resume from where it was paused if the start button is clicked again.
Reset Button: Resets the countdown to 00:00 and stops the timer. The user should be able to re-enter new time values and start the countdown again.


Tasks:

HTML Setup:
Create an HTML file with:
Two input fields for minutes and seconds.
Three buttons for start, pause, and reset.
A display area for showing the countdown timer.

JavaScript Implementation:
Write JavaScript to handle:
Reading values from the input fields.
Starting the countdown using setInterval.
Updating the display every second.
Pausing the countdown using clearInterval and managing the paused state.
Resetting the timer to 00:00 and stopping the countdown.

Styling (Optional but recommended):
Style the timer and buttons to make the user interface clear and user-friendly.

Detailed Instructions:

Create the HTML Structure:
Define the layout with input fields, buttons, and a display area.

Implement JavaScript Logic:
Start Timer: When the start button is clicked, convert the input values into total seconds, and use setInterval to update the countdown every second.
Pause Timer: When the pause button is clicked, clear the interval using clearInterval and manage the paused state.
Reset Timer: When the reset button is clicked, clear the interval, reset the display to 00:00, and stop any ongoing countdown.

Test Functionality:
Ensure that the countdown correctly reflects the input time.
Verify that the start, pause, and reset functionalities work as expected.
Test edge cases, such as entering zero minutes and seconds.

Deliverables:
HTML File: Containing the necessary input fields, buttons, and display area.
JavaScript File: Implementing the countdown timer functionality, including start, pause, and reset logic.
CSS File (Optional): For styling the timer and controls to enhance user experience.
