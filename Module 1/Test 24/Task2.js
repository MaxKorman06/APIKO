// Дано: Функція для генерації ID
// 1) Створити клас TodoItem із полями(властивостями): id(генерується у конструкторі за допомогою функції),
// name, checked(за замовчуванням false). Для поля checked написати гетер та сетер
// (добавити валідацію: поле може приймати лише булеве значення true або false)
// 2) Створити клас TodoList із полями: id(генерується у конструкторі за допомогою функції),
// name, items(за замовчуванням пустий масив).
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

class TodoItem {
  constructor(name) {
    this.itemId = generateUniqueId();
    this.name = name;
    this._isChecked = false;
  }

  get isChecked() {
    return this._isChecked;
  }

  set isChecked(value) {
    if (typeof value === "boolean") {
      this._isChecked = value;
    } else {
      console.error(
        "Invalid value for isChecked. Please provide a boolean value."
      );
    }
  }
}

class TodoList {
  constructor(name) {
    this.listId = generateUniqueId();
    this.name = name;
    this.items = [];
  }

  addItem(item) {
    if (item instanceof TodoItem) {
      this.items.push(item);
    } else {
      console.error("Invalid item type. Please provide an instance of Item.");
    }
  }

  removeItemById(itemId) {
    this.items = this.items.filter((item) => item.itemId !== itemId);
  }

  getItemById(itemId) {
    return this.items.find((item) => item.itemId === itemId);
  }
}

const myItemList = new TodoList("My Item List");

const item1 = new TodoItem("Item 1");
const item2 = new TodoItem("Item 2");
const item3 = new TodoItem("Item 3");
const item4 = new TodoItem("Item 4");

myItemList.addItem(item1);
myItemList.addItem(item2);
myItemList.addItem(item3);
myItemList.addItem(item4);

console.log("ItemList after adding items:");
console.log(myItemList);

item1.isChecked = true;

console.log("ItemList after changing isChecked value:");
console.log(myItemList);

const itemIdToRemove1 = item2.itemId;
const itemIdToRemove2 = item3.itemId;

myItemList.removeItemById(itemIdToRemove1);
myItemList.removeItemById(itemIdToRemove2);

console.log("ItemList after removing items:");
console.log(myItemList);