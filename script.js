//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    const timerElement = document.getElementById('timer');

    function updateTimer() {
        const now = new Date();
        const formattedTime = now.toLocaleString();
        timerElement.textContent = formattedTime;
    }

    updateTimer(); // Initial call to display the time immediately

    setInterval(updateTimer, 1000); // Update the timer every second
});
