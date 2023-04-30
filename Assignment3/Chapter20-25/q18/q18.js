var sentence = "The quick brown fox jumps over the lazy dog";
var word = "the";
var lowerSentence = sentence.toLowerCase();
var lowerWord = word.toLowerCase();
var wordsArray = lowerSentence.split(" ");
var count = 0;
for (var i = 0; i < wordsArray.length; i++) {
  if (wordsArray[i] === lowerWord) {
    count++;
  }
}
document.write(sentence,"<br>");
document.write("The word 'the' occurs " + count + " times in the given sentence.");