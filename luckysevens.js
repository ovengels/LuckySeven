function rollDice() {
  var startBet = Number(document.forms["myForm"]["startBet"].value);
  if (startBet <= 0) {
    alert ("It should be greater than zero");
    document.forms["myForm"]["startBet"].value = "";
    document.forms["myForm"]["startBet"];
    return false;
  }

  var numberArray = [startBet];
  var numberRoll = 0;
  for (var money = startBet; money >= 0; numberRoll++) {
    diceOne = Math.ceil(Math.random() * (6));
    diceTwo = Math.ceil(Math.random() * (6));
    if (Number (diceOne + diceTwo == 7)) {
      money += 4;
      numberArray[numberArray.length] = money;
    }
    else {
      money -=1;
      numberArray[numberArray.length] = money;
    }
  }
  var maxWin = 0;
  for (var index = 0; index < numberArray.length; index++){
    if (numberArray[index] > maxWin) {
      maxWin = numberArray[index];
    }
  }
  document.getElementById("results").style.display = "inline-block";
  document.getElementById("startGame").innerText = ("$" + startBet.toFixed(2));
  document.getElementById("totalRolls").innerText = numberRoll;
  document.getElementById("amountWon").innerText = ("$" + maxWin.toFixed(2));
  document.getElementById("highestWon").innerText = numberArray.indexOf(maxWin);
  document.getElementById("submitPlay").innerText = "Play Again";
  document.forms["myForm"]["startBet"];
  return false;
}
