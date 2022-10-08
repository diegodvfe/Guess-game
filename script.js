'use strict';

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "🍧 Correct number";

// document.querySelector(".number").textContent = 13;
// document.querySelector (".score").textContent =10;

// document.querySelecto(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

const number = Math.trunc(Math.random()* 20) +1;

let score = 20;
document.querySelector(".number") = SecretNumber;
// Event handler function
document.querySelector(".check").addEventListener("click", function() {
    const guess = Number( document.querySelector(".guess").value);
    console.log(typeof guess)

    if ( !guess ){
        document.querySelector(".message").textContent = " No Number"
    } else if (guess === SecretNumber) {
        document.querySelector(".message").textContent = " Correct Number"
    } else if (guess >  SecretNumber) {
        document.querySelector(".message").textContent = "😵‍💫 Too high"
        score --;
        document.querySelector(".score").textContent = score;
    } else if ( guess < SecretNumber){
        document.querySelector(".message").textContent = " image.png Too Low"
        score --;
        document.querySelector(".score").textContent = score;
    }
});



