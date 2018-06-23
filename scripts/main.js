var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/IMG-6610.JPG') {
      myImage.setAttribute ('src','images/IMG-6607.JPG');
    } else {
      myImage.setAttribute ('src','images/IMG-6610.JPG');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Well hello there, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Well hello there, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}