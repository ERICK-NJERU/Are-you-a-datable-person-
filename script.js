const questions = [
  { question: "How often do you reflect on your emotions?", options: ["Often", "Sometimes", "Rarely"] },
  { question: "How do you handle disagreements in relationships?", options: ["With calm discussion", "With avoidance", "With anger"] },
  { question: "Do you prioritize personal growth?", options: ["Absolutely", "Somewhat", "Not really"] },
  { question: "Do you see relationships as partnerships or dependencies?", options: ["Partnerships", "Dependencies"] },
  { question: "How do you support a partner's dreams?", options: ["Actively encourage", "Support when convenient", "Don’t involve myself"] },
  { question: "If you like someone, do you flirt openly?", options: ["Yes!", "Only subtly", "Not at all"] },
  { question: "Are you comfortable making the first move?", options: ["Definitely", "Depends", "No"] }
];

let currentQuestionIndex = 0;
let score = 0;

document.getElementById('start-btn').addEventListener('click', function() {
  document.getElementById('intro-card').style.display = 'none';
  document.querySelector('.quiz-container').style.display = 'block';
  loadQuestion();
});

function loadQuestion() {
  if (currentQuestionIndex < questions.length) {
    const q = questions[currentQuestionIndex];
    document.getElementById('question').textContent = q.question;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    q.options.forEach(option => {
      const button = document.createElement('button');
      button.textContent = option;
      button.onclick = handleAnswer;
      optionsContainer.appendChild(button);
    });
    document.getElementById('progress-bar').style.width = ((currentQuestionIndex / questions.length) * 100) + "%";
  } else {
    endQuiz();
  }
}

function handleAnswer() {
  score++;
  currentQuestionIndex++;
  loadQuestion();
}

function endQuiz() {
  const quizCard = document.getElementById('quiz-card');
  let resultMessage = "";

  if (score >= 6) {
    resultMessage = "💖 You are totally datable! The world is lucky to have you. 💖";
  } else if (score >= 3) {
    resultMessage = "😉 You’ve got potential! A little polish and you’ll be turning heads. 😉";
  } else {
    resultMessage = "😅 Dating might be tricky right now. Some self-work and self-love first! 💪";
  }

  quizCard.innerHTML = `<h2>${resultMessage}</h2>`;
  document.getElementById('progress').style.display = 'none';
}
