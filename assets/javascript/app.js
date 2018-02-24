$(document).ready(function() {
// JavaScript for TIMER

function timer() {
  var counter = setInterval(sevenSeconds, 1000)
  function sevenSeconds () {
    if (counter === 0) {
        clearInterval(counter)
        alert("Time's Up!");
    }
    if (counter > 0) {
      counter--;
    }
    $(".counter").html(counter);
  } 
}

function resetGame() {
	questionCounter = 0;
	correctTally = 0;
	incorrectTally = 0;
	unansweredTally = 0;
	counter = 7;
	generateHTML();
	timerWrapper();
}


// JAVASCRIPT for Questions

        //   VARIABLES
        //   ==========================================================================
        //   The object questions for our quiz game.
          var questions = {
            q1: ["Ireland, Scotland, Australia, Wales and England are all countries where actors who played James Bond were born.", "t"],
            q2: ["Roger Moore was Knighted in 2003.", "t"],
            q3: ["Halle Berry and Kim Basinger are two Bond girls who won Oscars.", "t"],
            q4: ["Olympic silver medalist Harold Sakata played Odd Job in OctoPussy", "f"],
            q5: ["James Bond's favorite aperitif isVodka martini, shaken, not stirred.", "t"]
          };
          // We start the game with a score of 0.
          var score = 0;
          // Variable to hold the index of current question.
          var questionIndex = 0;
          // Array of questions.
          var questionsArray = [questions.q1, questions.q2, questions.q3, questions.q4, questions.q5];
          // FUNCTIONS
          // ==============================================================================
          // Function to render questions.
          function renderQuestion() {
            // If there are still more questions, render the next one.
            if (questionIndex <= (questionsArray.length - 1)) {
              document.querySelector("#question").innerHTML = questionsArray[questionIndex][0];
            }
            // If there aren't, render the end game screen.
            else {
              document.querySelector("#question").innerHTML = "Game Over!";
              document.querySelector("#score").innerHTML = "Final Score: " + score + " out of " + questionsArray.length;
            }
          }
          // Function that updates the score...
          function updateScore() {
            document.querySelector("#score").innerHTML = "Score: " + score;
          }
          // MAIN PROCESS
          // ==============================================================================
          // Calling functions to start the game.
          renderQuestion();
          updateScore();
          // When the user presses a key, it will run the following function...
          document.onkeyup = function(event) {
            
            // If there are no more questions, stop the function.
            if (questionIndex === questionsArray.length) {
              return;
            }
            
            // Determine which key was pressed, make it lowercase, and set it to the userInput variable.
            var userInput = String.fromCharCode(event.which).toLowerCase();
            
            
            // Only run this code if "t" or "f" were pressed.
            if (userInput === "t" || userInput === "f") {
              // If they guess the correct answer, increase and update score, alert them they got it right.
              if (userInput === questionsArray[questionIndex][1]) {
                alert("Correct!");
                score++;
                updateScore();
              }
              // If wrong, alert them they are wrong.
              else {
                alert("Wrong!");
              }
              // Increment the questionIndex variable and call the renderQuestion function.
              questionIndex++;
              renderQuestion();
            }
          }
        })