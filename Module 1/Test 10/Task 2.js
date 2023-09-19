// Завдання 2
function calculateSumOfArray() {
  const initialArray = [3, 2, "2", null, 1.5, 9.5, undefined];
  let = sumNumberArr = 0;
  for (let index = 0; index < initialArray.length; index++) {
    if (typeof initialArray[index] === "number") {
      sumNumberArr += initialArray[index];
    }
  }
  console.log("Сумі чисел масиву: = " + sumNumberArr);
}

calculateSumOfArray();
