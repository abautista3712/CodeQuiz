var startQuiz = document.querySelector("#startBtn");
var targetTimeDiv = document.querySelector("#timeDiv");

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
