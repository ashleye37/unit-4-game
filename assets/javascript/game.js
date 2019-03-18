$(document).ready (function() { 
    console.log("ready");
    //Generate a random number and assigns random values to crystals when the page loads. Also, autoset wins/losses to 0.
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
    
        setUpGame();
        playCrystals();

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

    function reset() {
        setUpGame();
        userTotal = 0;
        $("#displayScore").text(userTotal);
    };

});