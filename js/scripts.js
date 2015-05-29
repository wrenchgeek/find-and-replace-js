var findAndReplace = function(originalString, foundString, replacementString) {
  var newString = originalString.replace(foundString, replacementString);
  return newString;
}

// NOTE: So... the above code works just fine. It turns out that a find and
//       replace method already exists. I however feel like the spirit of
//       the exercise is to figure out how to write my own method to do the
//       same thing. Seeing as I have 5+ more hours to kill I think I'll do
//       just that :)



var cut = function(originalString, cutString) {
  var position = originalString.search(cutString);
  var beginingOfString = originalString.slice(0, position);
  var endOfString = originalString.slice(position + cutString.length, originalString.length);
  var newString = beginingOfString.concat(endOfString);
  return newString;
}

var insert = function(originalString, insertedString, position) {
  var newString = [originalString.slice(0, position), insertedString, originalString.slice(position, originalString.length)].join('');
  return newString;
}

var findAndReplaceHardMode = function(originalString, foundString, replacementString) {
  var position = originalString.search(foundString);
  var cutString = cut(originalString, foundString);
  var newString = insert(cutString, replacementString, position);
  return newString;
}

// ============WORK IN PROGRESS==============================

// var contains = function(arrayName, member) {
//   for (var index = 0; i < arrayName.length; index +=) {
//     if(arrayName[index] === member) {
//       return true;
//     } else{
//       return false;
//     }
//   }
// }

// function contains(a, obj) {
//     for (var i = 0; i < a.length; i++) {
//         if (a[i] === obj) {
//             return true;
//         }
//     }
//     return false;
// }
//
//
// var findAndReplaceNightmareMode = function(originalString, foundString, replacementString) {
//   var originalStringArray = originalString.split(" ");
//   while(contains(originalStringArray, foundString)) {
//     newString = findAndReplace(originalString, foundString, replacementString);
//     originalStringArray = newString.split(" ");
//   }
// }

// ============/WORK IN PROGRESS======================================================================

$(document).ready(function() {
  $("form#phrases").submit(function(event) {
    var originalString = ($("input#original_string").val());
    var foundString = ($("input#found_string").val());
    var replacementString = ($("input#replacement_string").val());
    var outputString = findAndReplaceHardMode(originalString, foundString, replacementString);

    $(".output").text(outputString);

    $("#result").show();
    event.preventDefault();
  })
})
