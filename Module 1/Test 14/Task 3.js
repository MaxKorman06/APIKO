// Дано: функція яка приймає масив елементів будь-яких типів
// Результат: вивести у консоль масив який містить лише стрічки початкового масиву
// Приклад:
// [2, “string”, 3, , , ”test”] => [“string”, “test”]

function filterArray(initialArray) {
  let resultArray = [];
  for (let i = 0; i < initialArray.length; i++) {
    if (typeof initialArray[i] === "string") {
      resultArray.push(initialArray[i]);
    }
  }
  console.log(resultArray);
}

const inputArray = [2, "string", 3, "12345", "sadfghkl", "test"];
filterArray(inputArray);
