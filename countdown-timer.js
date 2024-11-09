let minutes = 4;
let seconds = 60;

const logTime = () =>
  console.log(
    `${minutes >= 10 ? minutes : "0" + minutes}:${seconds >= 10 ? seconds : "0" + seconds}`,
  );

const countdownTimer = setInterval(() => {
  if (minutes !== 0) {
    seconds--;
    if (seconds < 0) {
      minutes--;
      seconds = 59;
      if (minutes === 0) {
        console.log(`Last countdown`);
        clearInterval(countdownTimer);
        setInterval(() => {
          if (seconds > 0) {
            seconds--;
            logTime();
            if (seconds === 0) {
              console.log(`Time is over.`);
            }
          }
        }, 1000);
      }
    }
  }
  logTime();
}, 1000);
