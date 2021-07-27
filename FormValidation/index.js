

 
 var emailValue =  document.getElementById("email").value;
 var numberValue = document.getElementById("number").value;
 var addressValue = document.getElementById("address").value;
 var counrtyValue = document.getElementById("counrty").value;
 var cityValue = document.getElementById("city").value;

 var button = document.getElementById("btn");
 var hide = document.getElementById("material");


function erroFor(){
        document.getElementById("email").style.border = "2px solid red";
         document.getElementById("number").style.border = "2px solid red";
         document.getElementById("address").style.border = "2px solid red";
         document.getElementById("counrty").style.border = "2px solid red";
         document.getElementById("city").style.border = "2px solid red";
        
    
    
        document.getElementById("email").classList.add("your-class");
        document.getElementById("email").placeholder = "Email cannot be blank";
        return true;

}
function setSuccessFor(){
    hide.style.visibility= "hidden";
    document.getElementById("email").style.border = "2px solid yellow";

}
form.addEventListener("submit", (e) => {
    e.preventDefault();

  });



 button.onclick = function checkInputs()
 {
  
    if (emailValue  === "") {
        erroFor(email);

 }else{
setSuccessFor(emailValue);

 }
 

 
}


  

  



function ValidateEmail(emailValue)
{
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(emailValue.match(mailformat))
{
alert("Valid email address!");
document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
return false;
}
}
