// --- Quiz Functionality ---
const questions = [
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    answer: "CSS"
  },
  {
    question: "Which is used for web development?",
    options: ["Python", "HTML", "C#", "C++"],
    answer: "HTML"
  }
];

let currentQuestion = 0;

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").textContent = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("div");
    btn.textContent = option;
    btn.className = "option";
    btn.onclick = () => {
      alert(option === q.answer ? "Correct!" : "Incorrect!");
    };
    optionsDiv.appendChild(btn);
  });
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    document.querySelector(".quiz-section").innerHTML = "<h2>You've completed the quiz!</h2>";
  }
}

loadQuestion();

// --- Joke API Fetch ---
function getJoke() {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json"
    }
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("joke").textContent = data.joke;
  })
  .catch(() => {
    document.getElementById("joke").textContent = "Failed to fetch a joke.";
  });
}
