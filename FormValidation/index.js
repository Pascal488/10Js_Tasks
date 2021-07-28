var emailValue = document.getElementById("email").value;
var numberValue = document.getElementById("number").value;
var addressValue = document.getElementById("address").value;
var countryValue = document.getElementById("country").value;
var cityValue = document.getElementById("city").value;

var email = document.getElementById("email");
var number = document.getElementById("number");
var country = document.getElementById("country");
var city = document.getElementById("city");
var address = document.getElementById("address");
var button = document.getElementById("btn");

function setErrorFor() {
  document.getElementById("email").style.border = "2px solid #db637b";
  document.getElementById("number").style.border = "2px solid #db637b";
  document.getElementById("address").style.border = "2px solid #db637b";
  document.getElementById("country").style.border = "2px solid #db637b";
  document.getElementById("city").style.border = "2px solid #db637b";
  document.getElementById("email").classList.add("your-class");
  document.getElementById("number").classList.add("your-class");
  document.getElementById("city").classList.add("your-class");
  document.getElementById("country").classList.add("your-class");
  document.getElementById("address").classList.add("your-class");

  document.getElementById("email").placeholder = "Email cannot be blank";
  document.getElementById("number").placeholder =
    "Phone number  cannot be blank";
  document.getElementById("country").placeholder =
    "Country name cannot be blank";
  document.getElementById("address").placeholder =
    "Address name cannot be blank";
  document.getElementById("city").placeholder =
    "City name cannot name be blank";
}
function setSuccessFor() {
  borderChanger();
}

function borderChanger() {
  email.style.border = "2px solid black";
  number.style.border = "2px solid black";
  city.style.border = "2px solid black";
  country.style.border = "2px solid black";
  address.style.border = "2px solid black";
}
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checker();
});

function checker() {
  const emailValue = email.value.trim();
  const numberValue = number.value.trim();
  const addressValue = address.value.trim();
  const cityValue = city.value.trim();
  const countryValue = country.value.trim();
  if (emailValue == "") {
    setErrorFor(email);
  } else {
    setSuccessFor(email);
  }

  if (numberValue === "") {
    setErrorFor(number);
  }

  if (addressValue === "") {
    setErrorFor(address);
  }

  if (cityValue === "") {
    setErrorFor(city);
  }

  if (countryValue === "") {
    setErrorFor(country);
  }
}
