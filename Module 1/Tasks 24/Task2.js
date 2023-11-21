// Дано: Функція для генерації ID
// 1) Створити клас TodoItem із полями(властивостями): id(генерується у конструкторі за допомогою функції),
//  name, checked(за замовчуванням false). Для поля checked написати гетер та сетер
//   (добавити валідацію: поле може приймати лише булеве значення true або false)
// 2) Створити клас TodoList із полями: id(генерується у конструкторі за допомогою функції),
//  name, items(за замовчуванням пустий масив).
// Добавити наступні методи:
// addItem - метод який добавляє елементи до масиву (потрібно зробити валідацію на тип TodoItem)
// removeItemById - метод який видаляє елемент з масиву по id
// getItemById - метод який повертає елемент TodoItem з масиву по id
// 3) Створити екземпляр класу TodoList;
// 4) Створити 4 екземпляри класу TodoItem, добавити їх у TodoList та вивести у консоль екземпляр класу TodoList.
// 5) Поміняти значення checked у одного екземпляру TodoItem та вивести TodoList у консоль
// ( у масиві items це поле має бути оновлене)
// 6) Видалити 2 екземпляри TodoItem із TodoList та вивести у консоль TodoList
// (у масиві items має залишитись лише 2 екземпляри TodoItem)


function generateId() {
    return "_" + Math.random().toString(36).substr(2, 9);
}

function generateUniqueId() {
    return "_" + Math.random().toString(36).substr(2, 9);
}

class Task {
    constructor(name) {
        this.taskId = generateUniqueId();
        this.name = name;
        this._isChecked = false;
    }

    get isChecked() {
        return this._isChecked;
    }

    set isChecked(value) {
        if (typeof value === 'boolean') {
            this._isChecked = value;
        } else {
            console.error('Invalid value for isChecked. Please provide a boolean value.');
        }
    }
}

class TaskList {
    constructor(name) {
        this.listId = generateUniqueId();
        this.name = name;
        this.tasks = [];
    }

    addTask(task) {
        if (task instanceof Task) {
            this.tasks.push(task);
        } else {
            console.error('Invalid task type. Please provide an instance of Task.');
        }
    }

    removeTaskById(taskId) {
        this.tasks = this.tasks.filter(task => task.taskId !== taskId);
    }

    getTaskById(taskId) {
        return this.tasks.find(task => task.taskId === taskId);
    }
}

const myTaskList = new TaskList('My Task List');

const task1 = new Task('Task 1');
const task2 = new Task('Task 2');
const task3 = new Task('Task 3');
const task4 = new Task('Task 4');

myTaskList.addTask(task1);
myTaskList.addTask(task2);
myTaskList.addTask(task3);
myTaskList.addTask(task4);

console.log('TaskList after adding tasks:');
console.log(myTaskList);

task1.isChecked = true;

console.log('TaskList after changing isChecked value:');
console.log(myTaskList);

const taskIdToRemove1 = task2.taskId;
const taskIdToRemove2 = task3.taskId;

myTaskList.removeTaskById(taskIdToRemove1);
myTaskList.removeTaskById(taskIdToRemove2);

console.log('TaskList after removing tasks:');
console.log(myTaskList);
