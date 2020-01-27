var targetHighscore = document.querySelector("#highscoreDiv");
var targetTime = document.querySelector("#timeDiv");
var targetTitle = document.querySelector("#title");
var targetIntro = document.querySelector("#intro");
var targetStartBtn = document.querySelector("#startBtn");
var targetContentParent = document.querySelector("#contentParent");
var questionCounter = 0;

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

targetStartBtn.addEventListener("click", function() {
  // Start Timer
  var countStart = 5;
  setInterval(function() {
    if (countStart === 0) {
      return;
    }
    countStart--;
    targetTime.textContent = countStart;
  }, 1000);

  //   View Highscore Button -> Current Highscore
  targetHighscore.textContent = "Highscore";

  //   Remove Elements
  targetTitle.remove();
  targetIntro.remove();
  targetStartBtn.remove();

  //   New Question
  var newQuestion = document.createElement("h2");
  newQuestion.textContent =
    "What is the capital of " + countryArr[questionCounter].Name + "?";
  targetContentParent.appendChild(newQuestion);

  //   New Answers
  var trueAnswer = document.createElement("div");
  trueAnswer.textContent = countryArr[questionCounter].True;
  trueAnswer.style.padding = "1%";
  trueAnswer.style.border = "solid";
  targetContentParent.appendChild(trueAnswer);

  for (i = 0; i < 3; i++) {
    var newAnswer = document.createElement("div");
    newAnswer.textContent = countryArr[questionCounter].False[i];
    newAnswer.style.padding = "1%";
    newAnswer.style.border = "solid";
    targetContentParent.appendChild(newAnswer);
  }
});
// localStorage.setItem("Canada", JSON.stringify(Canada));
