
const questions = [
    {
        question: "what is your village name",
        answers: [
            {text: "KP doddi", correct : false},
            {text: "Mottedoddi", correct: true},
            {text: "Elephant", correct: false },
            {text: "kylancha", correct: false}
        ]
    },
    {
        question: "what is your pet name",
        answers: [
            {text: "pinki", correct : false},
            {text: "benki", correct: false},
            {text: "monkey", correct: false },
            {text: "tricky", correct: true}
        ]
    },
    {
        question: "what is your watch name",
        answers: [
            {text: "fastrack", correct : false},
            {text: "titan", correct: false},
            {text: "cmf by notthing", correct: true },
            {text: "g-shock", correct: false}
        ]
    },
    {
        question: "what is your nick name",
        answers: [
            {text: "rocky", correct : true},
            {text: "rama", correct: false},
            {text: "virat", correct: false },
            {text: "chinnu", correct: false}
        ]
    }
];

const questionElement = document.getElementById("Questions");
const answerButtons = document.getElementById("Answer buttons");
const nextButton = document.getElementById("nxt-btn");

let currentQuestionIndex = 0;
let score =0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    showQuestions();  
}
function showQuestions(){
    reSetState();
    let currentQuestion = questions[currentQuestionIndex]
    let questionno = currentQuestionIndex + 1;
    questionElement.innerHTML = questionno + ". " + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button); 
        if(answer.correct){
            button.dataset.correct=answer.correct;
         }
        button.addEventListener("click", selectAnswer)
    })
}
 function selectAnswer(e){
    const selectBtn = e.target;
    const iscorrect =selectBtn.dataset.correct === "true";
    if(iscorrect){
        selectBtn.classList.add("correct");
        score++;
    }else{
        selectBtn.classList.add("incorrect");  
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");  
        }
        button.disabled = true;
    });
    nextButton.innerHTML="nxt";
    nextButton.style.display = "block";
 }

 nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {  
        handleNextButton();
    } else {
        startQuiz();
    }
});


 function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length){
        showQuestions();
    }else{
        showScore()
    }
 }
 function showScore(){
    reSetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block";
 }
function reSetState(){
    nextButton.style.display = "none"
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }

}startQuiz();





