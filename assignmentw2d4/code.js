console.log("************Problem1****************");
String.prototype.filter = function (...words) {
  let str = this.toString();
  for (let i = 0; i < words.length; i++) {
    str = str.replace(" " + words[i], "");
  }
  return str;
}

let str = "My name is narayan name";

console.log(str.filter('name', 'My'));

console.log("************Problem2****************");

Array.prototype.bubblesSort = function () {
  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

let arr = [6, 4, 0, 3, -2, 1];
console.log(arr.bubblesSort());

console.log("************Problem 3*****************")

var Person = function () { };
Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.describe = function () {
  return this.name + ", " + this.age + " years old.";
}
var Student = function () { };
Student.prototype = new Person();
Student.prototype.learn = function (subject) {
  return this.name + " Just Learned " + subject;
}

var Teacher = function () { };
Teacher.prototype = new Person();

Teacher.prototype.teach = function (subject) {
  return this.name + " is now teaching " + subject;
}



var me = new Student();
me.initialize("Narayan", 27);
console.log(me.learn("WAP"));

var teacher = new Teacher();
teacher.initialize("Michal", 40);
console.log(teacher.teach("WAP"));



const CAR = (function () {
  let speed = 0;
  let direction = 0;
  const gasPaddle = function () {
    if (speed <= 115) {
      speed += 5;
    }
  }

  const breake = function () {
    if (speed >= 10) {
      speed -= 10;
    }
  }

  const turnLeft = function (degree) {
    direction -= degree;
  }

  const turnRight = function (degree) {
    direction += degree;
  }

  const status = function () {
    return "This car is driving direction " + direction + " at" + speed + "mph";
  }

  return {
    gasPaddle: gasPaddle,
    break: breake,
    turnLeft: turnLeft,
    turnRight: turnRight,
    status: status
  }

})();


function Computer() {
}

Computer.prototype.initialize = function (ram, cpu, storage) {
  this.ram = ram;
  this.cpu = cpu;
  this.storage=storage;
}
Computer.prototype.runProgram = function (program) {
  console.log("running" + program);
}


function Laptop(battery) {
  this.battery = battery;
}

Laptop.prototype = new Computer();

Laptop.prototype.carryAround = function () {
  console.log("carrying laptop:  cpu" + this.cpu + " ram: " + this.ram + " storage: " + this.storage + " battery: " + this.battery);

}

var dell = new Laptop("dell");
dell.initialize("test","test","test");
dell.carryAround();