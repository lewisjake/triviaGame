$(document).ready(function(){
    var choices = [
        {
            question: "How many games are played in the regular season?",
            choices: [110, 150, 100, 162],
            correctAnswer: 162
        },
        {
            question: "The World Series is the championship Title in baseball, which team has won the most?",
            choices: ["Yankees", "Red Sox", "White Sox", "Tigers"],
            correctAnswer: "Yankees"
        },
        {
            question: "Arguably the most famous name in baseball, Bath Ruth's real name is?",
            choices: ["George Herman Ruth Jr.", "Hank Ruth", "Sandy Ruth", "George Brett Ruth"],
            correctAnswer: "George Herman Ruth Jr."
        },
        {
            question: "The highest number of wins in a single season ever recorded is?",
            choices: [110, 116, 98, 121],
            correctAnswer: 116
        },
        {
            question: "When a batter hits a single, double, triple, and homerun all in the same game this is called hitting for the: ",
            choices: ["Cycle", "Trifecta", "Triple Crown", "Perfection"],
            correctAnswer: "Cycle"
        },
        {
            question: "In 1970, pitch Doc Ellis claimed to have thrown a no-hitter while under the influence of what drug?",
            choices: ["LSD", "Cocaine", "Codine", "Marijuana"],
            correctAnswer: "LSD"
        },
        {
            question: "Pitcher Joel Zumaya missed three games in 2006 citing his injuring from playing this videogame: ",
            choices: ["Buck Hunter", "Guitar Hero", "Dance Dance Revolution", "Call of Duty"],
            correctAnswer: "Guitar Hero"
        }
    ];

    // initialization 
var holderArray = [];
var newArray = [];
var index;
var pick;
var questionCount = choices.length;
var userGuess = "";
var intervalId;
var timer = 30;
var running = false;
var correctCounter = 0;
var wrongCounter = 0;
var unansweredCounter = 0;

// have the user click the start button to play. hide the play again button until
// the game is over. hide the start button after it is clicked.
$("#reset").hide();
$("#start").on("click", function() {
    $("#start").hide();
    displayQuestion();
    runTimer();
    for (var i =0; i < choices.length; i ++) {
        holderArray.push(choices[i]);
    }
});

// start the timer
function runTimer(){
    if (!running) {
        intervalId = setInterval(decrement, 1000);
        running = true;
    }
}

// countdown
function decrement() {
    $("#timeLeft").html("<h3>Time remaining: " + timer + "</h3>");
    timer --;

    if (timer ===0) {
        unansweredCounter ++;
        stop(); 
        $("#answerblock").html("<p>Time is up! The correct answer is: " + pick.choices[pick.correctAnswer] + "</p>");
    }
}

// stop timer
function stop() {
    running = false;
    clearInterval(intervalId);
}

// have the app pick a question from the array and display to user. have the app
// loop through the possible answers
function displayQuestion() {
    index = Math.floor(Math.random() * choices.length);
    pick = choices[index];
    $("#gameQuestion").html("<h2>" + pick.question + "</h2>");
    for (var i = 0; i < pick.choices.length; i++) {
        var userChoice = $("<div>");
        userChoice.addClass("answerchoice");
        userChoice.html(pick.choices[i]);
        userChoice.attr("data-guessvalue" , i);
        $("#answer").append(userChoice);
    }

}


    
});


