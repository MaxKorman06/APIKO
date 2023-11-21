// 1) Створити ф-ію конструктор Calculator та до її 
// прототипу добавити два методи sum(a,b) та subtract(a,b)
// 2) Створити ф-ію конструктор AdvancedCalculator
//  (наслідує методи від Calculator) та до її прототипу
//   добавити два методи multiply(a,b) та divide(a,b)

// 1)

function BasicCalculator() { }

BasicCalculator.prototype.add = function (num1, num2) {
    return num1 + num2;
}

BasicCalculator.prototype.subtract = function (num1, num2) {
    return num1 - num2;
}

const basicCalc = new BasicCalculator();

console.log(basicCalc.add(5, 6));
console.log(basicCalc.subtract(10, 5));

// 2)

function ScientificCalculator() { }

ScientificCalculator.prototype = Object.create(BasicCalculator.prototype);

ScientificCalculator.prototype.multiply = function (num1, num2) {
    return num1 * num2;
};

ScientificCalculator.prototype.divide = function (num1, num2) {
    if (num2 === 0) {
        return "Division by zero is not possible";
    }
    return num1 / num2;
};

const scientificCalc = new ScientificCalculator();
const resultMultiply = scientificCalc.multiply(4, 5);
const resultDivide = scientificCalc.divide(10, 2);

console.log("Multiply:", resultMultiply);
console.log("Divide:", resultDivide);
