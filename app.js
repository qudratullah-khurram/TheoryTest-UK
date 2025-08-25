const questions = {
  1: [
    { q: "What does a red traffic light mean?<br> سور څراغ څه معنی؟", options: ["Stop<br>دریدل", "Go<br>تلل", "Slow down<br>ورو کیدل", "Ready<br>چمتو کیدل"], answer: "Stop<br>دریدل" },
    { q: "At night, when must you use dipped headlights?<br> د شپی څه وخت باید عادی څراغونه روښانه شی؟", options: ["Only on motorways <br> یواځی په لویو لارو", "When visibility is seriously reduced<br> چی کله ډیره تیاره شی", "In well-lit streets<br>په ښه روښانه سرکونو کښی", "When its rain<br> چی کله باران وی"], answer: "When visibility is seriously reduced<br> چی کله ډیره تیاره شی" }, 
    { q: "What colour are the flashing lights on emergency vehicles like police cars?<br>د بیړنیو وسایطو لکه د پولیسو د موټرو څراغونه کوم رنګ وي؟", options: ["Red<br>سور", "Blue<br>آبی", "Green<br>شین", "Amber<br>نارجی"], answer: "Blue<br>آبی"},
    { q: "When must you wear a seat belt?<br> تاسو کله باید کمربند وتړئ؟", options: ["Only on motorways<br>یواځی په لویو لارو", "Only at night<br>یواځی د شپی لخوا", "At all times while driving<br>تل د موټر چلولو پر مهال", "Only when driving fast<br>یواځی په لوړ سرعت کښی"], answer: "At all times while driving<br>تل د موټر چلولو پر مهال"},
    { q: "Which side of the road do drivers use in the UK?<br> په بریتانیا کښی موټر چلونکی د سرک کوم لاس استفاده کوی؟", options: ["Left<br>چپ", "Right<br>ښۍ", "Middle<br> مابین", "Either side<br> هره خواه"], answer: "Left<br>چپ"},
  ],
  2: [
    { q: "When driving in fog, you should:<br>:چی کله په لړه کې موټر چلوی نو باید", options: [ "Use hazard lights only<br>یوازې د خطر څراغونه وکاروئ", "Keep a safe distance from the vehicle in front<br>د مخکني موټر څخه خوندي فاصله وساتئ","Use dipped headlights<br> ټیټ څراغونو وکاروی ","Use main beam headlights<br>اصلي لوړ څراغونو وکاروی"], answer: "Use dipped headlights<br> ټیټ څراغونو وکاروی "},
    { q: "You are approaching a zebra crossing. Pedestrians are waiting. What should you do?<br>تاسو د زیبرا کراسنگ پیاده رو خواته روان یاست. پیاده خلک تمه کوي. تاسو څه باید وکړئ؟", options: ["Speed up to pass quickly<br> سرعت مو زیات کړی تر څو تیر شی", "Stop and let them cross<br>ودریږی تر څو دوی تیر شی", "Sound your horn<br>هارن ووهی", "Flash your headlights<br> څراغ ورکړی"   ], answer: "Stop and let them cross<br>ودریږی تر څو دوی تیر شی"},
    { q: "What should you do when you see a school crossing patrol sign?<br>کله چې د ښوونځي د زده کونکو له سرک څخه د تیردلو نښه ووینئ، څه باید وکړئ؟", options: ["Stop when signalled to do so<br>کله چې نښه ورکړل شوه نو ودریږئ", "Slow down only<br> یواځی سرعت کم کړی", "Ignore it<br> هیڅ غور مه پری کوی", "Sound your horn<br>هارن ووهی"], answer: "Stop when signalled to do so<br>کله چې نښه ورکړل شوه نو ودریږئ"},
    { q: "What is the national speed limit on a single carriageway road for cars?<br>په سنګل کریجوی سرک سرعت څومره دی؟", options: ["50 mph", "60 mph", "70 mph", "40"], answer: "60 mph" },
    { q:"When driving in fog, you should:<br>چی کله په لړه کې موټر چلوی نو باید:", options: [ "Use hazard lights only<br>یوازې د خطر څراغونه وکاروئ", "Keep a safe distance from the vehicle in front<br>د مخکني موټر څخه خوندي فاصله وساتئ","Use dipped headlights<br> ټیټ څراغونو وکاروی ","Use main beam headlights<br>اصلي لوړ څراغونو وکاروی"], answer: "Use dipped headlights<br> ټیټ څراغونو وکاروی "},
      ],
  3: [
    { q: "What does a blue circular road sign mean?<br>په سرکونو د آبی ګردو لوحو معنی څه ده؟ ", options: ["It gives information<br>مالومات ورکوی", "It gives an order<br>امر کوی", "It is a warning<br>خبرداری ورکوی", "It is a stop sign<br> د دریدلو نښه ده"], answer: "It gives an order<br>امر کوی"},
    { q: "What is the typical stopping distance at 70 mph in dry conditions?<br>په وچ سرک کې په ۷۰ میله په ساعت کې د موټر د دریدلو عادي واټن څومره دی؟", options: ["53 metres", "96 metres", "120 metres", "20 meters"], answer: "96 metres" },
    { q: "What should you do when approaching a zebra crossing?<br>چی کله دزیبرا کراسنګ پیاده رو ته نیژدی شی نو څه کوی؟", options: ["Speed up<br> سرعت زیات کوم", "Prepare to stop<br>دریدلو ته چمتو کیږم", "Sound your horn<br> هارن وهم", "continue your speed<br> په خپل سرعت مخ ته ځم"], answer: "Prepare to stop<br>دریدلو ته چمتو کیږم" },
    { q: "What shape are road warning signs?<br>د سړک د خبرداریو لوحی کوم شکل لري؟", options: [ "Round<br>دایروي","Square<br>مربع",  "Rectangle<br>مستطیل", "Triangle<br>مثلث"], answer: "Triangle<br>مثلث"},
    {q: "What does a red and white triangular sign warn you about?<br>سور او سپین مثلث لوحه تاسو د څه په اړه خبرداری درکوي؟", options: [ "Information ahead<br>راتلونکی مالومات", "Mandatory instruction<br>اجباري لارښوونه","Warning of a hazard<br>د خطر خبرداری", "Motorway directions<br>د لویې لارې لارښوونې"], answer: "Warning of a hazard<br>د خطر خبرداری"},
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
  questionEl.innerHTML = ques.q;
  optionsEl.innerHTML = "";

  ques.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerHTML = option;
    btn.classList.add("option-btn");
    btn.addEventListener('click', () => selectAnswer(btn, ques.answer));
    optionsEl.appendChild(btn);
  });
} 

function selectAnswer(btn, correctAnswer) {
  Array.from(document.querySelectorAll(".option-btn")).forEach(b => b.disabled = true);

  if (btn.innerHTML === correctAnswer) {
    btn.classList.add("correct");
    score++;
    levelUP++;
    messageEl.textContent = "✅ Correct!";
  } else {
    btn.classList.add("wrong");
    messageEl.innerHTML = "❌ Wrong! The correct answer was: " + correctAnswer;
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
        levelUP = 0; 
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
      
      loadQuestion();
      score = 0;
      nextBtn.classList.add("hidden");
    }
  }
});
loadQuestion();