const userName = document.querySelector("#user-name");
const userNameInput = document.querySelector("#user-name input");
const userNameInputLabel = document.querySelector("#user-name label");
const greeting = document.querySelector("#greeting");
const greetingTime = document.querySelector("#greeting_time");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "inputUsername";

function UsernameAsk(event) {
  event.preventDefault();
  userName.classList.add(HIDDEN_CLASSNAME);
  userNameInput.classList.add(HIDDEN_CLASSNAME);
  userNameInputLabel.classList.add(HIDDEN_CLASSNAME);

  const inputUsername = userNameInput.value;
  localStorage.setItem(USERNAME_KEY, inputUsername);
  paintGreetings(inputUsername);
}

function hoursGreeting() {
  const date = new Date();
  const hours = date.getHours();

  if (hours < 12 && hours > 5) {
    greetingTime.innerText = "Good morning,";
  } else if (hours > 12 && hours < 18) {
    greetingTime.innerText = "Good afternoon,";
  } else if (hours > 18 && hours < 22) {
    greetingTime.innerText = "Good evening,";
  } else {
    greetingTime.innerText = "Good night,";
  }
}

function paintGreetings(inputUsername) {
  hoursGreeting();
  greeting.innerText = `${inputUsername}.`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greetingTime.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  userName.classList.remove(HIDDEN_CLASSNAME);
  userNameInput.classList.remove(HIDDEN_CLASSNAME);
  userNameInputLabel.classList.remove(HIDDEN_CLASSNAME);
  userName.addEventListener("submit", UsernameAsk);
} else {
  paintGreetings(savedUsername);
}

setInterval(hoursGreeting, 1000);
