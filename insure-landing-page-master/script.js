let hamburger = document.getElementById("hamburger-btn");
let closeIcon = document.getElementById("close-icon-btn");

hamburger.addEventListener("click", function (e) {

  let header = document.getElementsByClassName("header-wrapper")[0];
  let nav = document.getElementsByTagName("nav")[0]
    hamburger.style.display = "none";
    closeIcon.style.display = "block";
    header.style.height = "40vh";
    nav.style.display = "flex";
    console.log("hamburger running");
    
    return false;
  });
  closeIcon.addEventListener("click", function (e) {

    let header = document.getElementsByClassName("header-wrapper")[0];
    let nav = document.getElementsByTagName("nav")[0];
      hamburger.style.display = "block";
      closeIcon.style.display = "none";
      header.style.height = "auto";
      nav.style.display = "none";
      console.log("hamburger running");
      
      return false;
    });