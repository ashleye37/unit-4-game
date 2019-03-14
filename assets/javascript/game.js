    var randomNumber = 0;
    var playerScore = 0;
    
//Generate a random number when the page loads.
$("displayRndNum").text(randomNumber);
console.log (randomNumber);
//Generate a random value for each crystal when the page loads.
//On the click of any crystal, add specified amount to user's score.
//If player score = random number. Player wins, +1 to wins score and reset the game.
//If player score > random number. Player loses, +1 to losses score and reset the game.
//game resets everything back to null at page refresh.
