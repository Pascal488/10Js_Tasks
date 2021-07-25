var buttonPlus = document.getElementById("addBtn");

var buttonMinus = document.getElementById("removeBtn");

var onesha = document.getElementById("counter");

var add = 0;

var remove = 0;


buttonPlus.onclick = function(){

   add = add + 1;



   onesha.innerHTML =  add;

}

buttonMinus.onclick = function(){

    remove = onesha.innerHTML - 1 ;

   onesha.innerHTML = remove;

   


}