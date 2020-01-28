// ***Question + Answer Generation***
// ---Variables for targeting elements in HTML---
var targetHighscore = document.querySelector("#highscoreDiv");
var targetTime = document.querySelector("#timeDiv");
var targetTitle = document.querySelector("#title");
var targetIntro = document.querySelector("#intro");
var targetStartBtn = document.querySelector("#startBtn");
var targetContentParent = document.querySelector("#contentParent");
var countStart = 0;
var questionCounter = 0;

// ---Variables for Question and Answers---
var Australia = {
  Name: "Australia",
  True: "Canberra",
  False: ["Bridgetown", "Saint John's", "Kingston"]
};
var Cambodia = {
  Name: "Cambodia",
  True: "Phnom Penh",
  False: ["Kinshasa", "Moroni", "Tbilisi"]
};
var Philippines = {
  Name: "Philippines",
  True: "Manila",
  False: ["Suva", "Maseru", "Nay Pyi Taw"]
};
var Austria = {
  Name: "Austria",
  True: "Vienna",
  False: ["Windhoek", "Amsterdam", "Oslo"]
};
var Colombia = {
  Name: "Colombia",
  True: "Bogota",
  False: ["Lima", "San Marino", "San Jose"]
};
var BosniaAndHerzegovina = {
  Name: "Bosnia and Herzegovina",
  True: "Sarajevo",
  False: ["Yamoussoukro", "Sofia", "Minsk"]
};
var Djibouti = {
  Name: "Djibouti",
  True: "Djibouti",
  False: ["Gaborone", "Porto-Novo", "Algiers"]
};
var Belarus = {
  Name: "Belarus",
  True: "Minsk",
  False: ["Belmopan", "Zagreb", "Roseau"]
};
var DominicanRepublic = {
  Name: "Dominican Republic",
  True: "Santo Domingo",
  False: ["Buenos Aires", "Quito", "San Salvador"]
};
var Canada = {
  Name: "Canada",
  True: "Ottawa",
  False: ["Georgetown", "Monrovia", "Port Moresby"]
};

// ---Variable Array with all countries to order questions---
var countryArr = [
  Australia,
  Cambodia,
  Philippines,
  Austria,
  Colombia,
  BosniaAndHerzegovina,
  Djibouti,
  Belarus,
  DominicanRepublic,
  Canada
];
//   Questions Order Shuffle via Fisher-Yates (Knuth) Shuffle
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
countryArr = shuffle(countryArr);

// ---Actions to execute when Start Quiz button is pressed---
targetStartBtn.addEventListener("click", function() {
  // (1) Start Timer
  targetTime.textContent = countStart;
  var timer = setInterval(function() {
    if (questionCounter >= 9 || countStart <= 0) {
      countStart = 0;
      targetTime.textContent = 0;
      clearInterval(timer);
      renderHSInput();
      return;
    }
    countStart--;
    targetTime.textContent = countStart;
  }, 1000);
  // (2) View Highscore Button changes to Current Highscore
  targetHighscore.textContent = "Highscore";
  // (3) Remove Elements
  targetTitle.remove();
  targetIntro.remove();
  targetStartBtn.remove();
  newQuestion();

  // (4) Function to create new question + shuffled answers
  function newQuestion() {
    // [a] New Question Generation
    var newQuestionDiv = document.createElement("h2");
    newQuestionDiv.setAttribute("id", "question");
    newQuestionDiv.textContent =
      "What is the capital of " + countryArr[questionCounter].Name + "?";
    targetContentParent.appendChild(newQuestionDiv);
    // [b] New Answers Generation
    var answerArr = [];
    answerArr.push(countryArr[questionCounter].True);
    for (i = 0; i < 3; i++) {
      answerArr.push(countryArr[questionCounter].False[i]);
    }
    // [c] New Answer Shuffle via Fisher-Yates (Knuth) Shuffle
    function shuffle(array) {
      var currentIndex = array.length,
        temporaryValue,
        randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }
    answerArr = shuffle(answerArr);
    // [d] Append array with shuffled answers to parent div
    for (i = 0; i < 4; i++) {
      var newAnswer = document.createElement("div");
      newAnswer.textContent = answerArr[i];
      newAnswer.style.padding = "1%";
      newAnswer.style.border = "solid";
      newAnswer.setAttribute("class", "answer");
      targetContentParent.appendChild(newAnswer);
    }
    // [e] Add on-click event to all answers
    var targetAnswers = document.querySelectorAll(".answer");
    for (j = 0; j < 4; j++) {
      targetAnswers[j].addEventListener("click", function() {
        var selectedAnswer = this.textContent;
        // (i) If clicked answer is true, current question and answers will be removed, questionsCounter advances by one, timer will stop, and newQuestions() function is called
        if (selectedAnswer === countryArr[questionCounter].True) {
          if (questionCounter >= 9) {
            return;
          } else {
            questionCounter++;
            removeContent();
            newQuestion();
            console.log("Correct");
          }
        } else {
          // (ii) If clicked answer is not true, countStart is subtracted by 15 and styling is added to infer wrong answer is selected
          countStart -= 15;
          this.style.background = "#ff3333";
          this.style.color = "#ffffff";
          console.log("Incorrect");
        }
      });
    }
  }
});

// ***Highscore Input Generation***
// ---Functions---
// (1) Removes questions and answers
function removeContent() {
  document.querySelector("#question").remove();
  var targetAnswer = document.querySelectorAll(".answer");
  for (a = 0; a < targetAnswer.length; a++) {
    targetAnswer[a].remove();
  }
}
// (2) Creates highscore input page content
function createHighscoreInput() {
  // Title/Score
  var scoreTitle = document.createElement("h3");
  scoreTitle.setAttribute("class", "contentFlex");
  scoreTitle.textContent = "Score: " + countStart;
  targetContentParent.appendChild(scoreTitle);
  // Instructions
  var scoreInstructions = document.createElement("div");
  scoreInstructions.setAttribute("id", "instructions");
  scoreInstructions.setAttribute("class", "contentFlex");
  scoreInstructions.style.marginBottom = "1%";
  scoreInstructions.textContent =
    "You placed on the leaderboard! Input your initials:";
  targetContentParent.appendChild(scoreInstructions);
  // Container that wraps around input and button
  var scoreContainer = document.createElement("div");
  scoreContainer.setAttribute("id", "inputParentContainer");
  scoreContainer.setAttribute("class", "contentFlex");
  scoreContainer.style.width = "100%";
  targetContentParent.appendChild(scoreContainer);
  // Input Field
  var scoreInput = document.createElement("input");
  scoreInput.setAttribute("id", "input");
  scoreInput.setAttribute("maxlength", "3");
  scoreInput.style.textAlign = "center";
  scoreInput.style.margin = "1%";
  scoreContainer.appendChild(scoreInput);
  // Input Button
  var scoreBtn = document.createElement("button");
  scoreBtn.setAttribute("id", "inputBtn");
  scoreBtn.setAttribute("class", "btn btn-success");
  scoreBtn.textContent = "\u00bb";
  scoreContainer.appendChild(scoreBtn);
}

// (3) Sets user input to localStorage
function enterInput() {
  // via 'enter' keypress
  var targetInput = document.querySelector("#input");
  document.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      localStorage.setItem("userInitials", targetInput.value);
      renderHS();
    }
  });
  // via input button press
  var targetInputBtn = document.querySelector("#inputBtn");
  targetInputBtn.addEventListener("click", function() {
    localStorage.setItem("userInitials", targetInput.value);
    renderHS();
  });
}

// ---Functions are called to render highscore input page---
function renderHSInput() {
  removeContent();
  createHighscoreInput();
  enterInput();
}

// ***Highscore Page Generation***
var testArr = [1, "adb", 70];

function removeHSInput() {
  document.querySelector("h3").remove();
  document.querySelector("#instructions").remove();
  document.querySelector("#inputParentContainer").remove();
}

function highscoreTitle() {
  var highscoreTitle = document.createElement("h3");
  highscoreTitle.setAttribute("class", "contentFlex");
  highscoreTitle.textContent = "Highscores";
  targetContentParent.appendChild(highscoreTitle);
}

function highscoreContainer() {
  var highscoreContainer = document.createElement("div");
  highscoreContainer.setAttribute("id", "parentContainer");
  highscoreContainer.setAttribute("class", "container");
  targetContentParent.appendChild(highscoreContainer);
}

function highscoreRow() {
  var highscoreRow = document.createElement("div");
  highscoreRow.setAttribute("id", "parentRow");
  highscoreRow.setAttribute("class", "row");
  document.querySelector("#parentContainer").appendChild(highscoreRow);
}

function addRow() {}

function createHighscoreContent(x) {
  highscoreTitle();
  highscoreContainer();
  highscoreRow();
  for (l = 0; l < 3; l++) {
    var x = ["Place", "Initials", "Score"];
    var highscoreCol = document.createElement("div");
    highscoreCol.setAttribute("id", x[l]);
    highscoreCol.setAttribute("class", "col-md-4");
    highscoreCol.style.textAlign = "center";
    highscoreCol.style.fontWeight = "bold";
    highscoreCol.textContent = x[l];
    document.querySelector("#parentRow").appendChild(highscoreCol);
  }
  for (m = 0; m < 5; m++) {
    highscoreRow();
    for (n = 0; n < 3; n++) {
      var dataArr = [n];
      var highscoreCol = document.createElement("div");
      highscoreCol.setAttribute("id", dataArr[n]);
      highscoreCol.setAttribute("class", "col-md-4");
      highscoreCol.style.textAlign = "center";
      highscoreCol.textContent = n;
      document.querySelector("#parentRow").appendChild(highscoreCol);
    }
  }
}

function renderHS() {
  removeHSInput();
  createHighscoreContent();
}
