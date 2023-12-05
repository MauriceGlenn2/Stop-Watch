const timerMilliseconds = document.querySelector(".timer__milliseconds");
const timerSeconds = document.querySelector(".timer__seconds");
const timerMintues = document.querySelector(".timer__minutes");

//make it a global variable
let cancleId;
let startTime;
// Date.now()gives time in milliseconds form 1970
function startTimer() {
  //when we click start we want to save this time somewhere
  startTime = Date.now();
  console.log(startTime);

  //requestAnimationFrame(updateTimer); to updateTimer
  //need to call it twice, first time to start it
  //requestAnimationFrame(updateTimer) passes in a id that we can use to stop it, put in a global variable
  cancleId = requestAnimationFrame(updateTimer);
}

function stopTimer() {
  console.log("@@");

  //cancelAnimationFrame(updateTimer); to stopTimer
  //place cancleId in the cancelAnimationFrame
  cancelAnimationFrame(cancleId);
}

function resetTimer() {
  console.log("@@");
}

//use a function to update date.now() every milsecond
function updateTimer() {
  //updates conlsole every milsecond
  let millisElapsed = Date.now() - startTime;
  let secondsElapsed = millisElapsed / 1000;
  let minutesElapsed = secondsElapsed / 60;
  //gives us the seconds
 
  timerMilliseconds.innerHTML = millisElapsed % 1000;

  timerSeconds.innerHTML = Math.floor(secondsElapsed);//math.floor() rounds down
  timerMintues.innerHTML = Math.floor(minutesElapsed);
  // in the function we want to loop over infinite times
  cancleId = requestAnimationFrame(updateTimer);
}
