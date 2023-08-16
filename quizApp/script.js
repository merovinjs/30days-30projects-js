const questions = [
  {
    question: "What is the full form of HTML?",
    answers: [
      { text: "Hello To My Land", correct: false },
      { text: "Hey Text Markup Language", correct: false },
      { text: "Hyper Text Makeup Language", correct: true },
      { text: "None of these", correct: false },
    ],
  },
  {
    question: "What is the full form of CSS?",
    answers: [
      { text: "Cascading Style Sheets", correct: true },
      { text: "Cascading Style Sheep", correct: false },
      { text: "Cartoon Style Sheets", correct: false },
      { text: "None of these", correct: false },
    ],
  },
  {
    question: "What is the full form of JS?",
    answers: [
      { text: "JavaScript", correct: true },
      { text: "JavaSuper", correct: false },
      { text: "JordenShoes", correct: false },
      { text: "None of these", correct: false },
    ],
  },
  {
    question: "What is the full form of node.js?",
    answers: [
      { text: "Node.js", correct: true },
      { text: "Node.java", correct: false },
      { text: "Node.shoes", correct: false },
      { text: "None of these", correct: false },
    ],
  },
];
const questionsElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionsElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const isCorrect = selectedButton.dataset.correct === "true";
  if (isCorrect) {
    selectedButton.classList.add("correct");
    score++;
  } else {
    selectedButton.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}
function showScore() {
  resetState();
  questionsElement.innerHTML = `Your Score is ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});
startQuiz();
