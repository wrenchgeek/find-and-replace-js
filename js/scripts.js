var findAndReplace = function(originalString, foundWord, replacementWord) {
  var outputString = originalString.replace(foundWord, replacementWord);
  return outputString;
}

// NOTE: So... the above code works just fine. It turns out that a find and
//       replace method already exists. I however feel like the spirit of
//       the exercise is to figure out how to write my own method to do the
//       same thing. Seeing as I have 5+ more hours to kill I think I'll do
//       just that :)



$(document).ready(function() {
  $("form#phrases").submit(function(event) {
    var originalString = ($("input#original_string").val());
    var foundWord = ($("input#found_word").val());
    var replacementWord = ($("input#replacement_word").val());
    var outputString = findAndReplace(originalString, foundWord, replacementWord);

    $(".output").text(outputString);

    $("#result").show();
    event.preventDefault();
  })
})
