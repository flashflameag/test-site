

var myHeading = document.querySelector('h1');

function setUserName() {
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Welcome to the Gallery, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Welcome to the Gallery, ' + storedName;
}

myButton.onclick = function() {
  setUserName();