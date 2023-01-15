const loginForm = document.querySelector("#login-form");
const logininput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

function PaintGreeting(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginBtnSubmit(event) { 
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const userName = logininput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  PaintGreeting(userName);
} 


const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginBtnSubmit);
} else {
  // show the greetings
  PaintGreeting(savedUsername);
}

