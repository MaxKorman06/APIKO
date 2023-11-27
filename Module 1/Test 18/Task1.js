// Global Scope: створити змінну в глобальній області видимості,
// створити функцію і в тілі функції вивести цю змінну в консоль
// Function Scope: створити функцію, оголосити зміну всередині функції,
// тоді спробувати вивести цю змінну в консоль всередині функції, та за межами функції
// Block Scope: Створити функцію, в функції написати блок { } всередині
// якого оголосити змінну та вивести її в консоль, тоді вивести в консоль цю змінну
// за межами блоку, та подивитись на результат

// Global Scope
var globalVar = "Global var";

function globalScopeFunction() {
  console.log(globalVar);
}

globalScopeFunction();
console.log(globalVar);

// Function Scope
function functionScopeExample() {
  var functionVar = "Function var";

  console.log(functionVar);
}

//console.log(functionVar); // ReferenceError: functionVar is not defined

functionScopeExample(); // Виведе "Function var" в консоль

// Block Scope
function blockScopeExample() {
  if (true) {
    let blockVar = "Block var";

    console.log(blockVar);
  }
  //console.log(blockVar); // ReferenceError: blockVar is not defined
}
blockScopeExample(); // Виведе "Block var" в консоль
