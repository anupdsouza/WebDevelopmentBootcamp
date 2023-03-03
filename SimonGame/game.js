var startingTitle = "Press any key to Start"
var gameOverTitle = "Failure! Press any key to Restart"
var gamePattern = []
var userClickedPattern = []
var buttonColors = ["red", "blue", "green", "yellow"]
var firstKeyPressed = false
var level = 0

function nextSequence() {
    // reset users selection for the next level
    userClickedPattern = []
    level++
    updateLevelInfo()

    var randomNumber = Math.floor(Math.random() * 4)
    var randomChosenColor = buttonColors[randomNumber]
    gamePattern.push(randomChosenColor)
    
    playSound(randomChosenColor)
    animatePress(randomChosenColor)
}

$(".btn").on("mousedown", function() {
    // level++
    // updateLevelInfo()
    var userChosenColor = $(this).attr("id")
    userClickedPattern.push(userChosenColor)

    playSound(userChosenColor)
    animatePress(userChosenColor)
    checkAnswer(userClickedPattern.length - 1)
})

$(document).keypress(function (event) {
    if (!firstKeyPressed) {
        startGame()
    }
})

function checkAnswer(currentLevel) {
    var userChosenColor = userClickedPattern[currentLevel]
    var gameChosenColor = gamePattern[currentLevel]
    if(userChosenColor === gameChosenColor) {
        console.log("Success")
        // check if user has completed his selections of the pattern
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
              nextSequence();
            }, 1000);
    
          }
    } else {
        console.log("Failure")
        animateWrongAnswer()
    }
}

function animateWrongAnswer() {
    playSound("") 
    $(".failedImage").css("visibility", "visible")
    $("#level-title").text(gameOverTitle);
    $("body").addClass("game-over")
    setTimeout(function(){
        $("body").removeClass("game-over")
        restartGame()
        $(".failedImage").css("visibility", "hidden")
    }, 3000)
}

function restartGame() {
    level = 0
    firstKeyPressed = false
    gamePattern = []
    userClickedPattern = []
}

function startGame() {
    level = 0
    firstKeyPressed = true
    $("#level-title").text("Level " + level);
    nextSequence()
}

function updateLevelInfo() {
    $("#level-title").text("Level " + level);
}

// visual feedback
function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed")
    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed")
    }, 100)
}

function playSound(input) {
    switch (input) {
        case "red":
            var sound = new Audio("sounds/red.mp3");
            sound.play()
            break;
        case "blue":
            var sound = new Audio("sounds/blue.mp3");
            sound.play()
            break;
        case "green":
            var sound = new Audio("sounds/green.mp3");
            sound.play()
            break;
        case "yellow":
            var sound = new Audio("sounds/yellow.mp3");
            sound.play()
            break;
        default:
            var sound = new Audio("sounds/EmotionalDamage.mp3");
            sound.play()
            break;
    }
}
