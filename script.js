"use strict";

// document.querySelector(".message").textContent = "Numero Corretto!";

// Definiamo il valore del numero segreto

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = document.querySelector(".score").textContent;
let currHighscore = Number(document.querySelector(".highscore").textContent);
// Il metodo Event Listener (addEventListener) si aspetta come primo parametro il tipo di evento (click, altro) e come secondo una funzione che è chiamata Event Handler
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value); // Storiamo il valore in una variabile e la convertiamo in numero
  console.log(document.querySelector(".guess").value); // CL del valore
  currHighscore = document.querySelector(".highscore").textContent;

  // LOGICA DEL GIOCO

  // No valid Input
  if (guess <= 0 || guess > 20) {
    document.querySelector(".message").textContent =
      "Valgono solo i numeri compresi tra 1 e 20";
    // Vittoria
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Numero Giusto!";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b060";
    document.querySelector(".number").style.width = "50%";
    let newHighscore = score;
    if (newHighscore > currHighscore) {
      document.querySelector(".highscore").textContent = newHighscore;
    }
    // Numero troppo ALTO
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Numero troppo alto";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Hai perso :(";
      document.querySelector(".score").textContent = 0;
    }
    // Numero troppo BASSO
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Numero troppo basso";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Hai perso :(";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = " Prova ad indovinare...";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
});
