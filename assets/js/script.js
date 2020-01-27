var targetHighscore = document.querySelector("#highscoreDiv");
var targetTime = document.querySelector("#timeDiv");
var targetTitle = document.querySelector("#title");
var targetIntro = document.querySelector("#intro");
var targetStartBtn = document.querySelector("#startBtn");
var targetContentParent = document.querySelector("#contentParent");

var countryArr = [
  "Australia",
  "Cambodia",
  "Philippines",
  "Austria",
  "Colombia",
  "Bosnia and Herzegovina",
  "Djibouti",
  "Belarus",
  "Dominican Republic",
  "Canada"
];
var Australia = {
  True: "Canberra",
  False: ["Bridgetown", "Saint John's", "Kingston"]
};
var Cambodia = {
  True: "Phnom Penh",
  False: ["Kinshasa", "Moroni", "Tbilisi"]
};
var Philippines = {
  True: "Manila",
  False: ["Suva", "Maseru", "Nay Pyi Taw"]
};
var Austria = {
  True: "Vienna",
  False: ["Windhoek", "Amsterdam", "Oslo"]
};
var Columbia = {
  True: "Bogota",
  False: ["Lima", "San Marino", "San Jose"]
};
var BosniaAndHerzegovina = {
  True: "Sarajevo",
  False: ["Yamoussoukro", "Sofia", "Minsk"]
};
var Djibouti = {
  True: "Djibouti",
  False: ["Gaborone", "Porto-Novo", "Algiers"]
};
var Belarus = {
  True: "Minsk",
  False: ["Belmopan", "Zagreb", "Roseau"]
};
var DominicanRepublic = {
  True: "Santo Domingo",
  False: ["Buenos Aires", "Quito", "San Salvador"]
};
var Canada = {
  True: "Ottawa",
  False: ["Georgetown", "Monrovia", "Port Moresby"]
};

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
  newQuestion.textContent = "Test";
  targetContentParent.appendChild(newQuestion);

  //   New
  for (i = 0; i < 4; i++) {
    var newAnswer = document.createElement("div");
    newAnswer.textContent = "Test";
    targetContentParent.appendChild(newAnswer);
  }
});
// localStorage.setItem("Canada", JSON.stringify(Canada));
