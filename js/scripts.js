//
var originalSentence;
var vowels = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];

function toDashes(userSentence) {
  for (letter = 0; letter < userSentence.length; letter++) {
    vowels.forEach(function(vowel) {
      if (userSentence[letter] === vowel) {
        userSentence = userSentence.replace(vowel, "-");
      }
    });
  }
  // vowels.forEach(function(vowel) {
  //   if (userSentence.indexOf(vowel) != -1) {
  //     userSentence = userSentence.replace(vowel, "-");
  //     //userSentence = tempSentence;
  //   }
  // });
  return userSentence;
}

$(document).ready(function() {
  $("#input").submit(function(event){
    event.preventDefault();
    var originalSentence = $("#sentence").val();
    dashedSentence = toDashes(originalSentence);
    console.log(dashedSentence);
  });
});
