

document.getElementById("add-money-btn").addEventListener('click' , function(){
  //1 - bank account get
  const bankAccount = getValueFromInput("add-money-bank");
  if(bankAccount == "Pick a Bank"){
    alert("Selet a bank ~!!");
    return;
  }

  //2 - Get bank account number:
  const accountNumber = getValueFromInput("add-money-number");
  if(accountNumber.length != 11){
    alert("Invalid Account number !");
    return;
  }

  //3 - AMount to add :
  const amount = getValueFromInput("add-money-amount");
  const newBalance = getBalance() + Number(amount);
  
  const pin = getValueFromInput("add-money-pin");
  if(pin === "1234"){
    alert("Money added succesfully");
    setBalance(newBalance);
  }else{
    alert("Invalid pin number!!");
    return;
  }
})