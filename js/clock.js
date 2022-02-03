const clockDigital = document.querySelector("#clock__digital");
const clockClassic = document.querySelector("#clock__classic");
const clockButton = document.getElementById("clockbtn");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  // const senconds = String(date.getSeconds()).padStart(2,"0");
  clockDigital.innerText = `${hours}:${minutes}`;
}

function Buttontoggle() {
  if (clockButton.value == "ON") {
    clockButton.value = "OFF";
    clockClassic.classList.remove(HIDDEN_CLASSNAME);
    clockDigital.classList.add(HIDDEN_CLASSNAME);
  } else if (clockButton.value == "OFF") {
    clockButton.value = "ON";
    clockDigital.classList.remove(HIDDEN_CLASSNAME);
    clockClassic.classList.add(HIDDEN_CLASSNAME);
  }
}

getClock();
setInterval(getClock, 1000);
