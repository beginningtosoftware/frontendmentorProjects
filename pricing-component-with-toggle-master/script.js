  
  let basic = document.getElementById("basic-price");
  let professional = document.getElementById("professional-price");
  let master = document.getElementById("master-price");
  let checkbox = document.getElementById("checkbox");
  let form = document.getElementById("form");
    form.addEventListener( "change", () => {
    if(checkbox.checked === true){
    basic.innerText = `$19.99`;
    professional.innerText = `$24.99`;
    master.innerText = `$39.99`;
    console.log(master.innerText);
    }
    else {
      basic.innerText = "$199.99";
      professional.innerText = "$249.99";;
      master.innerText = "$399.99";;
    }
   });
  console.log(master.innerText);
