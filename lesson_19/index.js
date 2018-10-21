// Создать класс  Human, который в качестве аргумента принимает 
// объект с ключами name(содержит ваше имя строкой), 
// age(содержит ваш возраст числом). 
// Human({ name: 'ivan', age: 19 })

// У класса Human должен быть метод sayHello, который будет выводить 
// в консоль строку “Hello, my name is  ${name}, i am ${age} years old”

// Создать класс AlevelStudent, наследуемый от Human, который 
//принимает в себя параметры name, age и новый ключ marks, 
//которой будет содержать массив ваших оценок за домашние задание числами 
//    ([5, 3, 5, 1, 4])

// AlevelStudent({ name: 'Ivan', age: 19, marks: [1, 2, 3, 4, 5] });

// У класса AlevelStudent должен быть метод averageMark, 
//который выводит в консоль среднее значение из вашего массива оценок

function Human (name, age) {
  this.name = 'Irina', 
  this.age = 19  
}

Human.prototype.sayHello = function () { 
  console.log ( `Hello, my name is  ${this.name}, i am ${this.age} years old` )
}

function AlevelStudent (name, age, marks) {
  this.name = 'Irina', 
  this.age = 19,
  this.marks = [1, 2, 3, 4, 5]
}

let a = new AlevelStudent;
let sum = 0;

for(let i = 0; i < a.marks.length; i += 1) {
  sum += a.marks[i];
}

let res = sum / a.marks.length;

AlevelStudent.prototype = Object.create(Human.prototype);
AlevelStudent.prototype.constructor = AlevelStudent;

AlevelStudent.prototype.averageMark = function () { console.log ( res )}

