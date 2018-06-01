var wins=0;
var losses=0;
var targetScore;
var runningScore;
var crystalValues=[0, 0, 0, 0];

// Function for setting up a new game;
function newGame(){
    // Removing previous values from the runningScore and crystalValues
    runningScore =0;
    crystalValues=[0, 0, 0, 0];
    // Set targetScore to a random value between 19 and 120;
    targetScore= 19 + Math.floor(Math.random()* 102);
    // Set a random value to each crystal between 1 and 12;
    for(var i=0; i < crystalValues.length; i++){
        crystalValues[i] = 1 + Math.floor(Math.random()*12);
        // Check to make sure the new crystal value is unique;
        // if not unique, repeat the last index again;
        for(var j=0; j < i; j++){
            if( crystalValues[j] === crystalValues[i]) {
                i--;
                j +=4;
            }
        }
    }
    // Update these new Values onto the Webpage
    $("#runningScore").text(runningScore);
    $("#targetScore").text(targetScore);
    $("#wins").text(wins);
    $("#losses").text(losses);
}
$(document).ready(function(){
    newGame();
    $("img").click(function(){
        var crystal = $(this).attr("value");
        runningScore += crystalValues[crystal];
        $("#runningScore").text(" " + runningScore);
        if(runningScore > targetScore){
            losses++;
            $("#statusMessage").text("You Lose");
            newGame();
        }
        else if(runningScore === targetScore){
            wins++;
            $("#statusMessage").text("You Won!");
            newGame();
        }
        else {
            $("#statusMessage").text("Keep Collecting those Crystals!");
        }
    })
});
