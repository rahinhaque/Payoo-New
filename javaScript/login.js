console.log("login done");

document.getElementById("login-btn").addEventListener("click", function (e) {
  //1- Get the mobile number input :
  const numberInput = document.getElementById("input-number");
  const contactNumber = numberInput.value;
  console.log(contactNumber);

  //2- get the pin number input :
  const passwordInput = document.getElementById("input-password");
  const pinNumber = passwordInput.value;
  console.log(pinNumber);

  //3 -match the pin and mobile number :
  if (contactNumber == "01234567890" && pinNumber == "1234") {
    //3.1 - if its true>>> Alert > Homepage :
    alert("Login succesfully");
  } else {
    //3.2 - if its FAlse>>> Alert > return to login page.. :
    alert("Login Failed! Please try again");
    return;
  }
});
