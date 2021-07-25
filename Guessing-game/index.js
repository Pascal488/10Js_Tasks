var button = document.getElementById("btn");

let kupata = document.getElementById("core");

button.onclick = function(){
    var randomNumber = [Math.floor(Math.random() * 100)];
    var input = document.getElementById("input").value;

    if( input == randomNumber){
        alert(("You win a lucky number is " + randomNumber));
    }else if(input == ""){
        kupata.innerHTML = "Enter number to play a game";
    }
    else{
        kupata.innerHTML = ("The number was " +  randomNumber);;

    }
}

/*
=====================================================

var randomNumber = [Math.floor(Math.random() * 5)];

This line of code explained bellow and then applied above there..

===================================================

var randomNumber = Math.random(); // >>This generate auto number from zero to one
    
randomNumber = randomNumber * 5; // >>If it generate from zero to one now we are * by 5 to be generated up to 4

randomNumber = Math.floor(randomNumber);// >>Removing some decimal places to be really number(without decimal places)

*/