console.log("login done");

document.getElementById("login-btn")
  .addEventListener('click' , function(e){
    //1- Get the mobile number input
    const numberInput = document.getElementById("input-number");
    const contactNumber = numberInput.value;
    console.log(contactNumber);
    //2- get the pin number input
    //3 -match the pin and mobile number
    //3.1 - if its true>>> Alert > Homepage
    //3.2 - if its FAlse>>> Alert > return to login page..

    
  })