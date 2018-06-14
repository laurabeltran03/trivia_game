function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
new Question ("One early type of bicycle was known for its huge front wheel. What was this vehicle called?", ["An ordinary bicycle",
     "A ten-speed bicycle", "A mountain bicycle", "A touring bicycle"], "An ordinary bicycle"),
new Question ("What other invention of the late 1880s greatly enhanced bicycle safety?", ["Glow-in-the-dark clothing",
     "Hand brakes", "Chain locks", "Battery-powered lights"], "Battery-powered lights"),
new Question ("What was the distinguishing feature of the Otto Dicycle, produced in the late 1800s?", ["It had very small tires for speed",
    "The bicycle could be taken apart and stored in a backpack", "It had a basket in back", "The seat was located between the two wheels"], "The seat was located between the two wheels"),
new Question ("What company manufactured the Radio Bicycle, which included a radio built into the frame?", ["Schwinn",
"Huffy", "Iron Horse", "Mongoose"], "Huffy"),
new Question ("The German-made Draisienne bicycle was made out of what material?", ["Metal",
"Wood", "Plastic", "Rubber"], "Wood"),
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();





