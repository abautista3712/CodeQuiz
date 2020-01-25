var startQuiz = document.querySelector("#startBtn");
var targetTimeDiv = document.querySelector("#timeDiv");
var Australia = {
  True: "Canberra",
  False: ["Bridgetown", "Saint John's", "Kingston"]
};
var Australia = {
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
var Australia = {
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
    console.log();
  }, 1000);
});
