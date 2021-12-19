let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/walle.jpg') {
      myImage.setAttribute('src', 'images/1.JPG');
    } else {
      myImage.setAttribute('src', 'images/walle.jpg');
    }
}
let myButton = document.querySelector('button');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('name', myName);
    myHeading.textContent = '欢迎：' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '欢迎：' + storedName;
  }
  myButton.onclick = function() {
   setUserName();
}