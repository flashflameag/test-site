var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Ashearrow.jpg') {
      myImage.setAttribute ('src','images/Ashearrow2.jpg');
    } else {
      myImage.setAttribute ('src','images/Ashearrow.jpg');
    }
}

// Personalized welcome message code
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
var page = myHeading.getAttribute('data-page');

function setUserName() {
  var myName = prompt('Welcome, Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Welcome to ' + page + ' #1 Ashearrow, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Welcome to ' + page + ' #1 Ashearrow, ' + storedName;
}

if(myButton) {
  myButton.onclick = function() {
    setUserName();
  }
}