/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let iconTop = document.getElementById("pinta1");
let iconBotton = document.getElementById("pinta2");

let pintas = ["♦", "♥", "♠", "♣"];
let numbers = ["0", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
iconBotton.style.transform = "rotate(180deg)";

let cardPinta = pintas[Math.floor(Math.random() * pintas.length)];

let cardNumber = numbers[Math.floor(Math.random() * numbers.length)];

if (cardPinta === pintas[0] || cardPinta === pintas[1]) {
  iconTop.style.color = "red";
  iconBotton.style.color = "red";
} else {
  iconTop.style.color = "black";
  iconBotton.style.color = "black";
}

document.getElementById("pinta1").innerHTML = cardPinta;
document.getElementById("pinta2").innerHTML = cardPinta;
document.getElementById("number").innerHTML = cardNumber;
