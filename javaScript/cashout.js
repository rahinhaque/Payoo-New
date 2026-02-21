document.getElementById("cashout-btn").addEventListener('click' , function(){
  //1 - Get the agent number and validate..
  const cashoutNumber = getValueFromInput("cashout-number");
  if(cashoutNumber.length !=11){
    alert("Invalid number");
    return;
  }
  //2 - Get the amount. validate , convert to number,
  const cashoutAmount = getValueFromInput("cashout-amount");
  //3 - Get the current balance. validate , convert to number
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log(balance);
    //4 - calculate new balance
    const newBalance = Number(balance) - Number(cashoutAmount);
    console.log(newBalance);
    if(newBalance<0){
      alert("Invalid amount");
      return;
    }
    const pin = getValueFromInput("cashout-pin");
    if(pin === "1234"){
      alert("Cashout Succesful");
      balanceElement.innerText = newBalance;
    }else{
      alert("Invalid Pin");
      return;
    }
})

// document.getElementById("cashout-btn").addEventListener("click", function (e) {
//   //1 - Get the agent number and validate..
//   const cashoutNumberInput = document.getElementById("cashout-number");
//   const cashoutNumber = cashoutNumberInput.value;
//   console.log(cashoutNumber);
//   if(cashoutNumber.length !=11){
//     alert("Invalid agent number");
//     return;
//   }
//   //2 - Get the amount. validate , convert to number,,
//   const cashoutAmountInput = document.getElementById("cashout-amount");
//   const cashoutAmount = cashoutAmountInput.value;
//   console.log(cashoutAmount);
//   //3 - Get the current balance. validate , convert to number
//   const balanceElement = document.getElementById("balance");
//   const balance = balanceElement.innerText;
//   console.log(balance);
//   //4 - calculate new balance
//   const newBalance = Number(balance) - Number(cashoutAmount);

//   if (newBalance < 0) {
//     alert("Invalid Amount");
//     return;
//   }
//   console.log(newBalance);
//   //5 - Get the pin and verify
//   const cashoutPinInput = document.getElementById("cashout-pin");
//   const cashoutPin = cashoutPinInput.value;
//   if (cashoutPin === "1234") {
//     //5.1 - true :: SHow and alert > set the new balance
//     alert("Cashout Succesful");
//     console.log(newBalance);
//     balanceElement.innerText = newBalance;
//   } else {
//     //5.2 - false :: Show an error alert > Return..
//     alert("Invalid Pin");
//     return;
//   }
// });
