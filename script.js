// function displayClock() {
//     var clock = document.getElementById("clock");
//     // var numbers = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11","12"];
//     var hand = document.querySelector(".hand");
//     var rotation = 0;
//     var timerID;

//     function startRotation() {
//       timerID = setInterval(rotateClock, 1000);
//     }

//     // function rotateClock() {
//     //   rotation += 30; // Rotate by 30 degrees (30 * 12 = 360)
//     //   clock.innerHTML = numbers[rotation / 30];
//     //   hand.style.transform = "translate(-50%, 0) rotate(" + rotation + "deg)";
//     // }

//     // function resetClock() {
//     //   rotation = 0;
//     //   clearInterval(timerID);
//     //   clock.innerHTML = "12";
//     //   hand.style.transform = "translate(-50%, 0) rotate(0deg)";
//     // }

//     // startRotation();

//     // Reset the clock on button click
//     var resetButton = document.getElementById("reset-button");
//     resetButton.addEventListener("click", resetClock);
//   }

//   displayClock();

let secHand = document.querySelector(".sec-hand");
let minHand = document.querySelector(".min-hand");
let hourHand = document.querySelector(".hour-hand");

function setTime() {
  let time = new Date();
  // console.log(time)
  let seconds = time.getSeconds();
  let secDeg = (seconds / 60) * 360;
  secHand.style.transform = `rotate(${secDeg}deg)`;

  let min = time.getMinutes();
  let minDeg = (min / 60) * 360 + (seconds / 60) * 6;
  minHand.style.transform = `rotate(${minDeg}deg)`;

  let hour = time.getHours();
  let hourDeg = (hour / 12) * 360 + (min / 30) * 6;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(setTime, 1000);
setTime();
