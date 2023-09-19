// Завдання 4

function calculateWordsInString(string) {
  let numberOfWords = 1;
  for (let index = 0; index < string.length; index++) {
    if (string[index] === " " && string[index + 1] != " ") {
      numberOfWords += 1;
    }
  }
  console.log("Кількість слів у реченні = " + numberOfWords);
}
calculateWordsInString("Easy string for count");
calculateWordsInString("Easy");
calculateWordsInString("Some string with a triple   space");
calculateWordsInString("Some?  string, with a triple   space");
