$(document).ready (function() { 
    
    //All global variables to be used for game.
        var userTotal= 0;
        var wins = 0;
        var losses = 0;
        var randomNumber;
        var crystal1;
        var crystal2;
        var crystal3;
        var crystal4;
        var min = 19;
        var max = 129;
        var crystalMin = 1;
        var crystalMax = 12;
    
    //Functions running for crystal game.
        setUpGame();
        playCrystals();
    
    //Function that will set up all the randomly generated numbers for the game.
    function setUpGame() {
        randomNumber= Math.floor(Math.random() * (max - min) + min);
        $("#displayRndNum").text(randomNumber);
        
        crystal1 = Math.floor(Math.random() * (crystalMax - crystalMin) + crystalMin);
        crystal2 = Math.floor(Math.random() * (crystalMax - crystalMin) + crystalMin);
        crystal3 = Math.floor(Math.random() * (crystalMax - crystalMin) + crystalMin);
        crystal4 = Math.floor(Math.random() * (crystalMax - crystalMin) + crystalMin);

        $("#displayWin").text(wins);
        $("#displayLosses").text(losses);
    };

    //Function that will add random crystal value to player's score and display a custom alert of the crystal point value.
    function playCrystals() {
        $("#purple-crystal").on("click", function() {
            $(".alert-dark").hide();
            $(".alert-dark").text("The purple crystal = " + crystal1 + " points!");
            $(".alert-dark").show();
            userTotal = userTotal + crystal1;
            $("#displayScore").text(userTotal);
            checkForWin();
            checkForLoss();
        });

        $("#green-crystal").on("click", function() {
            $(".alert-dark").hide();
            $(".alert-dark").text("The green crystal = " + crystal2 + " points!");
            $(".alert-dark").show();
            userTotal = userTotal + crystal2;
            $("#displayScore").text(userTotal);
            checkForWin();
            checkForLoss();
        });

        $("#diamond-crystal").on("click", function() {
            $(".alert-dark").hide();
            $(".alert-dark").text("The diamond crystal = " + crystal3 + " points!");
            $(".alert-dark").show();
            userTotal = userTotal + crystal3;
            $("#displayScore").text(userTotal);
            checkForWin();
            checkForLoss();
        });

        $("#blue-crystal").on("click", function() {
            $(".alert-dark").hide();
            $(".alert-dark").text("The blue crystal = " + crystal4 + " points!");
            $(".alert-dark").show();
            userTotal = userTotal + crystal4;
            $("#displayScore").text(userTotal);
            checkForWin();
            checkForLoss();
        });
    };

    //Function that runs to check for a win as the player uses the game.
    function checkForWin() {
        if (userTotal === randomNumber) {
            $(".alert-dark").hide();
            $(".alert-primary").show();
            $(".close").on("click", function() {
                $(".alert-primary").hide();
                wins++;
                $("#displayWin").text(wins);
                reset();
            });
        };
    };
    
    //Function that runs to check for a loss as the player uses the game.
    function checkForLoss() {
        if (userTotal > randomNumber) {
            $(".alert-dark").hide();
            $(".alert-secondary").show();
            $(".close").on("click", function() {
                $(".alert-secondary").hide();
                losses++;
                $("#displayLosses").text(losses);
                reset();
            });
        };
    };
    //Function that will reset the game so that the player can play again without having to refresh the page and will continue to keep track of their wins and losses.
    function reset() {
        setUpGame();
        userTotal = 0;
        $("#displayScore").text(userTotal);
    };

});