function computerPlay(){
  var possiblePlays = [
    "Rock",
    "Paper",
    "Scissors"
  ]
  var randomNumber = Math.floor(Math.random()*possiblePlays.length);
  return possiblePlays[randomNumber]
}
function playerPlay(){
  var possiblePlays = [
    "ROCK",
    "PAPER",
    "SCISSORS"
  ]
  var playerChoice = prompt("Rock, Paper or Scissors?: ")
  while (possiblePlays.indexOf(playerChoice.toUpperCase()) == -1){
    alert("That is not one of the possible moves! Check your spelling")
    playerChoice = prompt("Rock, Paper or Scissors?: ")
  }
  return playerChoice;
}
function playRound (ComputerChoice, PlayerChoice) {
  var rockVSscissors = "Rock beats Scissors"
  var paperVSrock = "Paper beats Rock"
  var scissorsVSpaper = "Scissors beats Paper"
  var tie = ComputerChoice + " vs " + ComputerChoice
  var message;
  var outcome;

  if (ComputerChoice.toUpperCase() == "ROCK"){
    if (PlayerChoice.toUpperCase() == "SCISSORS") {
      message = rockVSscissors
      outcome = -1
    } else if (PlayerChoice.toUpperCase() == "PAPER") {
      message = paperVSrock
      outcome = 1
    } else {
      message =  tie
      outcome = 0
    }
  } else if (ComputerChoice.toUpperCase() == "PAPER") {
    if (PlayerChoice.toUpperCase() == "SCISSORS") {
       message = scissorsVSpaper
       outcome = 1
    } else if (PlayerChoice.toUpperCase() == "PAPER") {
      message = tie
      outcome = 0
    } else {
      message = paperVSrock
      outcome = -1
    }
  } else {
    if (PlayerChoice.toUpperCase() == "SCISSORS") {
       message = tie
       outcome = 0
    } else if (PlayerChoice.toUpperCase() == "PAPER") {
      message = scissorsVSpaper
      outcome = -1
    } else {
      message = rockVSscissors
      outcome = 1
    }
  }

  var result;

  if (outcome == 1) {
    result = "You win the round!"
  } else if (outcome == -1){
    result = "You lose the round!"
  } else {
    result = "Tied round!"
  }

  return [result + " " + message, outcome]
}
function game(){
  var gameData;
  var playerWins = 0;
  var computerWins = 0;
  for (i = 0; i < 5; i++){
    console.log("\nRound " + String(i+1))
    gameData = playRound(computerPlay(), playerPlay());
    console.log(gameData[0])
    if (gameData[1] == 1){
      playerWins ++;
    } else if (gameData[1] == -1){
      computerWins ++;
    }
    console.log("Player: " + playerWins + " - Computer: " + computerWins)
  }
  if (playerWins > computerWins) {
    console.log("You've won " + playerWins  +" to " + computerWins + "!");
  } else if (playerWins < computerWins){
    console.log("You've lost " + playerWins +" to " + computerWins + "!")
  } else {
    console.log("Tie: "+ playerWins +" to " + computerWins + ".")
  }

}
game()
