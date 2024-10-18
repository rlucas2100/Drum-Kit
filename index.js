let numberOfDrumButtons = document.querySelectorAll(".drum").length; 


// add event listener to all buttons
for (var i = 0; i<numberOfDrumButtons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function ()  {
        let audio = new Audio('sounds/tom-1.mp3');
        // audio object
        audio.play();
    });


}

let pie = ['blue', 'red', 'green'];

console.log(pie[0]);
console.log(pie[2]);


