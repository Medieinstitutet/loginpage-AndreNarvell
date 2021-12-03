//Function for creating textelements
function createTextElement(tagname, id, textContent, parentElement) {
  const el = document.createElement(tagname);
  el.setAttribute("id", id);
  el.textContent = textContent;
  parentElement.append(el);
  return el;
}

//Function for creating inputelements
function createInputElement(
  tagname,
  id,
  classList,
  type,
  parentElement,
  placeholderText
) {
  const el = document.createElement(tagname);
  el.setAttribute("id", id);
  el.setAttribute("class", classList);
  el.setAttribute("type", type);
  parentElement.append(el);
  el.placeholder = placeholderText;
  return el;
}

//Function that reloads the page and clears localStorage when logging out
function logout() {
  localStorage.clear();
  location.reload();
}

//Getting elements and setting un and pw
let username = "janne";
let password = "test";
let loginDiv = document.getElementById("loginDiv");
let loginBtn = document.getElementById("loginBtn");
let headerMain = document.getElementById("headerMain");
let statusText = document.getElementById("statusText");

//Getting loggedin true/false from LS
let loggedIn = localStorage.getItem("loggedIn");

//Text if loggedIn = true
let loggedInText = "Grattis, du är nu inloggad!🥳";

//Creating elements
let logoutBtn = document.createElement("BUTTON");
const usernameText = createTextElement(
  "p",
  "usernameP",
  "Användarnamn:",
  loginDiv
);
const usernameInput = createInputElement(
  "input",
  "usernameInput",
  "",
  "text",
  loginDiv,
  "Username"
);
const passwordText = createTextElement("p", "passwordP", "Lösenord:", loginDiv);
const passwordInput = createInputElement(
  "input",
  "passwordInput",
  "",
  "password",
  loginDiv,
  "Password"
);

//If loop for LS true
if (loggedIn === "true") {
  statusText.innerHTML = loggedInText;
  loginDiv.remove();
  logoutBtn.setAttribute("id", "logoutBtn");
  headerMain.appendChild(logoutBtn).innerText = "Logga ut";
  logoutBtn.addEventListener("click", logout);
}

//Check-function event for loginBtn
loginBtn.addEventListener("click", check);

//Getting username and password input
function check() {
  let userInput = document.getElementById("usernameInput").value;
  let passwordInput = document.getElementById("passwordInput").value;

  //If its true add loggedInText, removing inputfields and adding logoutBtn
  if (userInput === username && passwordInput === password) {
    console.log("Login successful");
    localStorage.setItem("loggedIn", true);
    localStorage.getItem("loggedIn");
    loginDiv.remove();
    statusText.innerHTML = loggedInText;
    logoutBtn.setAttribute("id", "logoutBtn");
    headerMain.appendChild(logoutBtn).innerText = "Logga ut";
    logoutBtn.addEventListener("click", logout);

    //If not, show error message
  } else {
    statusText.innerHTML =
      "Fel användarnamn eller lösenord. Var vänlig försök igen.🥺";
  }
}
