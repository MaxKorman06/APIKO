//Створити ф-ію isString, яка першим параметром отримує функцію колбек та другим значення.
//Перевіряє чи передане значення це стрічка і колбек це функція та виконує колбек із цим значенням
//або виводить помилку в консоль якщо це не стрічка або колбек не є функцією

function isString(callback, input) {
  if (typeof input === 'string' && typeof callback === 'function') {
    callback(input);
  } else {
    console.error('Invalid input. Please provide a string and a callback function.');
  }
}

function logString(str) {
  console.log('The string is:', str);
}

isString(logString, 'Hello, World!');

isString(logString, 123);

isString('not a function', 'Hello, World!');

