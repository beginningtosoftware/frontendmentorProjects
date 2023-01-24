let button = document.getElementById("btn");
let label = document.getElementsByClassName("label");
let emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ;





button.addEventListener("click", (e) => {
  let fname = document.getElementById("firstname");
  let lname = document.getElementById("lastname");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let p = document.getElementsByClassName("dynamicEle"); 
  let img = document.getElementsByClassName("error-icon")
  //creating object 
  let myObj = {fname, lname, email, password};
  let myObjkeys = Object.keys(myObj);
  let myObjValues = Object.values(myObj);
  
  console.log(myObjValues);
  for(let i = 0; i < myObjValues.length; i++){
    if(myObjValues[i].value.toString() == "" ){
      myObjValues[i].style.border = "1px solid red";
      img[i].style.visibility = "visible";
      p[i].innerText = myObjkeys[i] + " cannot be empty";
      p[i].style.color = "red";
      p[i].style.textAlign = "end";
      p[i].style.fontSize = "0.75rem";
      p[i].style.fontWeight = "500";
    }
  }
  if(!emailRegex.test(myObjValues[2])){
    document.getElementById("email").style.border = "1px solid red";
    p[2].innerText = "Looks like this is not an " + myObjkeys[2];
    myObjValues[2].placeholder = "email@example/com"
    myObjValues[2].style.color = "red";
    myObjValues[2].style.fontWeight = "500";
    myObjValues[2].style.fontSize = "0.75rem";
    p[2].style.color = "red";
    p[2].style.textAlign = "end";
    p[2].style.fontSize = "0.75rem";

  }
  e.preventDefault();
});