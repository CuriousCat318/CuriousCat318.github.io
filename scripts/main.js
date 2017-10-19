var myImg = document.querySelector('img');
myImg.onclick = function(){
  var mySrc = myImg.getAttribute('src');
  if(mySrc === 'images/mozilla-icon.png'){
    myImg.setAttribute('src', 'images/firefox-icon2.png');
  }
  else{
    myImg.setAttribute('src', 'images/mozilla-icon.png');
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName(){
  var myName = prompt('Enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla rocks, '+myName;
}
if(!localStorage.getItem('name')){
  setUserName();
}
else{
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla rocks, '+storedName;
}
myButton.onclick = function(){
  setUserName();
}
