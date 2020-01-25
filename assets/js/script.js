var startQuiz = document.querySelector("#startBtn");
var targetTimeDiv = document.querySelector("#timeDiv");
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

startQuiz.addEventListener("click", function() {
  var countStart = 5;
  setInterval(function() {
    if (countStart === 0) {
      return;
    }
    countStart--;
    targetTimeDiv.textContent = countStart;
  }, 1000);
  document.querySelector("#contentIntro").style.display = "none";
  startQuiz.style.display = "none";

  document.querySelector("#topLeftHeader").textContent = "Score";
});

function chooseCountry() {
  for (i = 0; i < countryArr.length; i++) {
    return countryArr[i];
  }
}
// localStorage.setItem("Canada", JSON.stringify(Canada));
