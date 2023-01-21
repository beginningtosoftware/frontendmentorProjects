//once the button is clicked then
//get email and validate email
let emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ;

let form = document.getElementById("form");
let button = document.getElementById("button");
//let p = document.getElementById("dynamicTest");
let p = document.createElement("p");
p.id = "dynamicElement";
form.appendChild(p);
button.addEventListener("click" , (e) => {
  let emailAdd = document.getElementById("email").value.toString();
  if(!emailRegex.test(emailAdd)){
    p.innerHTML = "Please provide a valid email";
    
  }
  else {
    p.innerHTML = "Email is Valid";
    
  }
  e.preventDefault();
  
});

