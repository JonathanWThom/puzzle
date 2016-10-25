//
var originalSentence;
var vowels = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];
var winTracker = 0;

function toDashes(userSentence) {
  for (letter = 0; letter < userSentence.length; letter++) {
    vowels.forEach(function(vowel) {
      if (userSentence[letter] === vowel) {
        userSentence = userSentence.replace(vowel, "-");
      }
    });
  }
  return userSentence;
}

$(document).ready(function(){
  $("#input").submit(function(event){
    event.preventDefault();
    originalSentence = $("#sentence").val();
    dashedSentence = toDashes(originalSentence);

    $("#input").hide();
    $("#guess").show();
    $("#results").text(dashedSentence);
  });

  $("#guess").submit(function(event){
    event.preventDefault();
    var userGuess = $("#userGuess").val();
    if (userGuess === originalSentence) {
      $("#results").text(originalSentence);
      $("#results").removeClass("incorrect");
      $("#results").addClass("correct");
      $("#reset").show();
      winTracker++;
      $("#tracker").text(winTracker);
      $("#submitButton").hide();
      $("#guess").hide();
    } else {
      $("#results").addClass("incorrect");
    }
  });

  $("#reset").click(function(){
    $("#results").removeClass("incorrect");
    $("#results").removeClass("correct");
    $("#input").show();
    $("#results").text("");
    $("#guess").hide();
    $("#submitButton").show();
    $("#reset").hide();
    $("textarea").prop("value", "");
  });
});
