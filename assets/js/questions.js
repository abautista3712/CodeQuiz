// ***Question + Answer Generation***
// Variables for targeting elements in HTML
var targetHighscore = document.querySelector("#highscoreDiv");
var targetTime = document.querySelector("#timeDiv");
var targetTitle = document.querySelector("#title");
var targetIntro = document.querySelector("#intro");
var targetStartBtn = document.querySelector("#startBtn");
var targetContentParent = document.querySelector("#contentParent");
var countStart = 150;
var questionCounter = 0;

// Variables for Question and Answers
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

// Array with all countries to order questions
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

// Actions to execute when Start Quiz button is pressed
targetStartBtn.addEventListener("click", function() {
  // (1) Start Timer
  targetTime.textContent = countStart;
  var timer = setInterval(function() {
    if (countStart <= 0) {
      clearInterval(timer);
      countStart = 0;
      targetTime.textContent = 0;
      removeContent();
      createHighscoreDiv();
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
          removeContent();
          questionCounter++;
          newQuestion();
          console.log("Correct");
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

function removeContent() {
  document.querySelector("#question").remove();
  var targetAnswer = document.querySelectorAll(".answer");
  for (a = 0; a < targetAnswer.length; a++) {
    targetAnswer[a].remove();
  }
}

function createHighscoreDiv() {
  var highscoreTitle = document.createElement("h3");
  highscoreTitle.textContent = "Highscores";
  targetContentParent.appendChild(highscoreTitle);
}
