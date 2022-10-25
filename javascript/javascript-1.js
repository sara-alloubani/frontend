function calc() {
  let firstNumber = document.getElementById("first-number");
  let secondNumber = document.getElementById("second-number");
  let result = document.getElementById("result");
  let opeSum = document.getElementById("sum");
  let opemin = document.getElementById("min");
  let opemult = document.getElementById("mult");

  let opediv = document.getElementById("div");


if(opeSum.checked){
    result.innerHTML = parseInt(firstNumber.value) + parseInt(secondNumber.value);

}
if(opemin.checked){
    result.innerHTML = parseInt(firstNumber.value) - parseInt(secondNumber.value);

}
if(opemult.checked){
  result.innerHTML = parseInt(firstNumber.value) * parseInt(secondNumber.value);

}

if(opediv.checked){
  result.innerHTML = parseInt(firstNumber.value) / parseInt(secondNumber.value);

}


}
