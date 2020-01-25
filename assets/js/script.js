var startQuiz = document.querySelector("#startBtn");
startQuiz.addEventListener("click", function() {
  var countStart = 5;
  setInterval(function() {
    if (countStart === 0) {
      return;
    }
    countStart--;
    console.log(countStart);
  }, 1000);
});
