const secondHand = document.querySelector(".sec-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

const now = new Date();
let sec = now.getSeconds();

function setDate() {
  sec++;

  const secDeg = (sec / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secDeg}deg)`;

  const min = now.getMinutes();
  const minDeg = (min / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minDeg}deg)`;
  console.log(min);

  const hour = now.getHours();
  const hourDeg = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(setDate, 1000);

setDate();
