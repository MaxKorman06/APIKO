// Створити клас який містить поле name.
// Зробити так щоб це поле автоматично через 5с занулювалося(ставало null) після створення об’єкта
// Також добавити функцію(метод) цього класу яка буде зупиняти(скасовувати) це занулювання

class NameClass {
  constructor() {
    this.customField = "Initial Value";

    this.nullifyTimeout = setTimeout(() => {
      this.customField = null;
      console.log("Custom field has been nullified.");
    }, 5000);
  }

  cancelNullification() {
    clearTimeout(this.nullifyTimeout);
    console.log("Nullification canceled.");
  }
}

setTimeout(() => {
  myInstance.cancelNullification();
}, 3000);

const myInstance = new NameClass();
