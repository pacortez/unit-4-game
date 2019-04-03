
var randomNumber;
var wins = 0;
var losses = 0;
var currentScore = 0;

var randomNumber = numberGenerator();

$("#random-number").text(randomNumber);

function numberGenerator() {
    return 19 + Math.ceil(Math.random() * 101);
}

function crystalNumber() {
    return Math.floor(Math.random() * 11) + 1;
}

$(".crystal-image").each(function() {
    $(this).attr("data-value", crystalNumber());
    
})            

$(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("data-value"));
    crystalValue = parseInt(crystalValue);
    currentScore += crystalValue;

        if (currentScore === randomNumber) {
            wins++;
            alert("You win!"); 
            reset();
        }

        else if (currentScore > randomNumber) {
            losses++;
            alert("You lose!");   
            reset();
        }

function reset() {
    randomNumber = numberGenerator();
    $("#random-number").text(randomNumber);
    currentScore = 0;
    $("#current-score").empty();
    $(".crystal-image").each(function() {
        $(this).attr("data-value", crystalNumber());
    });
}


$("#wins").text(wins);
$("#losses").text(losses);
$("#current-score").text(currentScore);


    











});