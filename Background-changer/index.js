var colo = document.body;

//Colors array
let colors = ['blue', 'yellow', 'black', 'red', 'brown', 'orange','pink','white','green'];

//get a button from a html file
var button = document.getElementById('btn');

//add event listener which listen to a a click
button.addEventListener('click', function(){

    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    

    colo.style.background = randomColor;
})  



