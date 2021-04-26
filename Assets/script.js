// need to update the inner HTML of our elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const qImg = document.getElementById("questionImage");
const question = document.getElementById("question");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const progress = document.getElementById("progress");
const scorecontainer = document.getElementById("scoreContainer");

// create questions inside of an array... inside our array, every element will be an object with same properties.
let questions = [
    {
        question: "What does HTML stand for?",
        imgSrc: "https://img.favpng.com/17/18/15/web-development-html-css3-canvas-element-web-design-png-favpng-fuTCdugCT7a78ZwT8hhzDWezb.jpg",
        choiceA: "Help Text Markup Language",
        choiceB: "Hyper Text MarkUp Language",
        choiceC: "Hyperlinks & Text MarkUp Language",
        correct: "B"
    },
    {
        question: "What does HTML stand for?",
        imgSrc: "https://img.favpng.com/17/18/15/web-development-html-css3-canvas-element-web-design-png-favpng-fuTCdugCT7a78ZwT8hhzDWezb.jpg",
        choiceA: "Help Text Markup Language",
        choiceB: "Hyper Text MarkUp Language",
        choiceC: "Hyperlinks & Text MarkUp Language",
        correct: "B"
    },
    {
        question: "What does HTML stand for?",
        imgSrc: "https://img.favpng.com/17/18/15/web-development-html-css3-canvas-element-web-design-png-favpng-fuTCdugCT7a78ZwT8hhzDWezb.jpg",
        choiceA: "Help Text Markup Language",
        choiceB: "Hyper Text MarkUp Language",
        choiceC: "Hyperlinks & Text MarkUp Language",
        correct: "B"
    },
    {
        question: "What does HTML stand for?",
        imgSrc: "https://img.favpng.com/17/18/15/web-development-html-css3-canvas-element-web-design-png-favpng-fuTCdugCT7a78ZwT8hhzDWezb.jpg",
        choiceA: "Help Text Markup Language",
        choiceB: "Hyper Text MarkUp Language",
        choiceC: "Hyperlinks & Text MarkUp Language",
        correct: "B"
    },
    {
        question: "What does HTML stand for?",
        imgSrc: "https://img.favpng.com/17/18/15/web-development-html-css3-canvas-element-web-design-png-favpng-fuTCdugCT7a78ZwT8hhzDWezb.jpg",
        choiceA: "Help Text Markup Language",
        choiceB: "Hyper Text MarkUp Language",
        choiceC: "Hyperlinks & Text MarkUp Language",
        correct: "B"
    },
];

// question rendering
let lastQuestionIndex = questions.length - 1;
let runningQuestionIndex = 0;

function renderQuestion(){
    let q = questions[runningQuestionIndex];
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML =
      "<img src=https://img.favpng.com/17/18/15/web-development-html-css3-canvas-element-web-design-png-favpng-fuTCdugCT7a78ZwT8hhzDWezb.jpg" +
      q.imgSrc +
      ">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
};

// progress render
function progressRender() {
  for (let qIndex = 0; qIndex <= lastQuestionIndex; qIndex++) {
    progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
    };
};
function answerIsCorrect() {
    document.getElementById(runningQuestionIndex).style.backgroundColor = "green"
};
function answerIsWrong() {
    document.getElementById(runningQuestionIndex).style.backgroundColor = "red";
};

// counter render
const questionTime = 10; 
const gaugeWidth = 150;
let count = 0;
const gaugeProgressUnit = gaugeWidth / questionTime;

function counterRender() {
    if (count <= questionTime) {
        counter.innerHTML = count;
        timeGauge.style.width = gaugeProgressUnit * count + "px";
        count++;
    
    } else {
        count = 0;
        answerIsWrong();
        if (runningQuestionIndex < lastQuestionIndex) {
            runningQuestionIndex++;
            questionRender();
        } else {
            clearInterval(TIMER);
            scoreRender();
        };
    };
};

let TIMER = setInterval(counterRender, 1000);

// check answer
let score = 0;

function checkAnswer(answer) {
    if (question[runningQuestionIndex].correct == answer) {
        score++;
        answerIsCorrect();
    } else {
        answerIsWrong();
    };
    if (runningQuestionsIndex < lastQuestionIndex) {
        count = 0;
        runningQuestionIndex++;
        questionRender();
    } else {
        clearInterval(TIMER);
        scoreRender();
    };
};

// start quiz
const start = document.getElementById("stary");

start.addEventListener("click", startQuiz);

let TIMER;

function startQuiz() {
    start.style.display = "none";
    counterRender();
    TIMER = setInterval(counterRender, 1000);
    progressRender();
    questionRender();
    quiz.style.display = "block";
};

// score render



