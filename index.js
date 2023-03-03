// for(var i=0; i<=6; i++){
//     document.querySelectorAll("button")[i].addEventListener("click", handleClick);
// }


// function handleClick(){
//     alert("I got clicked");
// }

// var x = document.getElementById("myaudio1");

// function playaudio1(){
//     x.play();
// }

// var y = document.getElementById("myaudio2");

// function playaudio2(){
//     y.play();
// }

// var z = document.getElementById("myaudio3");

// function playaudio3(){
//     z.play();
// }

// var a = document.getElementById("myaudio4");

// function playaudio4(){
//     a.play();
// }

// var b = document.getElementById("myaudio5");

// function playaudio5(){
//     b.play();
// }

// var c = document.getElementById("myaudio6");

// function playaudio6(){
//     c.play();
// }

// var d = document.getElementById("myaudio7");

// function playaudio7(){
//     d.play();
// }



var allbuttons = document.querySelectorAll(".drum").length;
for(var i = 0; i<allbuttons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        
        makesound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
       
    });
}


document.addEventListener("keydown", function(event){
    makesound(event.key);
    buttonAnimation(event.key);
 
});

function makesound(key){
    switch(key){

        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-3.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;  
        default: console.log(buttonInnerHTML);
    }
}



function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}
