

// Detecting Button Press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll("button")[i].addEventListener("click", function () {
        
        var buttonInnerHTML = this.innerText;
        makeSound(buttonInnerHTML);

        buttonAnim(buttonInnerHTML);
        
    });    

}


// Detecting Keyboard Press
document.addEventListener("keypress", function (event) {
    
    makeSound(event.key);

    buttonAnim(event.key);

})


function makeSound(key) {

    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        
        case "a":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;

        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
    
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
    
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

             
        default: console.log(buttonInnerHTML);
    }
    
}


function buttonAnim(currentKey) {
    
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 150);
}