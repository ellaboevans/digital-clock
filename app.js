// Selection of classes

const hour = document.querySelector("#hours");
const minute = document.querySelector("#minute");
const seconds = document.querySelector("#seconds");
const amorpm = document.querySelector("#amorpm");

// Display time function

function newTime() {
    // Date declaration goes here
    
  let date = new Date();
  let hourSpan = date.getHours() % 24;
  hourSpan = ("0" + hourSpan).slice(-2);
  let minuteSpan = date.getMinutes();
  minuteSpan = ("0" + minuteSpan).slice(-2);
  let secondsSpan = date.getSeconds();
  secondsSpan = ("0" + secondsSpan).slice(-2);

  // Connecting functions to the DOM

  hour.innerText = hourSpan;
  minute.innerText = minuteSpan;
  seconds.innerText = secondsSpan;

  //   Am or PM logic goes here

  let amorpmSpan;

  amorpmSpan = hourSpan >= 0 && hourSpan <= 11 ? "AM" : "PM";
  amorpm.innerText = amorpmSpan;

}
// Invoking function with setInterval

setInterval(newTime, 1000);
