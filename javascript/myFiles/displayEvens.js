var displayEvens = document.forms["displayEvens"];
var startNum = document.getElementById("startNum");
var endNum = document.getElementById("endNum");
var stepNum = document.getElementById("stepNum");
var displayEvensButton = document.getElementById("displayEvensButton");
var evensResults = document.getElementById("evensResults");
var explanation = document.getElementById("explanation");
var numbers = document.getElementById("numbers");

function updateEvensResult(){

  // displayEvens.className = "needs-validation";

  // if (!displayEvens.checkValidity()) {
  //   displayEvens.className = "was-validated";
  //   return false;
  // }

  var start = parseInt(startNum.value, 10);
  var end = parseInt(endNum.value, 10);
  var step = parseInt(stepNum.value, 10);

  sol = [];

  for (var i = start; i <= end; i += step){
    if (i%2==0){
      sol.push(i);
    }
  }

  console.log(sol);

  evensResults.style.display = "block";
  explanation.innerText = "Here are the even numbers between " + start +  " and " + end + " by " + step + "'s:";

  console.log(explanation.innerText);

  var numbersText = "";

  for (var j = 0; j < sol.length; j++){
    numbersText += sol[j] + "\n";
  }

  numbers.innerText = numbersText;
  
  return false;
}