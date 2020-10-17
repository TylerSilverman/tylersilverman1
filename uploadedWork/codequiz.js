const startButton = document.getElementById ('start-btn');
const nextButton = document.getElementById ('next-btn');
const questionsContainerE1 = document.getElementById ('questions-container');
var questionsShowE1 = document.getElementById ('questions');
const answerContainerE1 = document.getElementById ('answer-container');
const answers = document.getElementById ('answers');
const submitButton = document.getElementById ('submit-btn');
const wrongButton = document.getElementById ('wrong-btn');
const correctButton = document.getElementById ('correct-btn');
var choose = document.querySelector ('choose-answer');

let currentQuestion;
var score = 0;

var time = document.querySelector('.time');
var clockTimer = document.getElementById("clockTimer");

var player = prompt("Enter your name and then press Start to begin, You will have 50 Seconds for 5 Questions");
// Clock timer for the Game
startButton.addEventListener('click', start);

var secondsLeft = 40;
function setTime() {
    console.log ('Quiz Begins')
    var timeInterval = setInterval(function() {
        secondsLeft--;
        time.textContent = (secondsLeft + " " + "Time Remaining");

        if (secondsLeft <= 0) {
            clearInterval (timeInterval)
            endQuiz ();
    
        }

    }, 1000);
};
// Game Time has started 
function start() {
    setTime ()
    currentQuestion = 0
    questionsContainerE1.classList.remove('hide')
    showQuestion(questions[currentQuestion])
}

function endQuiz () {
    alert ("Game Over:   " + player + "    Your Final Score:    " + score  + " out of 5");
}

//Displaying the funtion to display questions for the quiz

function next () {

    resetState()
    console.log (currentQuestion);
    currentQuestion++;

    if (currentQuestion < questions.length){
        showQuestion(questions[currentQuestion])
        
        return;
    }
    endQuiz ();
}

// function to show the questions and getting the answers and wuestions
function showQuestion (question) {
    questionsShowE1.innerText = question.question;

    question.answers.forEach((answer, index) => {
        const button = document.createElement('button')
        console.log ("answer", answer)
        button.innerText = answer
        
        button.dataset.answerIndex = index;
    
        button.classList.add ('btn')
        button.addEventListener ('click', selectAnswer)
        answers.appendChild(button)
    })
};

//function  to reset the questions and password within the document

function resetState() {
    clearStatusClass(document.body)
    while (answers.firstChild) {
        answers.removeChild
        (answers.firstChild)
    }
};

//function to select the answer and also the alerts to each question 
function selectAnswer (event) {
    console.log(event);
    const answerBtn = event.target 
    const buttonIndex = answerBtn.dataset.answerIndex;
    const correctAnswerIndex = questions[currentQuestion].correctIndex;

    console.log ("You Choose:" + " " + buttonIndex);
    console.log ("The correct answer is" + " " + correctAnswerIndex);

    setStatusClass(document.body);

    alert (buttonIndex == correctAnswerIndex ? 'correct' : 'incorrect')

    if (buttonIndex == correctAnswerIndex) {
        score++;
    }

    Array.from(answers.children).forEach(button => {
        setStatusClass(button, button.dataset.correctButton);
    });

    next();
    
}
// function to set the questions 

function setStatusClass (element) {
    clearStatusClass (element)
    element.classList.add ('questions')
};

//function to show the questions
function clearStatusClass(element) {
    element.classList.add ('questions')
};

// The array of questions for our quiz game-Need to double check to make sure answers are correct

const questions = [{
        question: 'Arrays in JavaScript can be used to store _____.',
        answers:[ "numbers and strings", "other arrays", "all of the above", "booleans"],
        correctIndex: "2",
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answers:[ "JavaScript", "terminal/bash", "for loops", "console.log"],
        correctIndex: 1,
    },
    {
        question: 'String values must be enclosed within ___ when being assigned to variables.',
        answers:[ "commas", "curly brackets", "quotes", "parentheses"],
        correctIndex: 2,
    },
    {
        question: 'The condition in an if/else statement is enclosed within ___',
        answers:[ "quotes", "curly brackets", "parentheses", "square brackets"],
        correctIndex: 2,
    },
    {
        question: 'Commonly used data types DO NOT include:',
        answers:['strings', 'booleans', 'alerts', 'numbers'],
        correctIndex: 0,
    },
];