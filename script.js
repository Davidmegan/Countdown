function countdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const nextYear = currentYear + 1;
    document.getElementById('newYear').innerHTML = nextYear;
    const newYear = new Date(`January 1, ${nextYear} 00:00:00`).getTime();
    const currentTime = now.getTime();
    const remainingTime = newYear - currentTime;
  
    const seconds = Math.floor(remainingTime / 1000) % 60;
    const minutes = Math.floor(remainingTime / 1000 / 60) % 60;
    const hours = Math.floor(remainingTime / (1000 * 60 * 60)) % 24;
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    /* console.log(days, hours, minutes, seconds); */
  
    document.getElementById('days').innerHTML = days;
    document.getElementById('hrs').innerHTML = hours;
    document.getElementById('mins').innerHTML = minutes;
    document.getElementById('secs').innerHTML = seconds;

    /* console.log(now.getDate(),now.getMonth()); */
    if (now.getDate() == '1' && now.getMonth() == '0') {
        const gifElement = document.getElementById('gifImage');
        /* gifElement.src = 'newYear.gif' */;
        gifElement.classList.remove('hidden');
    }
  }
  
// Initial call to start the countdown
countdown();
  
// Update the countdown every second
const countdownInterval = setInterval(countdown, 1000);

// Stop the countdown for 1 day after New Year's wishes
setTimeout(() => {
    clearInterval(countdownInterval);
  }, 24 * 60 * 60 * 1000);

  