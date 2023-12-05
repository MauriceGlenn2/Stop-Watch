const timerMilliseconds = document.querySelector(".timer__milliseconds");
const timerSeconds = document.querySelector(".timer__seconds");
const timerMintues = document.querySelector(".timer__minutes");
//make it a global variable
let cancleId;
let startTime;
let savedTime = 0;

// Date.now()gives time in milliseconds form 1970
function startTimer() {
  //when we click start we want to save this time somewhere
  startTime = Date.now();

  //requestAnimationFrame(updateTimer); to updateTimer
  //need to call it twice, first time to start it
  //requestAnimationFrame(updateTimer) passes in a id that we can use to stop it, put in a global variable
  cancleId = requestAnimationFrame(updateTimer);
}

function stopTimer() {
  //savedtime is the time we started the timer
  //stopping the timer gives a diff value than whats shown we neend to add them both for acurate time
  savedTime = savedTime + Date.now() - startTime;

  //cancelAnimationFrame(updateTimer); to stopTimer
  //place cancleId in the cancelAnimationFrame
  cancelAnimationFrame(cancleId);
}

function resetTimer() {
  //reset the timer
  savedTime = 0;
 startTime = Date.now();
  //reset the timer
  timerMilliseconds.innerHTML = "000";
  timerSeconds.innerHTML = "00";
  timerMintues.innerHTML = "00";
}

//use a function to update date.now() every milsecond
function updateTimer() {
  //updates conlsole every milsecond
  let millisElapsed = savedTime + Date.now() - startTime;
  let secondsElapsed = millisElapsed / 1000;
  let minutesElapsed = secondsElapsed / 60;
  //gives us the seconds

  let mintuesText = Math.floor(minutesElapsed);
  let secondsText = Math.floor(secondsElapsed % 60);
  let millIsText = Math.floor(millisElapsed % 1000);
  //convert to a string to check the digits length
  //if 1 digit add 0 or 00 in front
  if (millIsText.toString().length < 3) {
    millIsText = millIsText.toString().padStart(3, "0");
    //padStart(3, "0"); //padStart(3, "0") means 3 digits and add 0 in front, only works on strings
  }

  if (secondsText.toString().length === 1) {
    secondsText = "0" + secondsText;
  }

  if (mintuesText.toString().length === 1) {
    mintuesText = "0" + mintuesText;
  }

  timerMilliseconds.innerHTML = millIsText;
  timerSeconds.innerHTML = secondsText;
  timerMintues.innerHTML = mintuesText;

  // in the function we want to loop over infinite times
  cancleId = requestAnimationFrame(updateTimer);
}
