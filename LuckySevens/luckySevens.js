var luckySevensForm = document.forms["luckySevensForm"];
var betAmount = document.getElementById("betAmount");
var playButton = document.getElementById("playButton");
var resultsDiv = document.getElementById("resultsDiv");

function playLuckySevens(){

  luckySevensForm.className = "needs-validation";

  if (!luckySevensForm.checkValidity()) {
    luckySevensForm.className = "was-validated";
    return false;
  }

  var bet = parseInt(betAmount.value, 10);

  // Alerts the player and returns if the bet entered is not positive.
  if (bet <= 0){
    alert("Your starting bet cannot be less than or equal to zero.")
    return false;
  }

  var gameMoney = bet;
  var roll = 0;
  var maxGameMoney = bet;
  var rollAtMax = 0;

  // Plays Lucky Sevens until the player has run out of money.
  while (gameMoney > 0){
    // Increments the value of the current roll.
    roll++;

    // Rolls two dice and sums the results.
    var diceTotal = rollDie(6) + rollDie(6);
    // If the total of the two dice is 7 add 4 to the gameMoney.
    if (diceTotal == 7){
      gameMoney += 4;
    }
    // Otherwise subtract 1.
    else {
      gameMoney--;
    }

    // Updates values of maxGameMoney and rollAtMax if the current gameMoney exceeds the previously recorded maximum.
    if (gameMoney > maxGameMoney){
      maxGameMoney = gameMoney;
      rollAtMax = roll;
    }
  }

  document.getElementById("startBetValue").innerText = "$" + bet;
  document.getElementById("totalRollsValue").innerText = "" + roll;
  document.getElementById("highestWonValue").innerText = "$" + maxGameMoney;
  document.getElementById("rollAtHighestWonValue").innerText = "" + rollAtMax;

  resultsDiv.style.display = "block";
  playButton.innerText = "Play Again";

  return false;
}

function rollDie(numSides){
  return Math.floor(Math.random() * numSides) + 1;
}