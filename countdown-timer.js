let minutes = 4;
let seconds = 60;

const logOutTimer = setInterval(() => {
  if (minutes !== 0) {
    seconds--;
    if (seconds < 0) {
      minutes--;
      seconds = 59;
      if (minutes === 0) {
        // Last countdown
        console.log(`Last countdown`);
        clearInterval(logOutTimer);
        setInterval(() => {
          if (seconds > 0) {
            seconds--;
            console.log(
              `${minutes >= 10 ? minutes : "0" + minutes}:${seconds >= 10 ? seconds : "0" + seconds}`,
            );
            if (seconds === 0) {
              console.log(`Time is over.`);
            }
          }
        }, 1000);
      }
    }
  }
  console.log(
    `${minutes >= 10 ? minutes : "0" + minutes}:${seconds >= 10 ? seconds : "0" + seconds}`,
  );
}, 1000);
