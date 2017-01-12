"use strict";

var min = 0;
var max = 100;
var randomNum;

function getRandom (min, max) {
  var floating = Math.random() * (max - min) + min;
  return Math.floor(floating);
}

function showResponse(response1) {
  document.querySelector('div.response').innerHTML = response1;
}

function getGuess() {
  return document.querySelector('input').value;
}

function clearGuess() {
  document.querySelector('input').value = "";
}

function checkGuess() {
  var guess = getGuess();
  guess = Number.parseFloat(guess);
  if (isNaN(guess)) {
    return "Nope. Not a number";
  }
  if (guess < randomNum) {
    return "Nope.  Too low."
  }
  if (guess > randomNum) {
    return "Nope.  Too high."
  }
  return "WOOT!  You got it!"
}

function onGuessCheck() {
  var response3 = checkGuess();
  showResponse(response3);
  return false; // estops the form's default refreshing
}

function displayMessage() {
  var msg = "Guess the number between \n" + min + " & " + max;
  document.querySelector('h3').innerHTML = msg;
}

function onPageLoad() {
  clearGuess();
  displayMessage();
  randomNum = getRandom(min, max);
  console.log(randomNum);
}

document.querySelector('button').onclick = onGuessCheck;
window.onload = onPageLoad;
