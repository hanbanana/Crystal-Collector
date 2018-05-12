$(document).ready(function () {

    var randomNumber = Math.floor(Math.random() * 101 + 19);

    $('#randomNummber').text(randomNumber);

    var num1 = Math.floor(Math.random() * 11 + 1);
    var num2 = Math.floor(Math.random() * 11 + 1);
    var num3 = Math.floor(Math.random() * 11 + 1);
    var num4 = Math.floor(Math.random() * 11 + 1);

    var yourTotal = 0;
    var wins = 0;
    var losses = 0;
    var youWon = "You Won!";
    var youLose = "You Lose!";
    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);

    function reset() {
        randomNumber = Math.floor(Math.random() * 101 + 19);
        $('#randomNummber').text(randomNumber);
        var num1 = Math.floor(Math.random() * 11 + 1);
        var num2 = Math.floor(Math.random() * 11 + 1);
        var num3 = Math.floor(Math.random() * 11 + 1);
        var num4 = Math.floor(Math.random() * 11 + 1);
        yourTotal = 0;
        $('#finalTotal').text(yourTotal);
    }

    function youWin() {
        $('#wonOrLose').text(youWon);
        winds++;
        $('#numberWins').text(wins);
        reset();
    }

    function youLose() {
        $('#wonOrLose').text(youLose);
        losses++;
        $('#numberlosses').text(losses);
        reset();
    }




})


