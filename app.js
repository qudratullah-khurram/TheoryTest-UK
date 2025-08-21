const questions = {
  1: [
    { q: "What does a red traffic light mean?", options: ["Stop", "Go", "Slow down", "Ready"], answer: "Stop" },
    { q: "At night, when must you use dipped headlights?", options: ["Only on motorways", "When visibility is seriously reduced", "In well-lit streets", "When its rain"], answer: "When visibility is seriously reduced" }, 
    { q: "What colour are the flashing lights on emergency vehicles like police cars?", options: ["Red", "Blue", "Green", "Amber"], answer: "Blue"},
    { q: "When must you wear a seat belt?", options: ["Only on motorways", "Only at night", "At all times (if fitted)", "Only when driving fast"], answer: "At all times (if fitted)"},
    { q: "Which side of the road do drivers use in the UK?", options: ["Left", "Right", "Middle", "Either side"], answer: "Left"},
  ],
  2: [
    { q: "When driving in fog, you should:", options: ["Use your hazard lights only", "Drive close to the vehicle in front","Use dipped headlights","Only use main beam headlights"], answer: "Use dipped headlights"},
    { q: "You are approaching a zebra crossing. Pedestrians are waiting. What should you do?", options: ["Speed up to pass quickly", "Stop and let them cross", "Sound your horn", "Flash your headlights"   ], answer: "Stop and let them cross"},
    { q: "What should you do when you see a school crossing patrol sign?", options: ["Stop when signalled to do so", "Slow down only", "Ignore it", "Sound your horn"], answer: "Stop when signalled to do so"},
    { q: "What is the national speed limit on a single carriageway road for cars?", options: ["50 mph", "60 mph", "70 mph", "40"], answer: "60 mph" },
    { q: "What should you do when you see a school crossing patrol sign?", options: ["Stop when signalled to do so", "Slow down only", "Ignore it", "Sound your horn"], answer: "Stop when signalled to do so"},
      ],
  3: [
    { q: "What does a blue circular road sign mean?", options: ["It gives information", "It gives an order", "It is a warning", "It is a stop sign"], answer: "It gives an order"},
    { q: "What is the typical stopping distance at 70 mph in dry conditions?", options: ["53 metres", "96 metres", "120 metres", "20 meters"], answer: "96 metres" },
    { q: "What should you do when approaching a zebra crossing?", options: ["Speed up", "Prepare to stop", "Sound your horn", "continue your speed"], answer: "Prepare to stop" },
    { q: "What shape are road warning signs?", options: ["Round", "Triangle", "Square", "Rectangle"], answer: "Triangle" },
    {q: "What does a red and white triangular sign warn you about?", options: [ "Information ahead", "Mandatory instruction","Warning of a hazard", "Motorway directions"], answer: "Warning of a hazard"},
  ]
};

let level = 1;                                            // current level
let score = 0;     
let levelUP = 0;                                        // correct answers total
let currentQuestionIndex = 0;                            // position in the current level’s array
let currentQuestionSet = questions[level];               // the array for this level

const questionEl = document.querySelector ("#question");
const optionsEl = document.querySelector("#options");
const scoreEl = document.querySelector("#score");
const levelEl = document.querySelector("#level");
const messageEl = document.querySelector("#message");
const nextBtn = document.querySelector("#next-btn");

function loadQuestion() {
  let ques = currentQuestionSet[currentQuestionIndex];
  questionEl.textContent = ques.q;
  optionsEl.innerHTML = "";

  ques.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("option-btn");
    btn.addEventListener('click', () => selectAnswer(btn, ques.answer));
    optionsEl.appendChild(btn);
  });
} 

function selectAnswer(btn, correctAnswer) {
  Array.from(document.querySelectorAll(".option-btn")).forEach(b => b.disabled = true);

  if (btn.textContent === correctAnswer) {
    btn.classList.add("correct");
    score++;
    levelUP++;
    messageEl.textContent = "✅ Correct!";
  } else {
    btn.classList.add("wrong");
    messageEl.textContent = "❌ Wrong! The correct answer was: " + correctAnswer;
  }

  scoreEl.textContent = score;
  nextBtn.classList.remove("hidden");
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;

  if (currentQuestionIndex < currentQuestionSet.length) {
  
    messageEl.textContent = "";
    loadQuestion();
    nextBtn.classList.add("hidden");

  }  else {
    if (levelUP >= 4) {
      if (level < Object.keys(questions).length) {
        level++;
        currentQuestionSet = questions[level];
        currentQuestionIndex = 0;
        levelEl.textContent = level;
        levelScore = 0; 
        messageEl.textContent = "🎉 Level Up! Questions are getting harder!";
        loadQuestion();
        nextBtn.classList.add("hidden");
      } else {
        messageEl.textContent = "🏆 You Win! Great driving knowledge!";
        nextBtn.classList.add("hidden");
      }
    } else {
      messageEl.textContent = "😢 Not enough correct answers. Try again!";
      currentQuestionIndex = 0;
      levelUP = 0; 
      score = 0;
      loadQuestion();
      
      nextBtn.classList.add("hidden");
    }
  }
});
loadQuestion();