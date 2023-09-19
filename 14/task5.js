// Дано: Функція приймає три параметри: масив обєктів [{}, {}], назву поля обєкту (string), значення (string)
// Результат: Вивести у консоль новий масив з якого видалені усі обєкти в яких keyName буде дорівнювати value
// Приклад:
// removeObj([{age: 1}, {age: 2}, {age: 2}, {year: 2}], "age", 2) => [ { age: 1 }, { year: 2 } ]

function removeObj(arrayOfObj, keyName, value) {
  const filteredArray = arrayOfObj.filter((obj) => obj[keyName] !== value);
  return filteredArray;
}
const arr = [{ age: 1 }, { age: 2 }, { age: 2 }, { year: 2 }];

const result1 = removeObj(arr, "age", 2);
console.log(result1);

const result2 = removeObj(arr, "year", 2);
console.log(result2);
