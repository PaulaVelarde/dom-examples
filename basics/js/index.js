/**
 * Chapter 3 - DOM. Basics.
 *
 */

// 1. Select the english text and change the text color to white and the background to black.
var englishText = document.getElementById('text-en');
englishText.style.backgroundColor = 'black';
englishText.style.color = 'white';

// 2. Select the italian text and change the text color to red and the background to orange.
var italianText = document.getElementById('text-it');
italianText.style.backgroundColor = 'orange';
italianText.style.color = 'red';

// 3. Select all the elements with the class 'important' and change:
// the font size to 25px
// the font colo to red
// underline the text
var importantThings = document.getElementsByClassName('important');
for (var i = 0; i < importantThings.length; i++) {
  var anImportantThing = importantThings[i];
  anImportantThing.style.fontSize = '25px';
  anImportantThing.style.color = 'red';
  anImportantThing.style.textDecoration = 'underline';
}

// 4. Change the first list element text to 'Programming in JavaScript.'

// 5. Add the class 'unimportant' to the last list element of the list "Things I like".
