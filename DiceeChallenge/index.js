var randomNumber1 = 1;
var randomNumber2 = 1;
var player1Rolled = false;
var player2Rolled = false;

function rollDice1() {
    randomNumber1 = randomDiceNumber();
    // console.log(document.querySelector(".img1").attributes);
    setDiceImage(".img1", randomNumber1);
    player1Rolled = true;
    showResult();
}

function rollDice2() {
    randomNumber2 = randomDiceNumber();
    setDiceImage(".img2", randomNumber2);
    player2Rolled = true;
    showResult();
}

function setDiceImage(imageId, imageNum) {
    var image = "images/dice" + imageNum + ".png";
    document.querySelector(imageId).setAttribute("src", image);
}

function randomDiceNumber() {
    var randomNumber = Math.random() * 6;
    randomNumber = Math.floor(randomNumber) + 1;
    return randomNumber;
}

function showResult() {
    if (player1Rolled && player2Rolled) {
        var result = randomNumber1 > randomNumber2 ? "Player 1 Wins! 🚩" : ((randomNumber1 === randomNumber2) ? "Draw!" : "Player 2 Wins! 🚩");
        document.querySelector("h1").innerHTML = result;
        setTimeout(function() {
            resetGame(); 
        }, 1000);
    }
}

function resetGame() {
    player1Rolled = false;
    player2Rolled = false;
    var defaultImage = "images/dice6.png"
    document.querySelector(".img1").setAttribute("src", defaultImage);
    document.querySelector(".img2").setAttribute("src", defaultImage);
    document.querySelector("h1").innerHTML = "Refresh!";
}

