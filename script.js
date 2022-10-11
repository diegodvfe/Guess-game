'use strict';

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "🍧 Correct number";

// document.querySelector(".number").textContent = 13;
// document.querySelector (".score").textContent =10;

// document.querySelecto(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

// This a variable that we use random number that we can validate
let secretNumber = Math.trunc(Math.random()* 20) +1;

//  This is the value of the score that we can decrease the values in the html
let score = 20;

document.querySelector(".again").addEventListener("click", function() {
    const restart = Number(document.querySelector(".number").value)
    console.log(typeof restart);
    score = 20;
    secretNumber = Math.trunc(Math.random()* 20) + 3;

    document.querySelector(".message").textContent = "stat a new game";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = ""
    document.querySelector("body").style.backgroundColor = "#222"
    document.querySelector(".number").style.width = "20rem";

   
})

// Event handler function
document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess , typeof guess);


// when there is no input
    if ( !guess ){
        document.querySelector(".message").textContent = 
        " No Number";
      
        // when player is win
    } else if (guess === secretNumber) {
        document.querySelector(".message").textContent = " Correct Number"
        // document.querySelector(".number").textContent = secretNumber;
        
        document.querySelector("body").style.backgroundColor = "#60b347"
        document.querySelector(".number").style.width = "30rem";

        // when guess is to high
    } else if (guess > secretNumber) {

        if( score > 1){
            document.querySelector(".message").textContent = "📣 Too high"
            score --;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContet = "😵 You lost the game, start over"
            document.querySelector(".score").textContent = 0
        }

    } else if ( guess < secretNumber){

        if ( score > 1) {
            document.querySelector(".message").textContent = " image.png Too Low"
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = " You lost the game"
            document.querySelector( ".score").textContent = score--;
        }
    }
});



