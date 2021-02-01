var testArray = [];
var sum = 0;

for (var i = 0; i < 5; i++){
  testArray.push(parseInt(prompt("Choose a number")))
}

for (var position = 0; position < testArray.length; position++){
  sum += testArray[position];
}

console.log("The sum of " + testArray + " is: " + sum);