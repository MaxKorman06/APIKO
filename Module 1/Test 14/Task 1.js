// Завдання 1
// Дано: функція яка приймає масив чисел або стрічок.
// Результат: вивести у консоль масив унікальних значень початкового масиву
// Приклад: [2, 3, 1, 3, 3, 7] => [2,3,1,7]

function unicFn(initialArray) {
  function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
  }

  return initialArray.filter(onlyUnique);
}

let initialArray = [2, 3, 1, 3, 3, 7];
let uniqueArray = unicFn(initialArray);
console.log(uniqueArray);
