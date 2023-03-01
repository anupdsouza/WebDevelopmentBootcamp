var drumButtonsCount = document.querySelectorAll(".drum").length;

// adding event listeners to drum buttons
for(var i=0; i<drumButtonsCount; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        
        var drumButton = this.innerHTML;
        playSound(drumButton);
        animateButton(drumButton);
    });

}

// adding event listeners to key presses
document.addEventListener("keydown", function(event) {
    playSound(event.key);
    animateButton(event.key);
})

function playSound(input) {
    switch (input) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play()
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play()
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play()
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play()
            break;
        case "j":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play()
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play()
            break;
        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play()
            break;
        default:
            console.log("other key pressed");
            break;
    }
}

function animateButton(key) {
    var button = document.querySelector("." + key);
    button.classList.add("pressed");
    setTimeout(function(){
        button.classList.remove("pressed");
    }, 100);
}