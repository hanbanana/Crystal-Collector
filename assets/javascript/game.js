$( document ).ready(function() {

    var randomNumber = Math.floor(Math.random() * 101 + 19);

    $('#randomNumber').text(randomNumber);

    var num1 = Math.floor(Math.random()* 11 + 1)
    var num2 = Math.floor(Math.random()* 11 + 1)
    var num3 = Math.floor(Math.random()* 11 + 1)
    var num4 = Math.floor(Math.random()* 11 + 1)

    var yourTotal = 0; 
    var wins = 0;
    var losses = 0;
    var youWon = "You Won!";
    var youLose = "You Lose!";
    var wonOrLose = "";
    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);

    function reset() {
        randomNumber = Math.floor(Math.random() * 101 + 19);
        $('#randomNumber').text(randomNumber);
        num1 = Math.floor(Math.random() * 11 + 1);
        num2 = Math.floor(Math.random() * 11 + 1);
        num3 = Math.floor(Math.random() * 11 + 1);
        num4 = Math.floor(Math.random() * 11 + 1);
        yourTotal = 0;
        $('#finalTotal').text(yourTotal);
    }

    function youWin() {
        $('#wonOrLose').text(youWon);
        wins++; 
        $('#numberWins').text(wins);
        reset();
    }

    function youLosses() {
        $('#wonOrLose').text(youLose);
        losses++;
        $('#numberLosses').text(losses);
        reset()
    }

    $('#one').on ('click', function(){
        $('#wonOrLose').text(wonOrLose);
        yourTotal = yourTotal + num1;
        $('#finalTotal').text(yourTotal); 
            if (yourTotal == randomNumber){
              youWin();
            }
            else if ( yourTotal > randomNumber){
              youLosses();
            }   
    })

    $('#two').on ('click', function() {
        $('#wonOrLose').text(wonOrLose);
        yourTotal = yourTotal + num2;
        $('#finalTotal').text(yourTotal);
            if(yourTotal == randomNumber) {
                youWin();
            }
            else if(yourTotal > randomNumber) {
                youLosses();
            }
    })

    $('#three').on ('click', function() {
        $('#wonOrLose').text(wonOrLose);
        yourTotal = yourTotal + num3;
        $('#finalTotal').text(yourTotal);
            if(yourTotal == randomNumber) {
                youWin();
            }
            else if(yourTotal > randomNumber) {
                youLosses();
            }
    })

    $('#four').on ('click', function() {
        $('#wonOrLose').text(wonOrLose);
        yourTotal = yourTotal + num4;
        $('#finalTotal').text(yourTotal);
            if(yourTotal == randomNumber) {
                youWin();
            }
            else if(yourTotal > randomNumber) {
                youLosses();
            }
    })

})