function rollDice(numSides) { 
  return Math.floor(Math.random() * numSides) + 1;
}

var numSides = prompt("How many sides do you want on your die boy????");

var rolls = prompt("And how many times should i roll it BOYY");

for (var i = 0; i < rolls; i++){
  console.log(rollDice(numSides));
}